const comparativeQuestions = [
    { sentence: "Tom is ___ than Jerry.", options: ["more fast", "faster", "most fast"], answer: "faster" },
    { sentence: "This book is ___ than that one.", options: ["more interesting", "most interesting", "interestinger"], answer: "more interesting" },
    { sentence: "She is ___ than her brother.", options: ["more clever", "cleverer", "most clever"], answer: "cleverer" }
];

const superlativeQuestions = [
    { word: "strong", options: ["the strongest", "the most strong"], answer: "the strongest" },
    { word: "beautiful", options: ["the beautifulest", "the most beautiful"], answer: "the most beautiful" },
    { word: "expensive", options: ["the most expensive", "the expensivest"], answer: "the most expensive" },
    { word: "soft", options: ["the softest", "the most soft"], answer: "the softest" },
    { word: "long", options: ["the longest", "the most long"], answer: "the longest" }
];

let currentQuestion = 0;

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
    } else {
        resultElement.textContent = "Ошибка! Попробуйте снова.";
        resultElement.className = "wrong";
    }
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
    } else {
        resultElement.textContent = "Ошибка! Попробуйте снова.";
        resultElement.className = "wrong";
    }
}

document.getElementById("next").addEventListener("click", () => {
    currentQuestion = (currentQuestion + 1) % comparativeQuestions.length;
    loadComparativeQuestion();
    loadSuperlativeQuestion();
});

loadComparativeQuestion();
loadSuperlativeQuestion();
