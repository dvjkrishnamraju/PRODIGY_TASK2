let timer;
let isRunning = false;
let startTime;
let lapNumber = 1;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startStop").textContent = "Start";
    } else {
        startTime = Date.now() - (lapNumber > 1 ? parseInt(document.getElementById("display").textContent.split(":")[2]) * 1000 : 0);
        timer = setInterval(updateDisplay, 10);
        document.getElementById("startStop").textContent = "Stop";
    }
    isRunning = !isRunning;
}

function updateDisplay() {
    let currentTime = Date.now() - startTime;
    let minutes = Math.floor(currentTime / (60 * 1000)).toString().padStart(2, "0");
    let seconds = Math.floor((currentTime % (60 * 1000)) / 1000).toString().padStart(2, "0");
    let milliseconds = Math.floor((currentTime % 1000) / 10).toString().padStart(2, "0");
    document.getElementById("display").textContent = `${minutes}:${seconds}:${milliseconds}`;
}

function lap() {
    let lapTime = document.getElementById("display").textContent;
    let lapItem = document.createElement("li");
    lapItem.textContent = `Lap ${lapNumber}: ${lapTime}`;
    document.getElementById("laps").appendChild(lapItem);
    lapNumber++;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    document.getElementById("display").textContent = "00:00:00";
    document.getElementById("startStop").textContent = "Start";
    document.getElementById("laps").innerHTML = "";
    lapNumber = 1;
}
