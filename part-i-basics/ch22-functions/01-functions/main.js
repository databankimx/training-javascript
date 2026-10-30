function subtotal(prices, taxRate = 0) {
  const base = prices.reduce((sum, price) => sum + price, 0);
  return base * (1 + taxRate);
}
console.log(subtotal([10, 20]));
console.log(subtotal([10, 20], 0.1));
