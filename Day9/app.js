// =====================================
// Exercise 1
// Select an h1 and change its text
// =====================================

const title = document.querySelector("#title");

title.textContent = "Welcome to My DOM Exercises";

title.classList.toggle("active");


// =====================================
// Exercise 2
// Create a list of Ethiopian cities
// =====================================

const cities = ["Addis Ababa", "Jimma", "Hawassa"];

const cityList = document.querySelector("#cities");

cities.forEach(function(city) {

    const li = document.createElement("li");

    li.textContent = city;

    cityList.append(li);

});


// =====================================
// Exercise 3
// Click event and bubbling
// =====================================

const button = document.querySelector("#clickButton");

const box = document.querySelector("#box");


button.addEventListener("click", function(event) {

    console.log("Button clicked");

    console.log(event.target);

});


box.addEventListener("click", function() {

    console.log("Box clicked");

});


// =====================================
// Exercise 4
// Delete items using event delegation
// =====================================

const shoppingList = document.querySelector("#shoppingList");


shoppingList.addEventListener("click", function(event) {

    if (event.target.matches(".delete")) {

        event.target.closest("li").remove();

    }

});


// =====================================
// Exercise 5
// Form
// =====================================

const form = document.querySelector("#itemForm");

const input = document.querySelector("#itemInput");

const itemList = document.querySelector("#itemList");


form.addEventListener("submit", function(event) {

    event.preventDefault();

    const item = input.value.trim();

    if (item) {

        const li = document.createElement("li");

        li.textContent = item;

        itemList.append(li);

        input.value = "";

    }

});