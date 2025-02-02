const questions = [
    { word: "fast", options: ["faster", "fastest", "more fast"], answer: "fastest" },
    { word: "beautiful", options: ["beautifuller", "more beautiful", "most beautiful"], answer: "most beautiful" },
    { word: "smart", options: ["smarter", "smartest", "more smart"], answer: "smartest" },
    { word: "strong", options: ["stronger", "strongest", "more strong"], answer: "strongest" }
];

let currentQuestion = 0;
let kittyPosition = 0;  // The position of the kitty on the path (percentage)

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");
    const resultElement = document.getElementById("result");
    const kittyElement = document.getElementById("kitty");

    resultElement.textContent = "";
    answersElement.innerHTML = "";

    const q = questions[currentQuestion];
    questionElement.textContent = `Choose the correct degree for the word "${q.word}":`;

    q.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        answersElement.appendChild(button);
    });

    // Update the kitty's position
    kittyElement.style.left = `${kittyPosition}%`;
}

function checkAnswer(answer) {
    const resultElement = document.getElementById("result");

    if (answer === questions[currentQuestion].answer) {
        resultElement.textContent = "Correct! Kitty moves forward!";
        resultElement.className = "result-text correct";

        // Move the kitty forward (increase position)
        kittyPosition += 20;  // Move the kitty 20% further
        if (kittyPosition > 100) kittyPosition = 100;  // Max position 100%

    } else {
        resultElement.textContent = "Oops! Try again.";
        resultElement.className = "result-text wrong";
    }
}

document.getElementById("next").addEventListener("click", () => {
    currentQuestion = (currentQuestion + 1) % questions.length;

    // If the kitty reaches the end, display a success message
    if (kittyPosition === 100) {
        const resultElement = document.getElementById("result");
        resultElement.textContent = "Kitty found her mommy! Congratulations!";
        resultElement.className = "result-text correct";
    } else {
        loadQuestion();
    }
});

loadQuestion();
