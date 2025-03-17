const elements = {
    display: document.getElementById("countDisplay"),
    countDownBtn: document.getElementById("countDownBtn"),
    pause: document.getElementById("btn-pause")
};

let count;
let intervalID;

function countDown() {
    count = 10;
    displayCount(count);

    elements.countDownBtn.innerText = "running";

    intervalID =  setInterval(decrimentCount, 1000);

    function decrimentCount() {
        count--;
        displayCount(count);
        if (count <= 0) {
            clearInterval(intervalID);
            elements.countDownBtn.innerText = "reset";
        }
    };

};

function pauseCount() {
    if (intervalID) {
        clearInterval(intervalID);
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