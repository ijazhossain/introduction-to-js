/* Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.
Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.
Output:
Print the result in 2 decimal places.
Practice Problem 2
Sample Input:
75.25, 65, 80, 35.45, 99.50
Output:
71.04 */

var mathNumber = 75.25; var biologyNumber = 65; var chemistryNumber = 80; var physicsNumber = 35.45; var banglaNumber = 99.50;

var totalNumber = mathNumber + biologyNumber + chemistryNumber + physicsNumber + banglaNumber;
var averageNumber = totalNumber / 5;
console.log(averageNumber.toFixed(2));