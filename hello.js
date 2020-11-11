//MODULE 4
//DECLARING & CALLING FUNCTIONS

//Basically, use functions to reduce duplication in code

/*
Example 1:

const sayHello = function () {
  console.log("Hello, world");
}

sayHello();
*/
//Declared a function named sayHello that outputs a string to the console 
//– that's what the console.log function does—
//and then called, or invoked, it using parentheses notation sayHello().
/*

Example 2: 

const sayHello = function (name) {
  console.log("Hello, " + name);
}

sayHello("Caliban");  //calling function
sayHello("Miranda");
sayHello("Ferdinand");
*/

/*
Function taking a value as its input, which we've referred to as name 
and which we concatenate to the string "Hello, " before we output the whole result. 
The input to the function is called a parameter, in our case we've called it name. 
Think of a function's parameters as variables that are accessible and can be used 
only within the function, and whose values vary and are set when we call the function.
*/

/*
TWO VARIETIES of FUNCTIONS:

1. One that produces a side effect, as in it DOES something.
2. One that produces a result, as in it CALCULATES & RETURNS a value used in further code.
*/

/*
RETURN & CONSOLE.LOG

Using return in a function is different from using console.log. 

1. console.log:

const sayHelloToConsole  = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('John'); 

2. return:

const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');

The first function immediately outputs 'Hello, John' to the console. 
The second returns the string 'Hello, John' to a variable and nothing will get output to the console.

A console.log statement will result in some content being displayed in the console. 
A return statement will not output anything to the console. However, when a function returns a value, we can still console.log it later:

Example 3: 

const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');
console.log(greeting);

Therefore: When using functions that return a value,
means that we will have to console.log our values outside of the function.

*/

