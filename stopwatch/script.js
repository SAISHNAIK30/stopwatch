const timerDisplay = document.querySelector('.timer');
const pauseBtn = document.getElementById('pauseBtn');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');

let intervalId;
let hours = 0, minutes = 0, seconds = 0, milliseconds = 0;

function startTimer() {
  intervalId = setInterval(() => {
    milliseconds += 10;
    if (milliseconds >= 1000) { // Changed condition
      milliseconds = 0;
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
      }
    }
    updateTimerDisplay();
  }, 10);
}

function pauseTimer() {
  clearInterval(intervalId);
}

function resetTimer() {
  clearInterval(intervalId);
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');
  const formattedMilliseconds = milliseconds.toString().padStart(3, '0');
  timerDisplay.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
