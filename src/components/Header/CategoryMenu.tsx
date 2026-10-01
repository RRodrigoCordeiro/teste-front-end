import crownIcon from '@/assets/icons/crown.svg';
import styles from './CategoryMenu.module.scss';

interface MenuItem {
  label: string;
  highlight?: boolean;
  icon?: string;
}

const MENU_ITEMS: MenuItem[] = [
  { label: 'Todas categorias' },
  { label: 'Supermercado' },
  { label: 'Livros' },
  { label: 'Moda' },
  { label: 'Lançamentos' },
  { label: 'Ofertas do dia', highlight: true },
  { label: 'Assinatura', icon: crownIcon },
];

export function CategoryMenu() {
  return (
    <nav className={styles.menu} aria-label="Categorias">
      <ul className={styles.list}>
        {MENU_ITEMS.map(({ label, highlight, icon }) => (
          <li key={label}>
            <a
              href="#"
              className={`${styles.link} ${highlight ? styles.highlight : ''}`}
            >
              {icon && <img src={icon} alt="" width={20} height={20} />}
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}