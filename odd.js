//MODULE 4: ODD CHECKER Assignment

//Directions: Create a function to determine if a number is odd or not.
//This function should take a number as a parameter and return true if it is odd and false otherwise. 
//Paste the following code after your function definition to check working correctly:
/*
console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));
*/

//Logic: Divide by 3 and if remiander then the number is 'odd' 

const isOdd = function (num) {
  return num % 3 === 0;
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));