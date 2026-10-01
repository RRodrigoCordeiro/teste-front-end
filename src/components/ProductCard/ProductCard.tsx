import type { Product } from '@/types/product';
import { formatPrice, getInstallmentValue } from '@/utils/formatPrice';
import { Button } from '@/components/ui/Button';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  const { productName, descriptionShort, photo, price } = product;

  const handleSelect = () => onSelect(product);

  return (
    <article className={styles.card}>
      <img
        className={styles.image}
        src={photo}
        alt={productName}
        width={278}
        height={228}
        loading="lazy"
      />

      <h3 className={styles.name}>
        <button
          type="button"
          className={styles.link}
          onClick={handleSelect}
          aria-haspopup="dialog"
        >
          {descriptionShort}
        </button>
      </h3>

      <div className={styles.pricing}>
        <p className={styles.price}>{formatPrice(price)}</p>
        <p className={styles.installments}>
          ou 2x de {getInstallmentValue(price)} sem juros
        </p>
        <p className={styles.shipping}>Frete grátis</p>
      </div>

      <Button className={styles.buy} onClick={handleSelect} fullWidth>
        Comprar
      </Button>
    </article>
  );
}