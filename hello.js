//MODULE 4
//DECLARING & CALLING FUNCTIONS
/*
const sayHello = function () {
  console.log("Hello, world");
}

sayHello();
*/
//Declared a function named sayHello that outputs a string to the console 
//– that's what the console.log function does—
//and then called, or invoked, it using parentheses notation sayHello().

const sayHello = function (name) {
  console.log("Hello, " + name);
}

sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");
