//MODULE 4 INTRO TO PROGRAMMING

//LOOPING OVER ARRAYS

//Loops are used most often to iterate over a collection of data, such as arrays. 
// for..of loops since it is the primary and preferred way to accomplish this.

//Example 1: Traditional for Loop could work:
/*
const amounts = [61.00, 52.24, 112.99, 5.00];

const total = 0;
for (let i = 0; i < amounts.length; i++) {
  total += amounts[1];
}
console.log('Order total is: ', total);
*/
//Error with the '+=' Find out later why

//Newer for..of Loops are Simpler

const amounts = [61.00, 52.24, 112.99, 5.00];
const total = 0;
for(let amount of amounts) {
  total += amount;
}
console.log('Order total is: ', total);


/* Why, in your opinion, is this for..of loop the preferred way to loop over an entire array from start to end?

My Answer:
Seems to be the simplest of all the methods out there:
 
Based on https://www.codespot.org/ways-to-loop-through-an-array-in-javascript/

Only deal with 2 expressions: 
Iterator (the array to be iterated) 
variable (variable holding the value of next iteration).

Syntax: 
for (value of iterator) {
    // code block to be executed
}

Correct Answer:
Because with the for..of syntax, we don't have to start and manage an array index i and then use that index to access each item in the array (amounts[i]). We don't care about the index, we really just want to go through each item in the array.

Video from newbcoder.com with Pedro

let data = [1,2,3,4];
for(let val of data){
  console.log(val);
}

let name = 'pedro';
for(let character of name){
  console.log(character);
}

When might the for..of loop not be the appropriate choice?

my Answer:
for..of is not appropriate if you wan to return a new array. use map()

Correct Answer:

The for..of loop is only really useful for going from beginning to end of an array.If instead we need to loop through an array in a different order (e.g. backwards, or skipping every other element), then we'll need to use a traditional for loop instead.

In summary, the for..of loop is ...

    A modern (newer) feature in JavaScript
    Simpler than the regular for loop
    But also less powerful than the regular for loop
    Only really useful for going through an entire array from beginning to end
    Not a solution to all our looping problems
