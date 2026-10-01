import styles from './QuantitySelector.module.scss';

interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export function QuantitySelector({
  value,
  onChange,
  min = 1,
  max = 99,
}: QuantitySelectorProps) {
  const canDecrease = value > min;
  const canIncrease = value < max;

  return (
    <div className={styles.selector} role="group" aria-label="Quantidade">
      <button
        type="button"
        className={styles.control}
        onClick={() => onChange(value - 1)}
        disabled={!canDecrease}
        aria-label="Diminuir quantidade"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
          <path d="M0 6h12" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>

      <span className={styles.value} aria-live="polite">
        {String(value).padStart(2, '0')}
      </span>

      <button
        type="button"
        className={styles.control}
        onClick={() => onChange(value + 1)}
        disabled={!canIncrease}
        aria-label="Aumentar quantidade"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
          <path d="M0 6h12M6 0v12" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>
    </div>
  );
}