import type { Product, ProductsResponse } from '../types/product';

const PRODUCTS_URL =
  '/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';

export async function getProducts(signal?: AbortSignal): Promise<Product[]> {
  const response = await fetch(PRODUCTS_URL, { signal });

  if (!response.ok) {
    throw new Error(`Erro ao buscar produtos (status ${response.status})`);
  }

  const data: ProductsResponse = await response.json();

  if (!data.success) {
    throw new Error('A API não retornou os produtos.');
  }

  return data.products;
}
