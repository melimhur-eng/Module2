import { transactions } from "./transactions.js";
import { totalByType, toReceipts, correctAmount } from "./report.js";

console.log("Receipts:");
toReceipts(transactions).forEach(line => console.log(line));

console.log("");
console.log(`Total credits: ${totalByType(transactions, "credit")} ETB`);
console.log(`Total debits: ${totalByType(transactions, "debit")} ETB`);

console.log("");
const fixed = correctAmount(transactions[0], 300);
console.log("original transaction:", transactions[0]);
console.log("corrected copy:", fixed);
