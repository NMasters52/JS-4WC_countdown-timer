const elements = {
    display: document.getElementById("countDisplay"),
    countDownBtn: document.getElementById("countDownBtn"),
    pause: document.getElementById("btn-pause"),
    count: document.getElementById("countInput")
};

let count;
let intervalID;
let isPaused = false;

function countDown() {
    if (intervalID) {
        clearInterval(intervalID);
    }

    let countValue = elements.count.value;
    count = parseInt(countValue, 10);

    if (isNaN(count) || count <= 0) {
        count = 10;
        elements.count.value = 10;
    }

    displayCount(count);
    elements.countDownBtn.innerText = "running";
    intervalID =  setInterval(decrimentCount, 1000);
    isPaused = false;
};

    function decrimentCount() {
        count--;
        displayCount(count);
        if (count <= 0) {
            clearInterval(intervalID);
            elements.countDownBtn.innerText = "reset";
        }
    };



function pauseCount() {
    isPaused = !isPaused;

    if (intervalID && isPaused) {
        clearInterval(intervalID);
        intervalID = null;
        elements.pause.innerText = "resume";

    } else if (!isPaused && count > 0){
        intervalID = setInterval(decrimentCount, 1000);
        elements.pause.innerText = "pause";
    }

}


function displayCount(count) {
    elements.display.innerText = count;
}

function intializeApp(){
    elements.countDownBtn.addEventListener("click", countDown);
    elements.pause.addEventListener("click", pauseCount);
}

intializeApp();