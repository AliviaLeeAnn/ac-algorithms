/*

Given a number, insert dashes ('-') between each two odd numbers and return it as a string
Remember 0 is an even number. Assume the input will contain at least 1 digit.

Hint: Check out toString() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

*/

/**
Examples:

var result = dashInsert("454793");
console.log(result) // "4547-9-3"

var result = dashInsert("44");
console.log(result) // "44"

var result = dashInsert("0");
console.log(result) // "0"

var result = isBigger("13");
console.log(result) // "1-3"

**/
//Input: A number

//Create a var to store output string
//create var to store the transformation of the number first to a string and then to an array, tools:
// .tostring().split("")

4982
["4", "9", "8", "2", "7"];
//create for loop to go thru array
//Conditional statement that tests if number and number after it are odd.
//If true, add number with dash and the srtring
//If false, just add number
// function dashInsert(str) {
	
// }


function dashInsert(num){
	var stringResult = "";
	var array = num.toString().split("");
	for (var i = 0; i < array.length; i++){
		if (array[i] % 2 === 1 && array[i + 1] % 2 === 1) {
			stringResult = stringResult + array[i] + "-";
		} else {
			stringResult = stringResult + array[i];
		}
		return stringResult;
	}
}