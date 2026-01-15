// When writing JavaScript, following proper naming conventions ensures that your code is clean, readable, and easy to maintain.

// 1. camelCase for Variables and Functions
// camelCase starts with a lowercase letter, and every new word begins with a capital letter.
// This style is the standard for most JavaScript variables and function names.

let userName = 'John';  // Variable in camelCase
function getUserInfo() {    // Function in camelCase
  // Function code here
}

// 2. UpperCamelCase (PascalCase) for Classes and Constructors
// PascalCase is similar to camelCase, but the first letter is also capitalized.
// It is used for naming classes or constructor functions in JavaScript.

class UserAccount {
  constructor(name) {
    this.name = name;
  }
}

// 3. UPPERCASE_SNAKE_CASE for Constants
// UPPERCASE_SNAKE_CASE separates words with underscores and uses all uppercase letters.
// This naming style is used for constants—variables that should not be reassigned.

const MAX_USERS = 100;  // Constant variable
const API_URL = '<https://api.example.com>';

// 4. Descriptive and Meaningful Names
// Variable names should describe the purpose or content of the variable. Avoid using generic names like x, y, or data unless they are for quick, temporary values.

let totalPrice = 50.75;   // Clear and descriptive
let itemCount = 3;        // Describes the purpose of the variable

// 5. Avoiding Reserved Keywords
// JavaScript has a list of reserved keywords (like let, class, return, function) that cannot be used as variable names.

// ❌ Incorrect
// let return = 5;  // Error: 'return' is a reserved keyword

// ✅ Correct
let returnValue = 5;  // Uses a descriptive name instead

// 7. Prefixes for Booleans
// For variables that hold a boolean value, it’s a good idea to start the name with is, has, or can to indicate the variable stores a true/false value.

let isLoggedIn = true;
let hasItemsInCart = false;

// 8. Avoiding Numbers and Special Characters in Names
// Variable names should not start with numbers or contain special characters (except $ and _).

// ❌ Incorrect
// let 2ndUser = 'John';  // Error: Variable name cannot start with a number

// ✅ Correct
let secondUser = 'John';
let $price = 99.99;    // Using $ is valid, especially in libraries like jQuery

// Summary of Best Practices
//1. Use camelCase for most variables and function names.
// 2. Use PascalCase for classes and constructors.
// 3. Use UPPERCASE_SNAKE_CASE for constants.
// 4. Choose meaningful names that describe the data or purpose.
// 5. Avoid reserved keywords as variable names.
// 6. Be consistent with naming conventions.
// 7. Use prefixes like is or has for boolean variables.
// 8. Avoid starting with numbers or using special characters.