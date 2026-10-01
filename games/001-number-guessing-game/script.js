let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const resetBtn = document.getElementById('resetBtn');
const feedback = document.getElementById('feedback');
const attemptsDisplay = document.getElementById('attempts');

guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        feedback.textContent = 'Please enter a valid number between 1 and 100';
        return;
    }

    attempts++;
    attemptsDisplay.textContent = attempts;
    if (guess === secretNumber) {
        feedback.textContent = 'Congratulations! You got it!';
    } else if (guess < secretNumber) {
        feedback.textContent = 'Too low! Try again.';
    } else {
        feedback.textContent = 'Too high! Try again.';
    }

    guessInput.value = '';
});

resetBtn.addEventListener('click', function() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    attemptsDisplay.textContent = 0;
    feedback.textContent = '';
    guessInput.value = '';
});
