// exercise 1 - remember a theme choice with localStorage
const btn = document.querySelector("#theme-btn");

const saved = localStorage.getItem("theme");
if (saved === "dark") document.body.classList.add("dark");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const theme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});
