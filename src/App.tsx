import { useProducts } from '@/hooks/useProducts';
import { formatPrice } from '@/utils/formatPrice';

function App() {
  const { products, isLoading, error } = useProducts();

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main>
      <h1>Econverse</h1>
      <ul>
        {products.map((product) => (
          <li key={product.productName}>
            {product.productName} — {formatPrice(product.price)}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
