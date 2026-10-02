const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});


const OLD_PRICE_RATIO = 1.07;

export function formatPrice(cents: number): string {
  return currencyFormatter.format(cents / 100);
}

export function getInstallmentValue(cents: number, installments = 2): string {
  return formatPrice(Math.round(cents / installments));
}


export function getOldPrice(cents: number): string {
  return formatPrice(Math.round(cents * OLD_PRICE_RATIO));
}