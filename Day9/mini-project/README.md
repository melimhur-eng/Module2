# Addis Market Shopping List

Week-2 project, Day 19 part. A single-page shopping list built with plain
DOM and events, no framework.

## Files

- `index.html`
- `styles.css`
- `app.js`

## How to run

Open `index.html` in a browser.

## What it does

- Add an item with a name and ETB price from the form.
- Click an item to toggle it as bought (crosses it out).
- Click the x button to remove an item.
- One delegated click listener on the list handles both delete and toggle,
  so it also works for items added later.
- The total updates whenever an item is added or removed.
