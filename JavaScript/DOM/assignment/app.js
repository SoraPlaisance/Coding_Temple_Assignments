const quizData = [
    {
        question: "What will this code print?",
        code: "let x = 5;\nx += 3;\nconsole.log(x);",
        options: ["5", "8", "53", "Error"],
        answer: 1 
    },
    {
        question: "What will be printed?",
        code: `let num = 0;
            if (num > 0) {
            console.log("Positive");
            } else if (num === 0) {
            console.log("Zero");
            } else {
            console.log("Negative");
            }`,
        options: ["Positive", "Negative", "Zero", "Nothing"],
        answer: 2
    },
    {
        question: "What is the output?",
        code: `let arr = [2, 4, 6];
            let total = 0;

            for (let i = 0; i < arr.length; i++) {
            total += arr[i];
            }

            console.log(total);`,
        options: ["6", "10", "12", "undefined"],
        answer: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;

const restartButton = document.getElementById("restart-button");
const nextButton = document.getElementById("next-button");
const questionContainer = document.getElementById("question-container");
const codeContainer = document.getElementById("code-container");
const optionsContainer = document.getElementById("options-container");

function loadQuestion() {
    // Disable next button
    nextButton.disabled = true;

    // Clear old options
    optionsContainer.innerHTML = "";

    // Get current question
    const currentQuestion = quizData[currentQuestionIndex];

    // Question text
    questionContainer.textContent = currentQuestion.question;

    // Set code block
    codeContainer.textContent = currentQuestion.code;

    // Create option buttons
    currentQuestion.options.forEach((option, i) => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;

        optionButton.addEventListener("click", () => {
            selectOption(i);
        });

        optionsContainer.appendChild(optionButton);
    });
}

function selectOption(yourAnswer) {
    const currentQuestion = quizData[currentQuestionIndex];
    const buttons = optionsContainer.querySelectorAll("button");

    // Disable all buttons
    buttons.forEach(button => {
        button.disabled = true;
    });

    // Check if correct
    if (yourAnswer === currentQuestion.answer) {
        buttons[yourAnswer].style.backgroundColor = "green";
        score++;
    } else {
        buttons[yourAnswer].style.backgroundColor = "red";
        buttons[currentQuestion.answer].style.backgroundColor = "rgb(255, 87, 160)";
    }

    // Enable next button
    nextButton.disabled = false;
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    document.getElementById("quiz-container").classList.add("hidden");
    document.getElementById("score-container").classList.remove("hidden");
    
    document.getElementById("score").textContent = `You scored: ${score} / ${quizData.length}`;
}

restartButton.addEventListener("click", () => {
    // Reset
    currentQuestionIndex = 0;
    score = 0;

    // Show quiz, hide score
    document.getElementById("score-container").classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");

    loadQuestion();
});

loadQuestion();