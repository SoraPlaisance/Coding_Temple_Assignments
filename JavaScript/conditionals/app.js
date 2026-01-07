
// IF ELSE STATEMENT

// let age = 10;

// if (age >= 18) {
//     console.log("You are an adult");
// } else {
//     console.log("You are not an adult");
// }


// ELSE IF STATEMENT

// let score = 85;

// if(score >= 90) {
//     console.log("Grade A");
// } else if (score >= 75) {
//     console.log("Grade B");
// } else {
//     console.log("Grade C or lower");
// }

// NESTED IF STATEMENT

let age = 18;
let hasID = true;

if (age >= 18) {
    if(hasID === true) {
        console.log("You can enter.");
    } else {
        console.log("You need an ID");
    }
} else {
    console.log("You are too young to enter.");
}