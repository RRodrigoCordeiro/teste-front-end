import { useCallback, useEffect, useRef, useState } from 'react';

type ScrollDirection = 'prev' | 'next';

export function useCarousel<T extends HTMLElement>(itemCount: number) {
  const trackRef = useRef<T>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

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

  const scroll = (direction: ScrollDirection) => {
    const track = trackRef.current;
    if (!track) return;

    const distance =
      direction === 'next' ? track.clientWidth : -track.clientWidth;
    track.scrollBy({ left: distance, behavior: 'smooth' });
  };

  return { trackRef, canScrollPrev, canScrollNext, scroll };
} 