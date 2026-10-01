import { TopBar } from './TopBar';
import { MainBar } from './MainBar';
import { CategoryMenu } from './CategoryMenu';
import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <TopBar />
      <MainBar />
      <CategoryMenu />
    </header>
  );
}