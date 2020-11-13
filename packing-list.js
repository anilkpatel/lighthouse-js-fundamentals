//MODULE 4: INTRODUCTION TO PROGRAMMING
//ITERATING OVER ARRAYS - Assignment

//Iterating over arrays with two common types of loops: the for and the while.

//Example:
//Store and organize gear for camping

const packingList = ["tent", "bug spray", "sleeping bag"];

//How print the items?1 by 1is laborious
console.log(packingList[0]);
console.log(packingList[1]);
console.log(packingList[2]);

//Therefore, use JavaScript's looping constructs:

//EXERCISE 1: Iterating Over an Array With for

const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Kitchen stuff to pack:");
for (let i = 0; i < packingList.length; i++) {
  console.log(packingList[i]);
}

//Declares a counter variable called i (short for "index") that starts at 0, 
//Increments by 1 at every step of a loop until it matches the length of our array, that is packingList. 

//Recall that to access an item in an array we index it.
packingList[3];

//Wanted to index every item, 
//Build a loop that increments an index variable i, 
//which can be used to look into packingList one item at a time.

//NOTE: For Loops Start From 0 and not 1
//use loops to work with the contents of an array, one at at time, and array indexing in JavaScript, 
//and most languages, starts at 0.

//Iterating Over an Array With while

