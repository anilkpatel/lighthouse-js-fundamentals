/*MODULE 4 - INTRO TO PROGRAMMING
CONDITIONAL EXECUTION - Assignment

**if Statements**
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
/*
const temperature = 12;

if(temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside"); 
*/

/*
**Logical operators**

if statements become even more powerful when we understand how to use logical operators in conjunction with them. 
Use them to write powerful expressions
JavaScript's logical operators are:

    && - logical AND
    || - logical OR
    ! - logical NOT.

//Example 3 using AND (&&)
const isCitizen = true;
const age = 26;

if(isCitizen && age > 18){
  console.log("You are eligible to vote.");
}

// Example 4 using OR (||) 
const temperature = 42 

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea...");
}

//Example 5 using NOT (!) */
var raining =  false

if (!raining) {
  console.log("Leave your umbrella at home!");
}
// prints "Leave umbrella at home" becasue reversed value of raining = false

//We read the expression in the above example usually as "if not raining", 
//but it's not always intuitive what "not true" or "not false" mean unless you 
//remember that the ! operator reverses the value of raining. 
//That is, if raining is true, !raining is false. If raining is false, !raining is true.

//CONCLUSION//
/*In this exercise we learned about the if statement and how to use it to check if a condition is true. 
We also learned about using logical operators to write more complex expressions. 
We can use these tools to execute code when a certain criteria is met. 
