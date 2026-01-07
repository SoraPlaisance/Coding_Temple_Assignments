// TERNARY operators are a shortcut for conditional logic statements like "if else" statemtnes.
// There are two ternary operators, one runs code to execute if true, and one runs code to execute if false
// "?" is used for the true condition
// ":" is used for the false condition

// Example:

let age = 20;
let message = age >= 18 ? "You are an adult" : "You are a minor";

console.log(message);

// LOGICAL opperators combine multiple conditions

// AND: " && "; Both must be true
// OR: " || "; At least one must be true
// NOT: " ! "; Reverses a condition (true = false, false = true)

// Example:

// AND operator (&&)
let isAdult = true;
let hasTicket = true;

if (isAdult && hasTicket) {
    console.log("You can enter.");
}

// OR operator (||)
let isMember = false;
let hasCoupon = true;

if(isMember || hasCoupon) {
    console.log("You get a discount");
}

// NOT operator
let isRaining = false;

if (!isRaining) {
    console.log("You can go outside.");
}

// BONUS

let age1 = 20;
let hasID = true;

if (age1 >= 18 && hasID) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}