import { useState } from 'react';
import type { CSSProperties } from 'react';
import technologyIcon from '@/assets/icons/categories/technology.webp';
import supermarketIcon from '@/assets/icons/categories/supermarket.webp';
import drinksIcon from '@/assets/icons/categories/drinks.webp';
import toolsIcon from '@/assets/icons/categories/tools.webp';
import healthIcon from '@/assets/icons/categories/health.webp';
import sportsFitnessIcon from '@/assets/icons/categories/sports-fitness.webp';
import fashionIcon from '@/assets/icons/categories/fashion.webp';
import styles from './CategoryList.module.scss';

const CATEGORIES = [
  { label: 'Tecnologia', icon: technologyIcon },
  { label: 'Supermercado', icon: supermarketIcon },
  { label: 'Bebidas', icon: drinksIcon },
  { label: 'Ferramentas', icon: toolsIcon },
  { label: 'Saúde', icon: healthIcon },
  { label: 'Esportes e Fitness', icon: sportsFitnessIcon },
  { label: 'Moda', icon: fashionIcon },
];

export function CategoryList() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].label);

  return (
    <nav className={styles.categories} aria-label="Compre por categoria">
      <ul className={styles.list}>
        {CATEGORIES.map(({ label, icon }) => {
          const isActive = label === activeCategory;

          return (
            <li key={label}>
              <button
                type="button"
                className={`${styles.item} ${isActive ? styles.active : ''}`}
                aria-pressed={isActive}
                onClick={() => setActiveCategory(label)}
              >
                <span className={styles.box}>
                  <span
                    className={styles.icon}
                    style={{ '--icon': `url(${icon})` } as CSSProperties}
                    aria-hidden="true"
                  />
                </span>
                <span className={styles.label}>{label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}