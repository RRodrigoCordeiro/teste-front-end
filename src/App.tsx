import { useProducts } from '@/hooks/useProducts';
import { ProductShowcase } from '@/components/ProductShowcase';
import type { Product } from '@/types/product';
import styles from './App.module.scss';

function App() {
  const { products, isLoading, error } = useProducts();

  const handleSelectProduct = (product: Product) => {
    console.log('Produto selecionado:', product.productName);
  };

  return (
    <main className={styles.main}>
      <ProductShowcase
        title="Produtos relacionados"
        products={products}
        isLoading={isLoading}
        error={error}
        showCategories
        onSelectProduct={handleSelectProduct}
      />
    </main>
  );
}

export default App;