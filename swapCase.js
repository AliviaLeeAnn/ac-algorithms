/*

Given a string, swap the case of each character and retunr it.
Assume the string has only letters.

Hint 1: Check out indexOf() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

Hint 2: Check toLowerCase and toUpperCase methods at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

Bonus: If the string has non-letter characters, leave them as they are.

*/

/**
Examples:

var result = swapCase("Hello World")
console.log(result) // "hELLO wORLD"

var result = swapCase("");
console.log(result) // ""

Bonus:
var result = swapCase("Oh, Hello!!");
console.log(result) // "oH, hELLO!!"

**/

//Input: string, Output: string
//Create a for loop to loop through each letter. turn string into array --> split(""),
//Each time the loop runs, add one to i, run a conditional statement
//Use conditional to test if letter is lower or upper case
//if true, add that letter to our output, oncce transformed to uppercase
//if false, add letter to our output after transformed to lowercase
//return output to get value of the full string


function swapCase(str){
	var newString = "";
	var array = str.split("");
	for (var i = 0; i < array.length; i++){
		if (array[i] === array[i].toLowerCase()){
			newString = newString + array[i].toUpperCase();
		} else {
			newString = newString + array[i].toLowerCase();
		}
	}
	return newString;
}
var output = swapCase("Oh Hello!!");
console.log(output);