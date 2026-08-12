// Exercise 4
// Take a customer object and produce an updated copy with spread
// that changes the city and adds a phone field, without mutating the original.

const customer = {
  name: "Tigist Alemu",
  city: "Addis Ababa",
  balance: 950,
};

const updatedCustomer = {
  ...customer,
  city: "Bahir Dar",
  phone: "0911223344",
};

console.log("Original customer:", customer);
console.log("Updated customer:", updatedCustomer);
