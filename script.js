let timer = 30;
let interval = setInterval(() => {
    document.getElementById("timer").innerText = `Time: 0:${timer < 10 ? '0' : ''}${timer}`;
    if (timer === 0) {
        clearInterval(interval);
        alert("Time's up!");
    }
    timer--;
}, 1000);

// Добавляем перетаскивание
const words = document.querySelectorAll(".word");
const dropZones = document.querySelectorAll(".drop-zone");

words.forEach(word => {
    word.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text", event.target.innerText);
    });
});

dropZones.forEach(zone => {
    zone.addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    zone.addEventListener("drop", (event) => {
        event.preventDefault();
        const data = event.dataTransfer.getData("text");
        const newWord = document.createElement("div");
        newWord.classList.add("word");
        newWord.innerText = data;
        event.target.appendChild(newWord);
    });
});

// Проверка ответов
document.getElementById("checkAnswers").addEventListener("click", () => {
    const erEstWords = ["big", "small", "fast", "long", "short", "old", "young", "ugly"];
    const moreMostWords = ["interesting", "beautiful", "boring", "friendly", "noisy"];
    const changeWords = ["bad", "good"];

    let erEstCorrect = checkCategory("er-est", erEstWords);
    let moreMostCorrect = checkCategory("more-most", moreMostWords);
    let changeCorrect = checkCategory("change", changeWords);

    if (erEstCorrect && moreMostCorrect && changeCorrect) {
        alert("🎉 Well done! You sorted everything correctly!");
    } else {
        alert("❌ Some words are in the wrong place. Try again!");
    }
});

function checkCategory(zoneId, correctWords) {
    let placedWords = Array.from(document.getElementById(zoneId).children).map(el => el.innerText);
    return correctWords.every(word => placedWords.includes(word));
}
