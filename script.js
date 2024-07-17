const puzzleContainer = document.getElementById('puzzle-container');
const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question-text');
const revealButton = document.getElementById('reveal-button');

const imagePieces = [];
const imageUrl = 'pomaranian.webp';
const questions = [
    "What is your favorite exercise or sport?",
    "How do you stay motivated in achieving your goals?",
    "What is your favorite movie?",
    "What is your favorite breakfast food?",
    "Do you like ride on a bicycle?",
    "What do you like most about your job?",
    "Do you often drink coffee and tea?",
    "How do you get inspired for new ideas?",
    "Do you collect any things?",
    "How do you relax after a hard day?",
    "What do you like most about your city?",
    "What is your favorite type of art?",
    "How do you usually start your morning?",
    "What is your favorite color and why?",
    "What inspires you the most?",
    "How do you usually start your morning?"
];
let currentPiece;

for (let i = 0; i < 16; i++) {
    const piece = document.createElement('div');
    piece.classList.add('puzzle-piece');
    piece.dataset.index = i;
    piece.innerHTML = `<span>${i + 1}</span>`;
    imagePieces.push(piece);
    puzzleContainer.appendChild(piece);
}

puzzleContainer.addEventListener('click', (event) => {
    const target = event.target.closest('.puzzle-piece');
    if (target) {
        currentPiece = target;
        showQuestion();
    }
});

revealButton.addEventListener('click', () => {
    revealPiece(currentPiece);
    hideQuestion();
    puzzleContainer.classList.add('hidden-bg');
});

function showQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    questionText.innerText = questions[randomIndex];
    questionContainer.classList.remove('hidden');
}

function hideQuestion() {
    questionContainer.classList.add('hidden');
}

function revealPiece(piece) {
    const index = piece.dataset.index;
    piece.style.backgroundImage = `url(${imageUrl})`;
    piece.style.backgroundPosition = `${(index % 4) * -100}px ${Math.floor(index / 4) * -100}px`;
    piece.classList.add('revealed');
    piece.innerHTML = '';
}
