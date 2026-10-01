const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export function formatPrice(cents: number): string {
  return currencyFormatter.format(cents / 100);
}

export function getInstallmentValue(cents: number, installments = 2): string {
  return formatPrice(Math.round(cents / installments));
}
