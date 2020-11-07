/*MODULE 4 - INTRO TO PROGRAMMING
CONDITIONAL EXECUTION - Assignment

if Statements
The most common way of conditionally executing statements is by writing if statements. 
if statements execute code within a block, only when its condition is true. */

/* Example 1
const raining = true;
const cold = false;

if(raining) {
  console.log("Don't forget your umbrella!");
}

if(cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside"); */

//Example 2 

const temperature = 12;

if(temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside"); 
