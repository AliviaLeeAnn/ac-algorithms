//Write a JavaScript program to calculate the area and perimeter of a circle. The radius of the circle will be supplied by the user

//Bonus 1: Write the answer like this "The area of the circle is ___ and the perimeter of the circle is __"
//Bonus 2: Make both numbers whole integers (aka round to the nearest integer) 
// Given the radius from the User, we want to find the area and perimeter of a circle
//Input: radius, a number
//Create a variable to store calculated area
// Create a variable to store calculated perimeter
//Calculate area with PI * radius ^ 2
//Calculate perimeter with 2 * PI * radius
//Create a return statement that is the string with the variables "The area of the circle is ___ and the perimeter of the circle is ____"
//Outputs: area and perimeter, two numbers.

function circleCalculation(radius) {
	var area = Math.PI * Math.pow(radius, 2);
	var perimeter = 2 * Math.PI * radius;
	return "The area of the circle is " + Math.round(area) + " and the perimeter of the circle is" + Math.round(perimeter) + ".";
}
circleCalculation(10);
circleCalculation(150);