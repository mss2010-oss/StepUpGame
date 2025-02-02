const questions = [
    {
        type: "comparative",
        question: "The cat is ___ than the dog.",
        options: ["faster", "fastest", "most fast"],
        answer: "faster",
    },
    {
        type: "superlative",
        question: "Which is the ___ mountain?",
        options: ["higher", "high", "highest"],
        answer: "highest",
    }
];

let currentQuestion = 0;

function loadQuestion() {
    const question = questions[currentQuestion];
    const questionTitle = document.getElementById("question-title");
    const questionText = document.getElementById("question");
    const answersElement = document.getElementById("answers");
    const resultText = document.getElementById("result");

    // Reset UI elements
    resultText.textContent = "";
    answersElement.innerHTML = "";

    // Display question
    questionTitle.textContent = question.type === "comparative" ? "Comparative Degree" : "Superlative Degree";
    questionText.textContent = question.question;

    // Display options
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        answersElement.appendChild(button);
    });
}

function checkAnswer(answer) {
    const resultText = document.getElementById("result");
    const correctAnswer = questions[currentQuestion].answer;

    if (answer === correctAnswer) {
        resultText.textContent = "Correct! Well done!";
        resultText.className = "correct";
        moveKitten();
    } else {
        resultText.textContent = "Oops! Try again.";
        resultText.className = "wrong";
    }
}

function moveKitten() {
    const kitty = document.querySelector(".kitty");
    const path = document.querySelector(".kitty-path");
    const kittenPosition = kitty.offsetLeft;
    const newPosition = kittenPosition + (path.offsetWidth / questions.length);

    kitty.style.left = `${newPosition}px`;

    // Check if kitten reached the end
    if (parseInt(kitty.style.left) >= path.offsetWidth - 40) {
        setTimeout(showEndScreen, 1000);
    }
}

function showEndScreen() {
    document.getElementById("end").style.display = "block";
    document.getElementById("question-container").style.display = "none";
}

document.getElementById("next").addEventListener("click", () => {
    currentQuestion = (currentQuestion + 1) % questions.length;
    loadQuestion();
});

loadQuestion();
