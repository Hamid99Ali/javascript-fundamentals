
// to use the single qoutes in the out put then we use the outter quotes souble and the inner single that show on the window. or vice versa means the if we wents to show the double qoutes in the window then we use the single outside in the double inside.
const firstName = "I'm Hamid Ali";
const job = "Student in the CBIT(BSIT)";
const Age = 1999;
console.log(firstName)
// this is called the string cancatination and the we join the multiple strings to make them 
// single string with the help of the plus sign and the qoutes.
const hamid = firstName + " Current Age on 2037:" + (2037 - Age) + " Years" + " work as " + job + "!.";

// This is called the template string in the es6(for that we use the backtiks upper on the tab button.)  and the we represents the variable in the dollar sign inside the braces. variable name.
const Hamid = `${firstName} Currents Years old on 2037:${2037 - Age} years works as ${job}!.`
console.log(hamid)
console.log(Hamid)
// we use the \n\ to create the new line before the es6 and this is happenable due to a bug in the languages.
console.log('this is\n\ new line\n\ before the \n\ es6 or the backtiks.')
console.log(`this is
new line after 
the es6 with 
the backtiks.`)
console.log(`this is prefer that to use the backtiks for the multiple line.`)