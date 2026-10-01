import { useState } from 'react';
import { useProducts } from '@/hooks/useProducts';
import { Header } from '@/components/Header';
import { HeroBanner } from '@/components/HeroBanner';
import { CategoryList } from '@/components/CategoryList';
import { ProductShowcase } from '@/components/ProductShowcase';
import { PartnerBanners } from '@/components/PartnerBanners';
import { BrandList } from '@/components/BrandList';
import { Newsletter } from '@/components/Newsletter';
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
        <div className={styles.intro}>
          <HeroBanner />
          <CategoryList />
        </div>

        <ProductShowcase
          title="Produtos relacionados"
          products={products}
          isLoading={isLoading}
          error={error}
          showCategories
          onSelectProduct={setSelectedProduct}
        />

        <PartnerBanners />

        <ProductShowcase
          title="Produtos relacionados"
          products={products}
          isLoading={isLoading}
          error={error}
          showViewAll
          onSelectProduct={setSelectedProduct}
        />

        <PartnerBanners />

        <BrandList />

        <ProductShowcase
          title="Produtos relacionados"
          products={products}
          isLoading={isLoading}
          error={error}
          showViewAll
          onSelectProduct={setSelectedProduct}
        />

        <Newsletter />
      </main>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </>
  );
}

export default App;