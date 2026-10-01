import shieldCheckIcon from '@/assets/icons/shield-check.svg';
import truckIcon from '@/assets/icons/truck.svg';
import creditCardIcon from '@/assets/icons/credit-card.svg';
import styles from './TopBar.module.scss';

const BENEFITS = [
  { icon: shieldCheckIcon, before: 'Compra ', highlight: '100% segura', after: '' },
  { icon: truckIcon, before: '', highlight: 'Frete grátis', after: ' acima de R$ 350' },
  { icon: creditCardIcon, before: '', highlight: 'Parcele', after: ' suas compras' },
];

export function TopBar() {
  return (
    <div className={styles.topBar}>
      <ul className={styles.list}>
        {BENEFITS.map(({ icon, before, highlight, after }) => (
          <li key={highlight} className={styles.item}>
            <img src={icon} alt="" width={20} height={20} />
            <span>
              {before}
              <strong className={styles.highlight}>{highlight}</strong>
              {after}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}