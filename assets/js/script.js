
function overlayOff() {
    let overlay = document.getElementById("overlay");
    let start = document.getElementsByClassName("start");

    overlay.style.display = "none";
    start.addEventListener("click", overlayOn);


}

function overlayOn() {
    document.getElementById("overlay").classList.remove("hide");
    document.getElementById("mainButtons").style.display = "none";
}

function correctOff() {
    let correctPage = document.getElementById("correctPage");
    correctPage.style.display = "none";
    let hawaii = document.getElementById("hawaii");
    hawaii.addEventListener("click", correctOn);
}

function correctOn() {
    document.getElementById("correctPage").classList.remove("hide");

    let overlay = document.getElementById("overlay");
    overlay.style.display = "none";
}

function incorrectOff() {
    let japan = document.getElementById("japan");
    let indonesia = document.getElementById("indonesia");

    japan.addEventListener("click", incorrectOn);
    indonesia.addEventListener("click", incorrectOn);
}

function incorrectOn() {
    document.getElementById("incorrectPage").classList.remove("hide");
    document.getElementById("overlay").style.display = "none";
}

function questionTwoOff() {
    let nextQuestion = document.getElementsByClassName("next");
    let overlayTwo = document.getElementById("overlayTwo");

    nextQuestion.addEventListener("click", questionTwoOn);

}

function questionTwoOn() {
    document.getElementById("overlayTwo").classList.remove("hide");
    correctPage.style.display = "none";
    incorrectPage.style.display = "none";

}

