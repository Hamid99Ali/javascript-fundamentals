num = "18"
// if (num == 18) console.log(num)
// out put is the true or 18 in string data type. plz read the line 12.

nums = "40" - 18 - 18;
console.log(nums)
// the out is the 4 in number data type becasue the mintus operator convert the string into the number data type.(2) same as the "*","/",">" opraters do. in the backend of the javascripts.(3) but the plus operator convert the number data type into the string data type.

if (num === 18) { console.log(true) } else { console.log(false) }
// output is the false becasue the in triple equal equality operater the javascript use the stricts mode means the string "18" is not converted in to number 18 or the they have the different data tyoes and they show the false in the output. This is called the strict mode of javascript and this also prevent the alot of error.

if (num == 18) { console.log(true) } else { console.log(false) }
// the output is true the becasue the in the double equal equality oprater the num has the value of string "18" and this is converted into the number 18 by default this is done in atomatically in the backend of the javascripts.(This is called the loose mode)



// There just 6 values in the javascript booleans that are the false they are (0),(null),(NaN),(undefind),(false),(""):"" this means the empty string.
const bool = Boolean(0);
console.log(bool);

// boolean in the if else statements.
money = 0;
if (money) {
    console.log("Do not spent it all ;)");
}
else {
    console.log("Get a job ;(");
};
// Output 
// we get the else statement becasue the 0 in the is the false value. and also the money is also false and the second line just executed. 