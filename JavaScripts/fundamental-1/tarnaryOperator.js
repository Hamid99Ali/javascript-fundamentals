const age = 19;
const drink = age >= 18 ? "Can drink soft Drink ;)" : "Can only Drink Water 💧 :D";
console.log(drink);
let drink2;
if (age >= 18) {
    drink2 = "softdrink";
} else {
    drink2 = "water";
}
console.log(drink2);

console.log(`I like to Drink ${age >= 18 ? "softdrink 🥤" : "Water 💦"}`)