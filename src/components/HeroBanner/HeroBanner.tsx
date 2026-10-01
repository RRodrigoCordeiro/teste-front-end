import { useId } from 'react';
import heroBannerImage from '@/assets/images/hero-banner.webp';
import { Button } from '@/components/ui/Button';
import styles from './HeroBanner.module.scss';

export function HeroBanner() {
  const titleId = useId();

  return (
    <section className={styles.banner} aria-labelledby={titleId}>
      <img
        className={styles.image}
        src={heroBannerImage}
        alt=""
        width={1440}
        height={390}
        fetchPriority="high"
      />

      <div className={styles.content}>
        <h1 id={titleId} className={styles.title}>
          Venha conhecer nossas promoções
        </h1>
        <p className={styles.subtitle}>
          <strong className={styles.highlight}>50% Off</strong> nos produtos
        </p>
        <Button variant="accent" size="lg" className={styles.cta}>
          Ver produto
        </Button>
      </div>
    </section>
  );
}