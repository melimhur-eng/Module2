const { createLoyalty } = require("./loyalty");

const card = createLoyalty();
card.earn(250);
card.redeem(10);
console.log("card balance:", card.balance());

card.redeem(1000);
console.log("card balance after over-redeem:", card.balance());

// holiday rule: double points, passed in as a higher-order function
const holidayRule = etb => Math.floor(etb / 10) * 2;
const holidayCard = createLoyalty(holidayRule);
holidayCard.earn(250);
console.log("holiday card balance:", holidayCard.balance());

// each card keeps its own balance
const secondCard = createLoyalty();
secondCard.earn(500);
console.log("second card balance:", secondCard.balance());
console.log("first card balance is still:", card.balance());
