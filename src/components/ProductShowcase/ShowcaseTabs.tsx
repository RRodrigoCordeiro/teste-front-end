import styles from './ShowcaseTabs.module.scss';

interface ShowcaseTabsProps {
  categories: readonly string[];
  activeCategory: string;
  onChange: (category: string) => void;
}

export function ShowcaseTabs({
  categories,
  activeCategory,
  onChange,
}: ShowcaseTabsProps) {
  return (
    <nav aria-label="Categorias de produtos">
      <ul className={styles.tabs}>
        {categories.map((category) => {
          const isActive = category === activeCategory;

          return (
            <li key={category} className={styles.item}>
              <button
                type="button"
                className={`${styles.tab} ${isActive ? styles.active : ''}`}
                aria-pressed={isActive}
                onClick={() => onChange(category)}
              >
                {category}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}