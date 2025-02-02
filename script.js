const comparativeQuestions = [
    {
        question: "The cat is ___ than the dog.",
        options: ["faster", "fastest", "most fast"],
        answer: "faster",
    },
    {
        question: "This book is ___ than the other one.",
        options: ["more interesting", "most interesting", "interestinger"],
        answer: "more interesting",
    },
    {
        question: "She is ___ than her brother.",
        options: ["taller", "tallest", "more tall"],
        answer: "taller",
    },
    {
        question: "My house is ___ than yours.",
        options: ["bigger", "biggest", "more big"],
        answer: "bigger",
    },
    {
        question: "This cake is ___ than that one.",
        options: ["yummier", "yummiest", "most yummy"],
        answer: "yummier",
    },
];

const superlativeQuestions = [
    {
        word: "strong",
        correctAnswer: "the strongest",
    },
    {
        word: "soft",
        correctAnswer: "the softest",
    },
    {
        word: "beautiful",
        correctAnswer: "most beautiful",
    },
    {
        word: "expensive",
        correctAnswer: "most expensive",
    },
    {
        word: "slow",
        correctAnswer: "the slowest",
    },
];

let currentComparativeQuestion = 0;
let currentSuperlativeQuestion = 0;
let isComparative = true;

function loadComparativeQuestion() {
    const question = comparativeQuestions[currentComparativeQuestion];
    const questionText = document.getElementById("comparative-question");
    const answersElement = document.getElementById("comparative-answers");
    const resultText = document.getElementById("comparative-result");

    resultText.textContent = "";
    answersElement.innerHTML = "";

    questionText.textContent = question.question;

    question.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkComparativeAnswer(option);
        answersElement.appendChild(button);
    });
}

function checkComparativeAnswer(answer) {
    const resultText = document.getElementById("comparative-result");
    const correctAnswer = comparativeQuestions[currentComparativeQuestion].answer;

    if (answer === correctAnswer) {
        resultText.textContent = "Correct! Well done!";
        resultText.className = "correct";
        moveKitten();
    } else {
        resultText.textContent = "Oops! Try again.";
        resultText.className = "wrong";
    }
}

function loadSuperlativeQuestion() {
    const question = superlativeQuestions[currentSuperlativeQuestion];
    const questionText = document.getElementById("superlative-question");
    const answersElement = document.getElementById("superlative-answers");
    const resultText = document.getElementById("superlative-result");

    resultText.textContent = "";
    answersElement.innerHTML = "";

    questionText.textContent = `Which of the following is correct for the word "${question.word}"?`;

    const button1 = document.createElement("button");
    button1.textContent = `the +est (e.g., ${question.correctAnswer})`;
    button1.onclick = () => checkSuperlativeAnswer(button1.textContent);
    answersElement.appendChild(button1);

    const button2 = document.createElement("button");
    button2.textContent = `most + (e.g., most ${question.word})`;
    button2.onclick = () => checkSuperlativeAnswer(button2.textContent);
    answersElement.appendChild(button2);
}

function checkSuperlativeAnswer(answer) {
    const resultText = document.getElementById("superlative-result");
    const correctAnswer = superlativeQuestions[currentSuperlativeQuestion].correctAnswer;

    if ((answer.includes("the +
