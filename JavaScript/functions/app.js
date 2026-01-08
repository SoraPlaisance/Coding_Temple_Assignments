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
