// MODULE 4: INTRO TO PROGRMAMMING
// LOOPING &REPITITION

// Write a WHILE LOOP
/*
//Exercise 1: Pop while loop
const chorus = "Let's dance!";
let repeat = 0; 
while (repeat < 10) {
  console.log(chorus);
  repeat++
}
console.log("Until the sun comes up");
*/
//The while statement, similar to an if, takes a condition, and as long as this condition evaluates to true, the code inside the block will be executed again and again. To make sure we don't execute this code forever, we've declared a repeat variable that starts at 0 and increments by 1 (repeat++ is shorthand for repeat = repeat + 1) at every repetition of the block.When the value of repeat reaches 10, our while condition is no longer true and so JavaScript stops executing the contents of the block following the while statement and moves on.

// Example 2: Insert a 'if' key
// 6th iteration ofloop, add a key, when value of key == 5 (we start at 0).
/*
const chorus = "Let's dance!";
let repeat = 0; 
while (repeat < 10) {
  if (repeat === 5) {
    console.log("*change key*");
  }
  console.log(chorus);
  repeat++
}
console.log("Until the sun comes up");
*/

