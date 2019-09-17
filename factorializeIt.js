//Challenge time! 
//Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n. Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Check out Arithmetic Operators https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// Check out Arithmetic Operators https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//input - a number
//output - a number, the factorial of that number which means a product of all of the numbers between 1 and that number.
//use a variable to store the output (the product)
//multiplication operator (*)
//is there js method that calculates a factorial?
//loop: we need to start at 1 and end at the number that is the parameter, and instead of adding each time in the loop we can multiply


function factorializeIt(num) {
  var factorialize = 1;
  for(var i = 1; i < num; i++){
  factorialize *= i;
}
 return factorialize;
}
var productOutput = factorializeIt(5);
console.log(productOutput);

//2nd way to solve

function factorializeIt(num) {
  var output = 1;
  for (var i = 1; i <= num; i++);{
    output = output * i;
  }
}
factorializeIt(5);
console.log(output);