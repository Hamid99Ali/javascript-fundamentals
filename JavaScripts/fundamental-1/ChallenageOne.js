const markweight = 95; const markHeight = 1.88;
const jhonweight = 85; const jhonheight = 1.76;
const markBMI = markweight / markHeight ** 2;
console.log(markBMI);
const jhonBMI = jhonweight / jhonheight ** 2;
console.log(jhonBMI)
const isFullBMI = markBMI > jhonBMI;
console.log(isFullBMI)
