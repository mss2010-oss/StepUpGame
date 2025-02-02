// Для сравнительной степени
let comparativeQuestionIndex = 0;
const comparativeQuestions = [
    {
        sentence: "She is ____ than me.",
        options: ["taller", "more tall", "most tall"],
        answer: "taller"
    },
    {
        sentence: "This book is ____ than that one.",
        options: ["more interesting", "interestinger", "most interesting"],
        answer: "more interesting"
    },
    // Добавьте другие вопросы
];

function loadComparativeQuestion() {
    const q = comparativeQuestions[comparativeQuestionIndex];
    document.getElementById("comparative-question-text").textContent = q.sentence;
    const answersElement = document.getElementById("comparative-answers");
    answersElement.innerHTML = "";
    q.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkComparativeAnswer(option);
        answersElement.appendChild(button);
    });
}

function checkComparativeAnswer(answer) {
    const resultElement = document.getElementById("comparative-answers");
    if (answer === comparativeQuestions[comparativeQuestionIndex].answer) {
        resultElement.textContent = "Правильно!";
        resultElement.className = "correct";
        // Можно добавить логику для увеличения очков или прогресса
    } else {
        resultElement.textContent = "Ошибка! Попробуйте снова.";
        resultElement.className = "wrong";
    }
    comparativeQuestionIndex = (comparativeQuestionIndex + 1) % comparativeQuestions.length;
    loadComparativeQuestion();
}

// Для превосходной степени
let superlativeQuestionIndex = 0;
const superlativeQuestions = [
    {
        words: ["strong", "beautiful", "expensive", "soft"],
        correctAnswers: ["strongest", "most beautiful", "most expensive", "softest"]
    },
    // Добавьте другие вопросы
];

function loadSuperlativeQuestion() {
    const q = superlativeQuestions[superlativeQuestionIndex];
    const answersElement = document.getElementById("superlative-answers");
    answersElement.innerHTML = "";
    q.words.forEach(word => {
        const button = document.createElement("button");
        button.textContent = `Как образовать превосходную степень от "${word}"?`;
        button.onclick = () => checkSuperlativeAnswer(word);
        answersElement.appendChild(button);
    });
}

function checkSuperlativeAnswer(word) {
    const resultElement = document.getElementById("superlative-answers");
    const correctAnswer = superlativeQuestions[superlativeQuestionIndex].correctAnswers[superlativeQuestionIndex];
    if (word === correctAnswer) {
        resultElement.textContent = "Правильно!";
        resultElement.className = "correct";
    } else {
        resultElement.textContent = "Ошибка! Попробуйте снова.";
        resultElement.className = "wrong";
    }
    superlativeQuestionIndex = (superlativeQuestionIndex + 1) % superlativeQuestions.length;
    loadSuperlativeQuestion();
}

document.getElementById("next").addEventListener("click", function () {
    loadComparativeQuestion();
    loadSuperlativeQuestion();
});
