import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../services/products';

export function useProducts() {
  const { data, isPending, isError } = useQuery({
    queryKey: ['products'],
    queryFn: ({ signal }) => getProducts(signal),
  });

  return {
    products: data ?? [],
    isLoading: isPending,
    error: isError
      ? 'Não foi possível carregar os produtos. Tente novamente mais tarde.'
      : null,
  };
}
