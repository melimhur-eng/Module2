const form = document.querySelector("#add-form");
const nameInput = document.querySelector("#name");
const priceInput = document.querySelector("#price");
const list = document.querySelector("#list");
const totalEl = document.querySelector("#total");

function addItem(name, price) {
  const li = document.createElement("li");
  li.textContent = `${name} - ${price} ETB`;
  li.dataset.price = price;

  const delBtn = document.createElement("button");
  delBtn.textContent = "x";
  delBtn.classList.add("del");
  li.append(delBtn);

  list.append(li);
}

function updateTotal() {
  const items = [...list.querySelectorAll("li")];
  const total = items.reduce((sum, li) => sum + Number(li.dataset.price), 0);
  totalEl.textContent = total;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const price = Number(priceInput.value);

  if (!name || !price) return;

  addItem(name, price);
  form.reset();
  updateTotal();
});

list.addEventListener("click", (e) => {
  if (e.target.matches(".del")) {
    e.target.closest("li").remove();
    updateTotal();
  } else if (e.target.matches("li")) {
    e.target.classList.toggle("bought");
  }
});
