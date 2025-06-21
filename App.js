let minutesElement = document.getElementById("min");
let secondsElement = document.getElementById("second");
let millisecondsElement = document.getElementById("ms");
let startbtn = document.getElementById("startbtn");
let stopbtn = document.getElementById("stopbtn");
let container = document.getElementById("stopwatch-container");

let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let watchInterval;

function start() {
    watchInterval = setInterval(() => {
        milliseconds++;
        millisecondsElement.innerHTML = milliseconds < 10 ? "0" + milliseconds : milliseconds;

        if (milliseconds >= 100) {
            seconds++;
            secondsElement.innerHTML = seconds < 10 ? "0" + seconds : seconds;
            milliseconds = 0;
        }

        if (seconds >= 60) {
            minutes++;
            minutesElement.innerHTML = minutes < 10 ? "0" + minutes : minutes;
            seconds = 0;
            secondsElement.innerHTML = "00";
        }
    }, 10);

    startbtn.disabled = true;
    stopbtn.disabled = false;
    container.classList.add('running');
}

function stop() {
    clearInterval(watchInterval);
    startbtn.disabled = false;
    stopbtn.disabled = true;
    container.classList.remove('running');
}

function reset() {
    clearInterval(watchInterval);
    startbtn.disabled = false;
    stopbtn.disabled = true;
    container.classList.remove('running');

    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    minutesElement.innerHTML = "00";
    secondsElement.innerHTML = "00";
    millisecondsElement.innerHTML = "00";
}

// Initialize button states
stopbtn.disabled = true;