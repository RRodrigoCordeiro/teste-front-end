import { useId } from 'react';
import type { FormEvent } from 'react';
import logo from '@/assets/logo.svg';
import searchIcon from '@/assets/icons/search.svg';
import boxReturnIcon from '@/assets/icons/box-return.svg';
import heartIcon from '@/assets/icons/heart.svg';
import userCircleIcon from '@/assets/icons/user-circle.svg';
import shoppingCartIcon from '@/assets/icons/shopping-cart.svg';
import styles from './MainBar.module.scss';

const ACTIONS = [
  { label: 'Trocas e devoluções', icon: boxReturnIcon, size: 24 },
  { label: 'Favoritos', icon: heartIcon, size: 32 },
  { label: 'Minha conta', icon: userCircleIcon, size: 32 },
  { label: 'Carrinho', icon: shoppingCartIcon, size: 32 },
];

export function MainBar() {
  const searchId = useId();

  
  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className={styles.mainBar}>
      <a href="/" className={styles.logo}>
        <img src={logo} alt="Econverse" width={139} height={42} />
      </a>

      <form className={styles.search} role="search" onSubmit={handleSearch}>
        <label htmlFor={searchId} className={styles.label}>
          Buscar produtos
        </label>
        <input
          id={searchId}
          className={styles.input}
          type="search"
          name="q"
          placeholder="O que você está buscando?"
        />
        <button type="submit" className={styles.searchButton} aria-label="Buscar">
          <img src={searchIcon} alt="" width={28} height={28} />
        </button>
      </form>

      <nav aria-label="Atalhos da conta">
        <ul className={styles.actions}>
          {ACTIONS.map(({ label, icon, size }) => (
            <li key={label}>
              <a href="#" className={styles.action} aria-label={label}>
                <img src={icon} alt="" width={size} height={size} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}