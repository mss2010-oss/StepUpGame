const questions = [
    { word: "быстрый", options: ["быстрее", "быстрый", "самый быстрый"], answer: "самый быстрый" },
    { word: "красивый", options: ["красивее", "красивый", "самый красивый"], answer: "самый красивый" },
    { word: "умный", options: ["умнее", "умный", "самый умный"], answer: "самый умный" }
];

let currentQuestion = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");
    const resultElement = document.getElementById("result");

    resultElement.textContent = "";
    answersElement.innerHTML = "";

    const q = questions[currentQuestion];
    questionElement.textContent = `Выберите правильную форму для слова "${q.word}":`;

    q.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        answersElement.appendChild(button);
    });
}

function checkAnswer(answer) {
    const resultElement = document.getElementById("result");

    if (answer === questions[currentQuestion].answer) {
        resultElement.textContent = "Правильно!";
        resultElement.className = "correct";
    } else {
        resultElement.textContent = "Ошибка! Попробуйте снова.";
        resultElement.className = "wrong";
    }
}

document.getElementById("next").addEventListener("click", () => {
    currentQuestion = (currentQuestion + 1) % questions.length;
    loadQuestion();
});

loadQuestion();
