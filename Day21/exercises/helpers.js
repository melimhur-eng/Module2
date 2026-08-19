// exercise 2 - save() / load() helpers for localStorage
// exercise 5 (partial) - regex patterns
// open this in a browser console, localStorage only exists there

function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function load(key, fallback = []) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (err) {
    return fallback;
  }
}

save("cities", ["Addis Ababa", "Gondar", "Bahir Dar"]);
console.log(load("cities"));
console.log(load("missing-key"));

const PHONE = /^(?:\+251|0)9\d{8}$/;
console.log(PHONE.test("0912345678"));
console.log(PHONE.test("+251912345678"));
console.log(PHONE.test("12345"));
