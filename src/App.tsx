import { useState } from 'react';
import { useProducts } from '@/hooks/useProducts';
import { Header } from '@/components/Header';
import { HeroBanner } from '@/components/HeroBanner';
import { ProductShowcase } from '@/components/ProductShowcase';
import { ProductModal } from '@/components/ProductModal';
import type { Product } from '@/types/product';
import styles from './App.module.scss';

function App() {
  const { products, isLoading, error } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleCloseModal = () => setSelectedProduct(null);

  return (
    <>
      <Header />

      <main className={styles.main}>
        <HeroBanner />

        <ProductShowcase
          title="Produtos relacionados"
          products={products}
          isLoading={isLoading}
          error={error}
          showCategories
          onSelectProduct={setSelectedProduct}
        />
      </main>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </>
  );
}

export default App;