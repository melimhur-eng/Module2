// Exercise 1
// Given an array of ETB prices:
// - use map to add 15% VAT
// - use filter to keep only the ones under 1000
// - use reduce to get the grand total

const prices = [250, 600, 180, 900, 1200];

// map: add 15% VAT to every price
const pricesWithVat = prices.map((price) => price * 1.15);
console.log("Prices with VAT:", pricesWithVat);

// filter: keep only prices under 1000
const affordablePrices = pricesWithVat.filter((price) => price < 1000);
console.log("Prices under 1000:", affordablePrices);

// reduce: add everything up into one total
const grandTotal = affordablePrices.reduce((sum, price) => sum + price, 0);
console.log("Grand total:", grandTotal, "ETB");
