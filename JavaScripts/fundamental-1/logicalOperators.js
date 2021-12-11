const Name = "This is Hamid Ali";
document.write(Name);

const hasDrivenLicences = true;
const hasGoodVision = false;

// This code for the line 6 to 19
// const hasDrivenLicences = true;
// const hasGoodVision = true;

// console.log(hasDrivenLicences && hasGoodVision);
// the and oparator is represent in the form of the &&;
// we get the true value because the (And)&& show the output true when all are the true and if one the fasle and the other is the true then also is false.

// console.log(hasDrivenLicences || hasGoodVision);
// This is also get the ture value becasue the the (or) || operator show the true value when the one or the both has the true vlaue and the false when the both are the false.

// console.log(!hasDrivenLicences);
// This will show the false the hasDrivenlicences has the by deflaut true value and the (not) (exclaimation marks) not Oprators converts the true to false.


if (hasDrivenLicences && hasGoodVision) {
    console.log("She or He can drive the Car ;)");
} else {
    console.log("Someone Else drive the Car... :(");
}
// This will show us the false value or else or Someone Else drive the Car... :( read line no. 13 for complete details.

if (hasDrivenLicences || hasGoodVision) {
    console.log("She or He can drive the Car ;)");
} else {
    console.log("Someone Else drive the Car... :(");
}
// This will show us the true value or if statement or She or He can drive the Car ;) read line no. 16 for complete details.

if (hasDrivenLicences && !hasGoodVision) {
    console.log("She or He can drive the Car ;)");
} else {
    console.log("Someone Else drive the Car... :(");
}
// the output is true: for more details read the line no. 13 && 19.

