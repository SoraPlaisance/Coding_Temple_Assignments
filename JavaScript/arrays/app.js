
// Level 1

// 1
let fruits = ["apple", "banana", "cherry"];

// 2
console.log(fruits[1]);

// 3
fruits[1] = "blueberry";
console.log(fruits);


// Level 2

// 4
fruits.push("orange");
console.log("After adding:", fruits);

// 5
fruits.pop();
console.log("After removing:", fruits);

// 6
fruits.unshift("grape");
console.log("After adding:", fruits);

// 7
fruits.shift();
console.log("After removing:", fruits);


// Level 3

// 8
let numbers = [3, 6, 9, 12];

// 9
let sum = numbers[0] + numbers[3];
console.log(sum);

// 10
console.log(numbers.length);

// 11
numbers.push(15, 18);
console.log(numbers);


// Level 4

// 12
numbers[1] = null;
console.log(numbers);

// 13
let colors = ["red", "blue", "green"];
colors[1] = "black";
console.log(colors);


// Level 5

// 14
let favorites = ["wings", "tacos", "ribs"];
favorites.push("burger");
console.log(favorites);

// 15
console.log("I like", favorites[0], "and", favorites[3]);