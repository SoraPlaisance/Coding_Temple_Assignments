// LEVEL 1

// .1
    function greetUser() {
        console.log("Hello, student!");
    }
    greetUser();

// 2.
    function addTwoNumbers(a, b) {
        return a + b;
    }
    console.log(addTwoNumbers(1, 2)); 
    
// 3.    
    function greet(name) {
        console.log("Welcome, " + name);
    }
    greet("Eggs Benedict");
    
// LEVEL 2

// 1.
    function countToFive() {
        for (let i = 1; i <= 5; i++) {
            console.log(i);
        }
    }
    countToFive();

// 2.
    function printRange(n) {
        for (let i = 1; i <= n; i++) {
            console.log(i);
        }
    }
    printRange(3);

// LEVEL 3

// 1.
    function printArrayElements(arr) {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    }
    printArrayElements([10, 20, 30]);

// 2.
    function getPositiveNumbers(numbers) {
        let result = [];
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] > 0) {
                result.push(numbers[i]);
            }
        }
        return result;
    }
    console.log(getPositiveNumbers([-1, 2, -3, 4]));

// 3.
    function sumArray(arr) {
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            total += arr[i];
        }
        return total;
    }
    console.log(sumArray([1, 2, 3, 4]));
// LEVEL 4

// 1.
    function isEven(num) {
        return num % 2 === 0;
    }
    console.log(isEven(2));
// 2.
    function countEvens(arr) {
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                total++;
            }
        }
        return total;
    }
    console.log(countEvens([1, 2, 3, 4]));
// 3.
    function findMax(arr) {
        let max = arr[0]; // initializes max to the first element of the array
        for (let i = 1; i < arr.length; i++) { // this means our loop can start at index 1, or the second element in the array
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }
console.log(findMax([1, 2, 3, 4]));

// FINAL BOSS
    function fizzBuzz(n) {
        for (let i = 1; i <= n; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
            } else if (i % 3 === 0) {
            console.log("Fizz");
            } else if (i % 5 === 0) {
            console.log("Buzz");
            } else {
            console.log(i);
            }
        }
    }
    fizzBuzz(15);

// NOTE FOR INSTRUCTOR: The instructions and the answer given really confuse me on why I have to use a loop and check every number 1-n, so here's my answer even if it's not technically correct.
    function fizzBuzz1(n) {
        if (n % 3 === 0 && n % 5 === 0) {
        console.log("FizzBuzz");
        } else if (n % 3 === 0) {
        console.log("Fizz");
        } else if (n % 5 === 0) {
        console.log("Buzz");
        } else {
        console.log(n);
        }
    }
    fizzBuzz1(3);
    fizzBuzz1(5);
    fizzBuzz1(15);