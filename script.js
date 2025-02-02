const comparativeQuestions = [
    { word: "красивый", options: ["красивее", "красивый", "самый красивый"], answer: "красивее" },
    { word: "умный", options: ["умнее", "умный", "самый умный"], answer: "умнее" },
    { word: "быстрый", options: ["быстрее", "быстрый", "самый быстрый"], answer: "быстрее" },
    { word: "сильный", options: ["сильнее", "сильный", "самый сильный"], answer: "сильнее" },
    { word: "высокий", options: ["выше", "высокий", "самый высокий"], answer: "выше" }
];

let currentQuestion = 0;

function loadComparativeQuestion() {
    const questionElement = document.getElementById("comparative-question-text");
    const answersElement = document.getElementById("comparative-answers");
    answersElement.innerHTML = "";

    const q = comparativeQuestions[currentQuestion];
    questionElement.textContent = `Қандай форма дұрыс: "${q.word}"?`;

    q.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkComparativeAnswer(option);
        answersElement.appendChild(button);
    });
}

function checkComparativeAnswer(answer) {
    const resultElement = document.createElement("p");
    if (answer === comparativeQuestions[currentQuestion].answer) {
        resultElement.textContent = "Дұрыс!";
        resultElement.className = "correct";
    } else {
        resultElement.textContent = "Қате! Қайта көріңіз.";
        resultElement.className = "wrong";
    }
    document.body.appendChild(resultElement);
}

document.getElementById("next").addEventListener("click", () => {
    currentQuestion = (currentQuestion + 1) % comparativeQuestions.length;
    loadComparativeQuestion();
});

loadComparativeQuestion();
