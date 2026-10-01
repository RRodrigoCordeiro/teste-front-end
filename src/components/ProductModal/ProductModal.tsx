import { useEffect, useId, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import type { Product } from '@/types/product';
import { formatPrice } from '@/utils/formatPrice';
import { Button } from '@/components/ui/Button';
import { QuantitySelector } from '@/components/ui/QuantitySelector';
import styles from './ProductModal.module.scss';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const [quantity, setQuantity] = useState(1);

  const { productName, descriptionShort, photo, price } = product;

  
  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  const closeModal = () => dialogRef.current?.close();

  // Clique fora da caixa branca (no fundo escuro) fecha o modal
  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) closeModal();
  };

  return (
    <dialog
      ref={dialogRef}
      className={styles.modal}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={handleBackdropClick}
    >
      <div className={styles.content}>
        <button
          type="button"
          className={styles.close}
          onClick={closeModal}
          aria-label="Fechar"
        >
          <svg width="13" height="13" viewBox="0 0 13 13" aria-hidden="true">
            <path
              d="M1 1l11 11M12 1L1 12"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </button>

        <img
          className={styles.image}
          src={photo}
          alt={productName}
          width={247}
          height={192}
        />

        <div className={styles.info}>
          <h2 id={titleId} className={styles.name}>
            {productName}
          </h2>
          <p className={styles.price}>{formatPrice(price)}</p>
          <p className={styles.description}>{descriptionShort}</p>
 
          <a href="#" className={styles.details}>
            Veja mais detalhes do produto &gt;
          </a>

          <div className={styles.actions}>
            <QuantitySelector value={quantity} onChange={setQuantity} />
            <Button
              variant="accent"
              size="sm"
              className={styles.buy}
              onClick={closeModal}
            >
              Comprar
            </Button>
          </div>
        </div>
      </div>
    </dialog>
  );
}