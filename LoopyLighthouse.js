// MODUE 4: INTRO TO PROGRAMMING
//Assignment: LOOPY LIGHTHOUSE

/* We will be writing a program that prints the numbers from 100 to 200 to the console, with three exceptions:

    If the number is a multiple of 3, print the string "Loopy" instead of the number.
    If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
    If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.

By print, we are referring to console.log.

*/

//Use the % (modulo) operator to determine if a number is even or odd. 
//The modulo operater takes two numbers and returns the remainder when the first number is divided by the second one:

/*
var number = 100

for (number = 100; number <= 200; number++) {
  if (number % 3 === 0 && number % 4 === 0) {
  console.log("LoopyLighthouse");
  } else if (number % 4 === 0) {
    console.log("Lighthouse"); 
  } else if (number % 3 === 0) {
    console.log("loopy");
  } else {
    console.log(number);
  }
}
*/

let number = 100

for (number = 100; number <= 200; number++){
  if (number % 3 === 0 && number % 4 === 0){
    console.log("LoopyLighthouse");
  } else if (number % 4 === 0) {
    console.log("Lighthouse"); 
  } else if (number % 3 === 0) {
    console.log("Loopy");
    
  } else {
    console.log(number);
  }
}





/* Not unlike the example from loops_Udacity for a while loop
ACTUAL SOLUTION (cleaner) 
var x = 1;
// while loop with a stop condition
while (x <= 20) {
    if (x % 3 === 0 && x % 5 === 0) {
        console.log("JuliaJames");
    }else if (x % 5 === 0) {
        console.log("James");
    }else if (x % 3 === 0) {
        console.log("Julia");
    }
    else {
        console.log(x);
    }
    // increment x at the end of each loop
    x = x + 1 ; 
}
*/