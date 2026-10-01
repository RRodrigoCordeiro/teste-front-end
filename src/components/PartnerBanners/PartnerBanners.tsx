import partnersImage from '@/assets/images/partners.webp';
import styles from './PartnerBanners.module.scss';

const PARTNERS = [
  {
    id: 'partner-1',
    title: 'Parceiros',
    description: 'Lorem ipsum dolor sit amet, consectetur',
  },
  {
    id: 'partner-2',
    title: 'Parceiros',
    description: 'Lorem ipsum dolor sit amet, consectetur',
  },
];

export function PartnerBanners() {
  return (
    <section className={styles.partners} aria-label="Parceiros">
      {PARTNERS.map(({ id, title, description }) => (
        <article key={id} className={styles.card}>
          <img
            className={styles.image}
            src={partnersImage}
            alt=""
            width={634}
            height={350}
            loading="lazy"
          />

          <div className={styles.content}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            {/* Numa loja real, levaria à página do parceiro */}
            <a href="#" className={styles.link}>
              Confira
            </a>
          </div>
        </article>
      ))}
    </section>
  );
}