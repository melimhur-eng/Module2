# Loyalty Points Module

A small loyalty-points module for a TeleBirr shop. Day 17 mini-project.

## Files

- `loyalty.js` - the module. Exports `createLoyalty`.
- `demo.js` - runs the module and prints the results.

## How the balance stays private

`createLoyalty` keeps a `points` variable inside its own function scope. The
only way to reach it is through the `earn`, `redeem` and `balance` functions
it returns, because those functions close over `points`. Nothing outside the
function can read or set `points` directly - there is no way to do
`card.points`, it just doesn't exist on the returned object.

## How to run

```
node demo.js
```

## Notes

- `earn(etb)` adds points using an earn rule function, 1 point per 10 ETB by
  default. You can pass in a different rule (like double points on a
  holiday) without touching the module itself.
- `redeem(amount)` never lets the balance go below 0.
- Every call to `createLoyalty()` makes a brand new, independent balance.
