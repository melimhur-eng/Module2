# TeleBirr Transaction Report

A small report generator over a list of TeleBirr transactions. Day 18
mini-project.

## Modules

- `transactions.js` - exports the transaction data.
- `report.js` - exports the summary functions (`totalByType`, `toReceipts`,
  `correctAmount`).
- `app.js` - imports both and prints the report.

## How to run

```
node app.js
```

## What each function does

- `totalByType(txns, type)` filters by "credit" or "debit" and reduces to a
  total.
- `toReceipts(txns)` maps over the transactions, destructuring `customer`
  and `amount` out of each one, and returns formatted strings.
- `correctAmount(txn, newAmount)` uses spread to return a new transaction
  object with the amount changed, without touching the original.
