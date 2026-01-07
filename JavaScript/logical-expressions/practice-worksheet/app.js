// 1

let x = 0;

if (x > 0) {
    console.log("positive");
} else if (x < 0) {
    console.log("negative");
} else {
    console.log("zero");
}

// 2

let age = 20;

if (age >= 18) {
    console.log("eligible to vote");
} else {
    console.log("too young to vote");
}

// 3

let score = 95;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 75) {
    console.log("Grade: B");
} else if (score >= 50) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// 4

let age1 = 20;
let hasID = true;

if (age1 >= 18 && hasID) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

// 5

let number = 16;

if (Number.isInteger(number)) {
  if (Number.isInteger(Math.sqrt(number))) {
    console.log("Perfect square");
  } else {
    console.log("Not a perfect square");
  }
} else {
    console.log("Not an interger");
}

// 6

let isOnline = true;

let message = isOnline ? "User is online" : "User is offline";
console.log(message);

// 7

let day = "Monday";

if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
    console.log("Weekday");
} else if (day === "Saturday" || day === "Sunday") {
    console.log("Weekend");
} else {
    console.log("Invalid");
}

// 8

let isAdult = true;
let hasTicket = true;

if (isAdult && hasTicket) {
    console.log("Access granted.");
} else if (!isAdult && hasTicket) {
    console.log("Need guardian.");
} else if (!hasTicket) {
    console.log("Access denied.");
}

// 9

let num = 20;

if (num % 2 === 0 && num % 5 === 0) {
    console.log("Valid number");
}

// 10

let isRaining = true;

if (isRaining) {
    console.log("Take an umbrella");
} else {
    console.log("You're good to go");
}