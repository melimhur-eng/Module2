const form = document.querySelector("#search-form");
const input = document.querySelector("#country");
const out = document.querySelector("#facts");

let countriesCache = null;

async function getAllCountries() {
  if (countriesCache) return countriesCache;
  const res = await fetch("https://api.sampleapis.com/countries/countries");
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  countriesCache = await res.json();
  return countriesCache;
}

function renderFact(label, value) {
  const p = document.createElement("p");
  p.classList.add("fact");
  p.innerHTML = `<strong>${label}:</strong> `;
  p.append(value);
  out.append(p);
}

async function showCountry(name) {
  out.textContent = "Loading...";
  try {
    const countries = await getAllCountries();
    const country = countries.find(
      c => c.name.toLowerCase() === name.trim().toLowerCase()
    );

    if (!country) throw new Error("Country not found");

    out.innerHTML = "";

    const flag = document.createElement("img");
    flag.src = country.media.flag;
    flag.alt = `Flag of ${country.name}`;
    out.append(flag);

    renderFact("Capital", country.capital);
    renderFact("Population", country.population.toLocaleString());
    renderFact("Currency", country.currency);
  } catch (err) {
    out.textContent = "";
    const p = document.createElement("p");
    p.classList.add("error");
    p.textContent = err.message;
    out.append(p);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  showCountry(input.value);
});

showCountry("Ethiopia");
