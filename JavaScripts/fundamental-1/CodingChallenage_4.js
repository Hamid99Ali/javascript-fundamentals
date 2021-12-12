const bill = 275;
const tip1 = (bill / 100) * 15;
const tip2 = (bill / 100) * 20;
const tip = bill >= 15 && bill <= 300 ? console.log(`The Tip is 15 percent plus total bill = ${tip1, tip1 + bill}$`) : console.log(`The Tip is 20 persent plus total bill = ${tip2, tip2 + bill}$`);
console.log(bill);