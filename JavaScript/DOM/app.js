// Select the buttons and container using query selectors
const createBoxButton = document.getElementById("createBox");
const removeBoxesButton = document.getElementById("removeBoxes");
const boxContainer = document.getElementById("boxContainer");

// Function to generate a random color
function getRandomColor() {
    const colors = ["#e74c3c", "#2ecc71", "#f1c40f", "#8e44ad", "#3498db"];
    return colors[Math.floor(Math.random() * colors.length)]; // this part of the code confused me, so here's the explanation below:
}
// Math.random()
    // Returns a random decimal number

    // Range: 0 (inclusive) to 1 (exclusive)

    // Example outputs: 0.13, 0.57, 0.999

// colors.length
    // Math.random() * colors.length
    
    // colors.length is 5

    // This scales the random number to:
    // 0 ≤ number < 5

    // Example results:
    // 0.2 * 5 = 1.0
    // 0.83 * 5 = 4.15

// Math.floor(...)
    // Math.floor(Math.random() * colors.length)

    // Math.floor rounds down to the nearest whole number

    // Possible results:
    // 0, 1, 2, 3, 4

// Example walkthrough;

// If:

// Math.random() → 0.64
// colors.length → 5


// Then:

// 0.64 * 5 = 3.2
// Math.floor(3.2) = 3
// colors[3] = "#8e44ad"


// So the function returns:

// "#8e44ad"

// BACK TO THE CODE
// Function to create box
function createBox() {
    const box = document.createElement("div"); //creates a new div
    box.classList.add("box"); // Adds the "box" class we implemented earlier into our CSS

    box.style.backgroundColor = getRandomColor(); // Applies our random color function
    box.innerText = document.querySelectorAll(".box").length + 1; // Display box number, +1 because array indexes start at 0 and not 1
    // querySelectorAll selects all elements using a certain class or id. In this case, it's ".box"

    boxContainer.appendChild(box); // Append the new box inside the container
}

// Function to remove all boxes
function removeAllBoxes() {
    boxContainer.innerHTML = ""; //Clears the inner container's content
}

// Event Listeners for button clicks
createBoxButton.addEventListener("click", createBox);
removeBoxesButton.addEventListener("click", removeAllBoxes);