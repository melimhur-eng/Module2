// Day 17 exercises - Functions, Closures & Higher-Order Functions

// 1. vat with a default parameter, and the same thing as an arrow function
function vat(amount, rate = 0.15) {
  return amount * rate;
}
const vatArrow = (amount, rate = 0.15) => amount * rate;

console.log(vat(1000));
console.log(vatArrow(1000));
console.log(vat(1000, 0.2));

// 2. makeCounter closure
function makeCounter() {
  let count = 0;
  return () => ++count;
}

const next = makeCounter();
console.log(next());
console.log(next());
console.log(next());
// count stays private because it only lives inside makeCounter's scope.
// the returned function is the only thing that can see it, so nothing
// outside can read it or change it directly.

// 3. discountBy factory
function discountBy(rate) {
  return price => price * (1 - rate);
}

const memberPrice = discountBy(0.10);
const salePrice = discountBy(0.30);

console.log(memberPrice(1000));
console.log(salePrice(1000));

// 4. applyToAll higher-order function
function applyToAll(list, fn) {
  const result = [];
  for (const item of list) {
    result.push(fn(item));
  }
  return result;
}

const prices = [250, 600, 180, 900];
const withVat = applyToAll(prices, price => vat(price) + price);
console.log(withVat);

// 5. forEach with index
const cities = ["Addis Ababa", "Gondar", "Bahir Dar"];
cities.forEach((city, i) => {
  console.log(`${i + 1}. ${city}`);
});
