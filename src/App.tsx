import { useProducts } from '@/hooks/useProducts';
import { ProductCard } from '@/components/ProductCard';
import type { Product } from '@/types/product';

function App() {
  const { products, isLoading, error } = useProducts();

  const handleSelect = (product: Product) => {
    console.log('Produto selecionado:', product.productName);
  };

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 304px)',
        gap: 24,
        padding: 24,
      }}
    >
      {products.map((product) => (
        <ProductCard
          key={product.productName}
          product={product}
          onSelect={handleSelect}
        />
      ))}
    </main>
  );
}

export default App;