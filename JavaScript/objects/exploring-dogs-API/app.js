// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {

    // Select buttons and containers
    const singleDogButton = document.getElementById('single-dog-button');
    const multipleDogButton = document.getElementById('multiple-dog-button');
    const singleDogContainer = document.getElementById('single-dog-container');
    const multipleDogContainer = document.getElementById('multiple-dog-container');

    // Function to fetch and display a single random dog image
    // If you declare a function as asynchronous, you're essentially saying that this function has code which will require time to complete that JavaScript may have to wait for
    async function getSingleDogImage() {
       
        // Fetch data from the dog API
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();

        // Clear previous image
        singleDogContainer.innerHTML = '';

        // Create an image element and set its source
        const img = document.createElement('img');
        img.src = data.message;

        // Append to the image container
        singleDogContainer.appendChild(img);
    };

    // Function to fetch and display multiple random dog images
    async function getMultipleDogImages() {

        // Fetch data from the Dog API (fetching 3 random images)
        const response = await fetch('https://dog.ceo/api/breeds/image/random/5');
        const data = await response.json();

        // Clear previous images
        multipleDogContainer.innerHTML = '';

        // Iterate over the array of image URLs
        data.message.forEach((imageUrl) => {
        // A new <img> element is created and its src is set to the image URL.
        // The image is appended to the container dynamically.

            // Create an image element for each URL
            const img = document.createElement('img');
            img.src = imageUrl;

            // Append each image to the container
            multipleDogContainer.appendChild(img);
        });
    }

    // Add event listeners to buttons
    singleDogButton.addEventListener('click', getSingleDogImage);
    multipleDogButton.addEventListener('click', getMultipleDogImages);
});