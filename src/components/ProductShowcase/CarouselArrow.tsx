import styles from './CarouselArrow.module.scss';

interface CarouselArrowProps {
  direction: 'prev' | 'next';
  onClick: () => void;
  disabled?: boolean;
}

const LABELS = {
  prev: 'Ver produtos anteriores',
  next: 'Ver próximos produtos',
};

export function CarouselArrow({
  direction,
  onClick,
  disabled = false,
}: CarouselArrowProps) {
  return (
    <button
      type="button"
      className={`${styles.arrow} ${styles[direction]}`}
      aria-label={LABELS[direction]}
      onClick={onClick}
      disabled={disabled}
    >
      <svg
        width="8"
        height="13"
        viewBox="0 0 8 13"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M1.5 1.5L6.5 6.5L1.5 11.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}