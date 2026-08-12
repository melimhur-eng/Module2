// Exercise 3
// Destructure name and city from a customer in one line,
// then write a function greet({ name }) that uses parameter destructuring.

const customer = {
  name: "Dawit Tesfaye",
  city: "Bahir Dar",
  balance: 800,
};

// destructuring in one line
const { name, city } = customer;
console.log(name, "lives in", city);

// function that destructures its parameter
function greet({ name }) {
  return `Selam ${name}`;
}

console.log(greet(customer));
