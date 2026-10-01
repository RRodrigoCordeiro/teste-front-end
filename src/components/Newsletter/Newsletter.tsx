import { useId, useState } from 'react';
import type { FormEvent } from 'react';
import styles from './Newsletter.module.scss';

export function Newsletter() {
  const titleId = useId();
  const nameId = useId();
  const emailId = useId();
  const [isSubscribed, setIsSubscribed] = useState(false);

 
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    setIsSubscribed(true);
  };

  return (
    <section className={styles.newsletter} aria-labelledby={titleId}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <h2 id={titleId} className={styles.title}>
            Inscreva-se na nossa newsletter
          </h2>
          <p className={styles.subtitle}>
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos da Econverse.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.fields}>
            <label htmlFor={nameId} className={styles.srOnly}>
              Nome
            </label>
            <input
              id={nameId}
              className={styles.input}
              type="text"
              name="name"
              placeholder="Digite seu nome"
              autoComplete="name"
              required
            />

            <label htmlFor={emailId} className={styles.srOnly}>
              E-mail
            </label>
            <input
              id={emailId}
              className={styles.input}
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              autoComplete="email"
              required
            />

            <button type="submit" className={styles.submit}>
              INSCREVER
            </button>
          </div>

          <label className={styles.terms}>
            <input
              className={styles.checkbox}
              type="checkbox"
              name="terms"
              required
            />
            Aceito os termos e condições
          </label>

          <p className={styles.feedback} role="status">
            {isSubscribed && 'Inscrição realizada com sucesso!'}
          </p>
        </form>
      </div>
    </section>
  );
}