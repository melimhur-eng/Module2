// Day 20 exercises - Async JavaScript & APIs
// run with: node exercises.js  (needs internet access, node 18+ has fetch built in)

// 1. get the USD -> ETB rate
async function getEtbRate() {
  try {
    const res = await fetch("https://open.er-api.com/v6/latest/USD");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return data.rates.ETB;
  } catch (err) {
    console.error("rate failed:", err.message);
  }
}

// 2. same fetch -> json -> render pattern, written with async/await
async function loadTodo() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    console.log("todo:", data.title);
  } catch (err) {
    console.error("could not load todo:", err.message);
  }
}

// 3. a bad url (network error) and a real 404 (HTTP error)
async function testErrors() {
  try {
    await fetch("https://this-domain-does-not-exist-12345.com");
  } catch (err) {
    console.log("network error caught:", err.message);
  }

  const res = await fetch("https://jsonplaceholder.typicode.com/todos/99999999");
  console.log("status:", res.status, "ok:", res.ok);
  if (!res.ok) console.log("this is why you must check res.ok yourself");
}

// 4. fetch a list, then use Promise.all to get details for the first two in parallel
async function loadFirstTwoUsers() {
  const listRes = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await listRes.json();
  const firstTwo = users.slice(0, 2);

  const details = await Promise.all(
    firstTwo.map(u => fetch(`https://jsonplaceholder.typicode.com/users/${u.id}`).then(r => r.json()))
  );

  details.forEach(u => console.log(u.name, "-", u.email));
}

// 5. loading / success / error states
async function loadWithStates() {
  console.log("Loading...");
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    console.log("Loaded:", data.title);
  } catch (err) {
    console.log("Error:", err.message);
  }
}

async function run() {
  console.log("ETB rate:", await getEtbRate());
  await loadTodo();
  await testErrors();
  await loadFirstTwoUsers();
  await loadWithStates();
}

run();
