# Country Facts Page

Day 20 mini-project. Enter a country name and see its capital, population,
currency and flag, fetched with the Fetch API. Defaults to Ethiopia on load.

## Files

- `index.html`
- `styles.css`
- `app.js`

## How to run

Open `index.html` in a browser. It needs an internet connection.

## API note

The reading sheet points at restcountries.com, but that API now requires a
signed-up API key for new requests, which doesn't fit a no-account, beginner
project. This uses `api.sampleapis.com/countries/countries` instead, which
is free and needs no key. It returns every country in one request, so the
app fetches the list once and caches it, then searches it in memory for
whichever country you type.

## What it does

- Shows "Loading..." while the request is in flight.
- Shows a "Country not found" message if you search something that isn't in
  the list.
- Renders the flag, capital, population (formatted with commas) and
  currency on success.
