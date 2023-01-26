/* Harry’s mom gave him money and asked him to buy some oranges and apples. Write a program to
help Harry calculate how much money the shopkeeper will return.

Input:
The first line of the input is the taka Harry’s mom gave him.
The second line is the cost of 1 kg of oranges and 1 kg of apples.

Output:
Print the result. 
 */

var givenMoney = 1000;
var orangePricePerKilo = 200;
var weight = 3;

var totalPrice = weight * orangePricePerKilo;
var shopkeeperReturn = givenMoney - totalPrice;
console.log(shopkeeperReturn);