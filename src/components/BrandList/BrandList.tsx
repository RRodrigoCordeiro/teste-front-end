import { useId } from 'react';
import logo from '@/assets/logo.svg';
import { SectionTitle } from '@/components/ui/SectionTitle';
import styles from './BrandList.module.scss';

const BRANDS = [
  { id: 'brand-1', name: 'Econverse', logo },
  { id: 'brand-2', name: 'Econverse', logo },
  { id: 'brand-3', name: 'Econverse', logo },
  { id: 'brand-4', name: 'Econverse', logo },
  { id: 'brand-5', name: 'Econverse', logo },
];

export function BrandList() {
  const titleId = useId();

  return (
    <section className={styles.brands} aria-labelledby={titleId}>
      <SectionTitle id={titleId} withLines={false}>
        Navegue por marcas
      </SectionTitle>

      <ul className={styles.list}>
        {BRANDS.map(({ id, name, logo: brandLogo }) => (
          <li key={id}>
        
            <a href="#" className={styles.brand}>
              <img
                src={brandLogo}
                alt={name}
                width={117}
                height={35}
                loading="lazy"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}