import type { ReactNode } from 'react';
import styles from './SectionTitle.module.scss';

interface SectionTitleProps {
  id?: string;
  withLines?: boolean;
  children: ReactNode;
}

export function SectionTitle({
  id,
  withLines = true,
  children,
}: SectionTitleProps) {
  return (
    <h2
      id={id}
      className={`${styles.title} ${withLines ? styles.withLines : ''}`}
    >
      {children}
    </h2>
  );
}