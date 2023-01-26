var string = "31";

// use parseInt to convert string to a integer number
var num = parseInt(string);
// console.log(num);

var string2 = "3.1416";

// use parseFloat to convert string to a floating point number
var num2 = parseFloat(string2);
// console.log(num2);

var num3 = 0.1;
var num4 = 0.2;
var total = num3 + num4;

// to.Fixed() is used to get required number after point 
console.log(total.toFixed(2));