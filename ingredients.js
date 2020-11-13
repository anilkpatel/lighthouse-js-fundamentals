//MODULE 4: INTRODUCTION TO PROGRAMMING
//ITERATING OVER ARRAYS - BANANA BREAD

//Print and modify out ingredients

//INSTRUCTIONS: 
// Write a loop under each comment in the file.

//Under the first, write a while loop that prints out each item of ingredients.
//Under the second, write a for loop that does the same thing.
//And under the third, write any loop, while or for that prints out each item of ingredients but backwards (that is, the first should be "bananas" and the last "eggs").

const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

console.log("ingredients:");
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:

console.log("ingredients:");
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

console.log("ingredients:");
for (let i = 7; i < ingredients.length; i--) {
  console.log(ingredients[i]);
}
