const elements = {
    countDownDisplay: document.getElementById("countDownDisplay"),
    countDownBtn: document.getElementById('countDownBtn')
};

let intervalId = null;
let currentValue = 10;

function startCountDown() {

    if (intervalId) {
        clearInterval(intervalId);
    }

    currentValue = 10;

    displayCount(currentValue);

    intervalId = setInterval(function() {
        currentValue--;

        displayCount(currentValue);

        if (currentValue <= 0) {
            clearInterval(intervalId);
            elements.countDownBtn.innerText = "Restart";
        }
    }, 1000);

    if (currentValue) {
        elements.countDownBtn.innerText = "Running...";
    }

}

function displayCount(value) {
  return  elements.countDownDisplay.innerText = `${value}`;
}

function initializeApp() {
    elements.countDownBtn.addEventListener("click", startCountDown);
}

    document.addEventListener("DOMContentLoaded", initializeApp);