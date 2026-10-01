import { useCallback, useEffect, useRef, useState } from 'react';

type ScrollDirection = 'prev' | 'next';

export function useCarousel<T extends HTMLElement>(itemCount: number) {
  const trackRef = useRef<T>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [hiddenIndexes, setHiddenIndexes] = useState<Set<number>>(
    () => new Set(),
  );

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    setCanScrollPrev(track.scrollLeft > 0);
    setCanScrollNext(track.scrollLeft < maxScroll - 1);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateScrollState();
    track.addEventListener('scroll', updateScrollState, { passive: true });

    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(track);

    return () => {
      track.removeEventListener('scroll', updateScrollState);
      resizeObserver.disconnect();
    };
  }, [itemCount, updateScrollState]);
 
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const paddingX = parseFloat(getComputedStyle(track).paddingLeft) || 0;

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        setHiddenIndexes((previous) => {
          const next = new Set(previous);

          entries.forEach((entry) => {
            const index = Number((entry.target as HTMLElement).dataset.index);

            if (entry.isIntersecting) next.delete(index);
            else next.add(index);
          });

          return next;
        });
      },
      { root: track, rootMargin: `0px -${paddingX}px` },
    );

    Array.from(track.children).forEach((item) =>
      intersectionObserver.observe(item),
    );

    return () => intersectionObserver.disconnect();
  }, [itemCount]);

  const scroll = (direction: ScrollDirection) => {
    const track = trackRef.current;
    if (!track) return;

    const distance =
      direction === 'next' ? track.clientWidth : -track.clientWidth;
    track.scrollBy({ left: distance, behavior: 'smooth' });
  };

  return { trackRef, canScrollPrev, canScrollNext, hiddenIndexes, scroll };
}