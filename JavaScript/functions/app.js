function calculateArea(width, height) {
    return width * height;
}

let area1 = calculateArea(5, 10);
let area2 = calculateArea(3, 7);

console.log("Area 1:", area1); // 50
console.log("Area 2:", area2); // 21

// BONUS

// 1.
    function double(num) {
        return num * 2;
    }

    let result = double(5);
    console.log(result);

// 2.
    function fullName(firstName, lastName) {
        return firstName + " " + lastName;
    }

    let fullName1 = fullName("Jerry", "Smith");
    let fullName2 = fullName("Forrest", "Gump");

    console.log(fullName1);
    console.log(fullName2);

// 3.
    function isEven(num) {
        return num % 2 === 0;
    }

    console.log(isEven(4));
    console.log(isEven(7));

// FUNCTIONS USE CASES AND PATTERNS IN JAVASCRIPT

// Task: Say hi to every person in a list of names.
// Our Thought Process:
// 1. We’re working with multiple names, so a single variable like let name = "Ali" won’t help.
// 2. That means we need a list → Use an array: ["Ali", "Sara", "John"]
// 3. We want to do something for each person in that list → Loop.
// 4. What should we do in the loop? → Print a custom message like "Hi, Ali", "Hi, Sara".
// 5. We'll wrap this logic in a function, so we can reuse it for different name lists.

function greetEveryone(names) {
    for (let i = 0; i < names.length; i++) {
        console.log("Hi, " + names[i]);
    }
}

greetEveryone(["Ali", "Sara", "John"]);

// Task: Keep only the positive numbers from a list.
// Our Thought Process:
// 1. We're dealing with a group of numbers → Use an array.
// 2. We want to go through the array one item at a time → Loop.
// 3. For each number, we want to check a rule → Use an if statement.
// 4. If it passes the rule (i.e. it’s greater than 0), we want to save it.
// 5. We’ll collect the passing numbers in a new array → result.push(...)
// 6. Finally, we return that new array from the function.

function filterPositives(numbers) {
    let result = []; // stores positive numbers; starts empty because we haven't checked anything yet
    for (let i = 0; i < numbers.length; i++) { // i < numbers.length means the loop runs once for each element in the array
        if (numbers[i] > 0) { // numbers [i] accesses the value at index i
            result.push(numbers[i]); // .push() adds a value to the end of an array
        }
    }
    return result; // returns final array of positive numbers back to where the function was called
}
console.log(filterPositives([-1, 2, -3, 4]));

// Task: Return the total of all numbers in an array.
// Our Thought Process:
// 1. Again, we’re dealing with multiple values → Use an array.
// 2. We need to visit each value → Use a loop.
// 3. For each value, we want to keep a running total → We need an accumulator variable, like total = 0.
// 4. Inside the loop, we add each number to total.
// 5. At the end, return the total from the function.

function sumNumbers(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i]; // takes the current value of "total" and adds numbers[i] to it, then stores the result back in "total"
    }
    return total;
}

console.log(sumNumbers([10, 20, 30]));

// Task: Return true if a number is even, false otherwise.
// Our Thought Process:
// We only care about one number, not an array → Use a parameter.
// How do we check if a number is even?
// Even numbers divide perfectly by 2 → So if num % 2 === 0, it's even.
// % is called the modulo operator. It gives the remainder of division.
// If a number divided by 2 has a remainder of 0, it’s even.

function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(6));
console.log(isEven(7));
// why were these the numbers chosen for this ;-;