import logoFooter from '@/assets/logo-footer.svg';
import instagramIcon from '@/assets/icons/social/instagram.svg';
import facebookIcon from '@/assets/icons/social/facebook.svg';
import linkedinIcon from '@/assets/icons/social/linkedin.svg';
import styles from './Footer.module.scss';

const SOCIAL_LINKS = [
  { label: 'Instagram', icon: instagramIcon },
  { label: 'Facebook', icon: facebookIcon },
  { label: 'LinkedIn', icon: linkedinIcon },
];

const LINK_COLUMNS = [
  {
    title: 'Institucional',
    links: ['Sobre Nós', 'Movimento', 'Trabalhe conosco'],
  },
  {
    title: 'Ajuda',
    links: ['Suporte', 'Fale Conosco', 'Perguntas Frequentes'],
  },
  {
    title: 'Termos',
    links: ['Termos e Condições', 'Política de Privacidade', 'Troca e Devolução'],
  },
];

export function Footer() {
  return (
    <footer>
      <div className={styles.main}>
        <div className={styles.inner}>
          <div className={styles.brand}>
            <a href="/" className={styles.logo}>
              <img
                src={logoFooter}
                alt="Econverse"
                width={164}
                height={48}
                loading="lazy"
              />
            </a>

            <p className={styles.about}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <ul className={styles.social} aria-label="Redes sociais">
              {SOCIAL_LINKS.map(({ label, icon }) => (
                <li key={label}>
                  <a href="#" className={styles.socialLink} aria-label={label}>
                    <img src={icon} alt="" width={24} height={24} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.divider} aria-hidden="true" />

          <nav className={styles.columns} aria-label="Links do rodapé">
            {LINK_COLUMNS.map(({ title, links }) => (
              <div key={title}>
                <h2 className={styles.columnTitle}>{title}</h2>
                <ul className={styles.linkList}>
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className={styles.link}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </footer>
  );
}