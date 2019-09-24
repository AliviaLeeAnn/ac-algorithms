//Code Your DNA!

//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2nd array.

//Base pairs are a pair of AT and CG. Match the missing element to the provided character.

//Return the provided character as the first element in each array.

//For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

//The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

//Input: character strand/string, Output: nested array
//create 2 variables, one that stores the transformation of the input string into an array. create  a second variable that stores an empty array/our output.
//create a for loop that runs through the array
//create a conditional statement that tests if the current letter we are on is equal to one of the 4 provided letters
//if TRUE, push an array with the 2 strings into our variable storing the array.
//tools: split method, for loop, conditional statement,


function pairElement(str){
  var matchingPairs = [];
  var newArray = str.split("");
  for(var i = 0; i < newArray.length; i++){
    if (newArray[i] === "G"){
      matchingPairs.push(["G","C"]);
    }else if(newArray[i] === "C"){
      matchingPairs.push(["C", "G"]);
    }else if(newArray === "A"){
      matchingPairs.push(["A", "T"]);
    }else{
      matchingPairs.push(["T", "A"]);
    }
  }
  return matchingPairs;
 }
 console.log(pairElement("GCGTA"));
 
//TEST CASES
//pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
//pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
//pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]