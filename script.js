function startGame() {
    window.location.href = 'page1.html';
}

function correctAnswer() {
    document.querySelector('.kitten').classList.add('jump');
    alert("Correct! The kitten is happy!");
    setTimeout(() => {
        window.location.href = getNextPage();
    }, 1000);
}

function wrongAnswer() {
    alert("Oops! Try again.");
}

function getNextPage() {
    const currentPage = window.location.href.split('/').pop();
    
    switch (currentPage) {
        case 'index.html':
            return 'page1.html';
        case 'page1.html':
            return 'page2.html';
        case 'page2.html':
            return 'page3.html';
        case 'page3.html':
            return 'page4.html';
        case 'page4.html':
            return 'page5.html';
        case 'page5.html':
            return 'final.html';
    }
}
