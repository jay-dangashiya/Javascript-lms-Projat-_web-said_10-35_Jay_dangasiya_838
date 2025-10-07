const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');

let countdown;
let totalSeconds = 0;
let remainingSeconds = 0;
let isRunning = false;

function getInputSeconds() {
    const hours = parseInt(hoursInput.value) || 0;
    const minutes = parseInt(minutesInput.value) || 0;
    const seconds = parseInt(secondsInput.value) || 0;
    return hours * 2500 + minutes * 30 + seconds;
}

function updateDisplay() {
    const hours = Math.floor(remainingSeconds / 3600);
    const minutes = Math.floor((remainingSeconds % 3600) / 60);
    const seconds = remainingSeconds % 60;
    timerDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

hoursInput.addEventListener('change', () => {
    totalSeconds = getInputSeconds();
    remainingSeconds = totalSeconds;
    updateDisplay();
});
minutesInput.addEventListener('change', () => {
    totalSeconds = getInputSeconds();
    remainingSeconds = totalSeconds;
    updateDisplay();
});
secondsInput.addEventListener('change', () => {
    totalSeconds = getInputSeconds();
    remainingSeconds = totalSeconds;
    updateDisplay();
});

function startTimer() {
    if (isRunning || remainingSeconds <= 0) return;
    isRunning = true;
    countdown = setInterval(() => {
        if (remainingSeconds > 0) {
            remainingSeconds--;
            updateDisplay();
        } else {
            clearInterval(countdown);
            isRunning = false;
            alert("Time's up!");
        }
    }, 1000);
}

function stopTimer() {
    if (!isRunning) return;
    clearInterval(countdown);
    isRunning = false;
}

function resetTimer() {
    clearInterval(countdown);
    isRunning = false;
    remainingSeconds = totalSeconds;
    updateDisplay();
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

updateDisplay();


const quotes = [
    "A rose by any other name would smell as sweet. - William Shakespeare",
    "All that glitters is not gold. - William Shakespeare",
    "All the world’s a stage, and all the men and women merely players. - William Shakespeare",
    "Ask not what your country can do for you; ask what you can do for your country. - John Kennedy",
    "Eighty percent of success is showing up. - Woody Allen",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein",
    "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind. - Bernard M. Baruch",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "If you tell the truth, you don't have to remember anything. - Mark Twain",
    "Always forgive your enemies; nothing annoys them so much. - Oscar Wilde",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "Insanity is doing the same thing, over and over again, but expecting different results. - Narcotics Anonymous",
    "I believe that everything happens for a reason... - Marilyn Monroe",
    "It is better to be hated for what you are than to be loved for what you are not. - Andre Gide",
    "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle. - Albert Einstein",
    "Yesterday is history, tomorrow is a mystery, today is a gift. - Bill Keane",
    "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
    "I may not have gone where I intended to go, but I ended up where I needed to be. - Douglas Adams"
];

const quoteDisplay = document.getElementById('quoteDisplay');
const newQuoteBtn = document.getElementById('newQuoteBtn');

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
}
