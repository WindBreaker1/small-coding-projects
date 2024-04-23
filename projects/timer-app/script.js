//HtML elements made JS variables
const timerText = document.getElementById("timer-text")
const startButton = document.getElementById("start-button")
const pauseButton = document.getElementById("pause-button")
const resetButton = document.getElementById("reset-button")
const lightButton = document.getElementById("light-button")
const body = document.querySelector("body")

//global variables
let hours = 0
let minutes = 0
let seconds = 0
let milliseconds = 0
let timer

function returnData(input) {
  return input >= 10 ? input : `0${input}`
} 

function updateTimerText() {
  if ((milliseconds += 10) == 1000) {
    milliseconds = 0
    seconds += 1
  } else if (seconds == 60) {
    seconds = 0
    minutes += 1
  } else if (minutes == 60) {
    minutes = 0
    hours += 1
  }
  timerText.innerText = `${returnData(hours)}:${returnData(minutes)}:${returnData(seconds)}:${returnData(milliseconds)}`
}

function startTimer() {
  timer = setInterval(updateTimerText, 10)
  startButton.style.display = "none"
  pauseButton.style.display = "block"
}
startButton.addEventListener("click", startTimer)

function stopTimer() {
  clearInterval(timer)
  pauseButton.style.display = "none"
  startButton.style.display = "block"
}
pauseButton.addEventListener("click", stopTimer)

function resetTimer() {
  clearInterval(timer)
  hours = 0
  minutes = 0
  seconds = 0
  milliseconds = 0 
  timerText.innerText = `00:00:00:000`
  pauseButton.style.display = "none"
  startButton.style.display = "block"
}
resetButton.addEventListener("click", resetTimer)

//On page load, the pause button is invisible
pauseButton.style.display = "none"

//Toggle Dark & Light modes
let isLight = true
function toggleLight() {
  if (isLight) {
    lightButton.style.background = "white"
    lightButton.style.color = "black"
    lightButton.innerHTML = "Light Mode"

    body.style.background = "black"
    body.style.color = "white"
    body.style.transition = "0.7s"

    isLight = false
  } else if (!isLight) {
    lightButton.style.background = "black"
    lightButton.style.color = "white"
    lightButton.innerHTML = "Dark Mode"

    body.style.background = "white"
    body.style.color = "black"
    body.style.transition = "0.7s"

    isLight = true;
  }
}
lightButton.addEventListener("click", toggleLight)