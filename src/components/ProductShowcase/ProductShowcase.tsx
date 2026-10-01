import { useId, useState } from 'react';
import type { Product } from '@/types/product';
import { useCarousel } from '@/hooks/useCarousel';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ProductCard } from '@/components/ProductCard';
import { ShowcaseTabs } from './ShowcaseTabs';
import { CarouselArrow } from './CarouselArrow';
import styles from './ProductShowcase.module.scss';

const CATEGORIES = [
  'Celular',
  'Acessórios',
  'Tablets',
  'Notebooks',
  'TVs',
  'Ver todos',
] as const;

interface ProductShowcaseProps {
  title: string;
  products: Product[];
  isLoading?: boolean;
  error?: string | null;
  showCategories?: boolean;
  onSelectProduct: (product: Product) => void;
}

export function ProductShowcase({
  title,
  products,
  isLoading = false,
  error = null,
  showCategories = false,
  onSelectProduct,
}: ProductShowcaseProps) {
  const titleId = useId();
  const [activeCategory, setActiveCategory] = useState<string>(CATEGORIES[0]);
  const { trackRef, canScrollPrev, canScrollNext, scroll } =
    useCarousel<HTMLUListElement>(products.length);

  const hasProducts = products.length > 0;

  return (
    <section className={styles.showcase} aria-labelledby={titleId}>
      <SectionTitle id={titleId}>{title}</SectionTitle>

      {showCategories && (
        <ShowcaseTabs
          categories={CATEGORIES}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />
      )}

      <div className={styles.carousel}>
        {isLoading && <p className={styles.status}>Carregando produtos...</p>}

        {error && (
          <p className={styles.status} role="alert">
            {error}
          </p>
        )}

        {hasProducts && (
          <CarouselArrow
            direction="prev"
            onClick={() => scroll('prev')}
            disabled={!canScrollPrev}
          />
        )}

        <ul ref={trackRef} className={styles.track}>
          {products.map((product) => (
            <li key={product.productName} className={styles.slide}>
              <ProductCard product={product} onSelect={onSelectProduct} />
            </li>
          ))}
        </ul>

        {hasProducts && (
          <CarouselArrow
            direction="next"
            onClick={() => scroll('next')}
            disabled={!canScrollNext}
          />
        )}
      </div>
    </section>
  );
}