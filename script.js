const elements = {
    display: document.getElementById("countDisplay"),
    countDownBtn: document.getElementById("countDownBtn")
};

let count;

function countDown() {
    count = 10;
    displayCount(count);
  const intervalID =  setInterval(decrimentCount, 1000);

function decrimentCount() {
    count--;
    displayCount(count);
    if (count <= 0) {
        clearInterval(intervalID);
    }
};

};

function displayCount(count) {
    elements.display.innerText = count;
}

function intializeApp(){
    elements.countDownBtn.addEventListener("click", countDown);
}

intializeApp();