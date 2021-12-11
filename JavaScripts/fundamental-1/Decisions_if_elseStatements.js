const age = 15; const isOldEnought = age >= 18;
// this isoldenought will made the boolean value that we use to make the decision making.


// this is the if else statements also called the control struture in the javascript becasue the we can control the which block of the code is run and which one is not run in the excution!.
if (isOldEnought) {
    console.log(`He Can drives the licenes vehicle 🚗`)
}
else {
    const yearsLeft = 18 - age;
    console.log(`He or She is too young,wait other ${yearsLeft}/🔞 years for driving!.`)
}


// to find the century in which the person is born.

const brithyear = 2001;
let century;
if (brithyear <= 2000) {
    century = 20;
    console.log(`This person is born in the 20th century ${brithyear}`)
} else {
    century = 21;
    console.log(`This person is born in the 21th century ${brithyear}`)

}