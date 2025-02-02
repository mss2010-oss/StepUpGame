const comparativeQuestions = [
    { sentence: "She is ___ than her brother.", options: ["more better", "better", "best"], answer: "better" },
    { sentence: "This puzzle is ___ than that one.", options: ["more difficult", "difficult", "most difficult"], answer: "more difficult" },
    { sentence: "My house is ___ than yours.", options: ["more big", "bigger", "biggest"], answer: "bigger" },
    { sentence: "This movie is ___ than the last one.", options: ["more exciting", "exciting", "most exciting"], answer: "more exciting" },
    { sentence: "She is ___ than her classmates.", options: ["more friendly", "friendlier", "most friendly"], answer: "friendlier" }
];

const superlativeQuestions = [
    { word: "strong", options: ["the strongest", "the most strong"], answer: "the strongest" },
    { word: "beautiful", options: ["the most beautiful", "the beautifulest"], answer: "the most beautiful" },
    { word: "expensive", options: ["the most expensive", "the expensivest"], answer: "the most expensive" },
    { word: "soft", options: ["the softest", "the most soft"], answer: "the softest" },
    { word: "long", options: ["the longest", "the most long"], answer: "the longest" }
];

let currentQuestion = 0;
let score = 0;
let kittenPosition = 0;

function loadComparativeQuestion() {
    const questionElement = document.getElementById("comparative-question-text");
    const answersElement = document.getElementById("comparative-answers");

    answersElement.innerHTML = "";

    const q = comparativeQuestions[currentQuestion];
    questionElement.textContent = q.sentence;

    q.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkComparativeAnswer(option);
        answersElement.appendChild(button);
    });
}

function checkComparativeAnswer(answer) {
    const resultElement = document.getElementById("comparative-answers");
    if (answer === comparativeQuestions[currentQuestion].answer) {
        resultElement.textContent = "Правильно!";
        resultElement.className = "correct";
        score++;
        kittenPosition += 20; // move the kitten
    } else {
        resultElement.textContent = "Ошибка! Попробуйте снова.";
        resultElement.className = "wrong";
    }
    updateProgress();
    nextQuestion();
}

function loadSuperlativeQuestion() {
    const questionElement = document.getElementById("superlative-question-text");
    const answersElement = document.getElementById("superlative-answers");

    answersElement.innerHTML = "";

    const q = superlativeQuestions[currentQuestion];
    questionElement.textContent = `Выберите правильную форму для слова "${q.word}":`;

    q.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkSuperlativeAnswer(option);
        answersElement.appendChild(button);
    });
}

function checkSuperlativeAnswer(answer) {
    const resultElement = document.getElementById("superlative-answers");
    if (answer === superlativeQuestions[currentQuestion].answer) {
        resultElement.textContent = "Правильно!";
        resultElement.className = "correct";
        score++;
        kittenPosition += 20; // move the kitten
    } else {
        resultElement.textContent = "Ошибка! Попробуйте снова.";
        resultElement.className = "wrong";
    }
    updateProgress();
    nextQuestion();
}

function updateProgress() {
    const progressElement = document.getElementById("progress");
    progressElement.style.width = kittenPosition + "%";

    if (kittenPosition >= 100) {
        endGame();
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion >= comparativeQuestions.length) {
        currentQuestion = 0;
    }
    loadComparativeQuestion();
    loadSuperlativeQuestion();
}

function endGame() {
    document.getElementById("game-status").style.display = "none";
    document.getElementById("end-game").style.display = "block";
    document.getElementById("final-score").textContent = `Вы набрали ${score} очков!`;
    document.getElementById("kitten").src = "images/kitten-happy.png"; // happy kitten
}

document.getElementById("next").addEventListener("click", nextQuestion);

loadComparativeQuestion();
loadSuperlativeQuestion();
