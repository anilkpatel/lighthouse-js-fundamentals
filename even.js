//MODULE 4
//DECLARING & CALLING FUNCTIONS

/*
isEven Function

isEven takes as parameter a number 
Returns a Boolean value representing whether or not the number is even.

Example 1:  

const isEven  = function (num) {
  return num % 2 === 0;
}

Explaination:
- 'num' can vary and so will the result of num % 2 === 0. 
- If num is even, the result of num % 2 is 0 
- the whole expression evaluates to 'true'
- opposite when 'num' is odd 

Missing piece is the RETURN Statement: 
- After evaluating the expression to true or false, 
- Function returns this value where it's called. 

Example 2:

const isEven  = function (num) {
  return num % 2 === 0;
}

const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);

NOTE: 
- variable 'tenIsEven' is set to the value returned by 'isEven(10)', namely 'true'
- variable 'elevenIsEven' is set to the value returned by 'isEven(11)', namely 'false'

Example 3: 

SIMPLIFY THE CODE:
- don't need to set our function return values to new variables 
- before doing something with them–we can use them directly where we need them. 

const isEven  = function (num) {
  return num % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(11));

NOTE:
1. Console.log is itself a function!
– Pre-defined by JavaScript and we can use it without having to declare it.

2. Can pass the result returned by isEven directly to console.log, 
- Which takes that value and outputs it to Terminal.

EXTRA STUFF:

Q. How do we know isEven returns whether num is even or not?
10 % 2 === 0; true; no remainder
11 % 2 === 0; false; remainder is 1, not = 0

MAIN CONCLUSIONS:
- Functions reduce duplication
- console.log and return not same
- can call return within functions, and then console.looing the return value
