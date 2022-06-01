

let currentQuestion = 0;

function displayNextOverlay() {
    if (currentQuestion === 1) {
        overlayTwoOn();
    } else if (currentQuestion === 2) {
        overlayThreeOn();
    } else if (currentQuestion === 3) {
        overlayFourOn();
    } else {
        endOn();
    }
    currentQuestion++;
}

function initialiseGame() {
    showElement("mainPage");
    document.getElementById("startQuiz").addEventListener("click", overlayOn);
    document.getElementById("helpSection").addEventListener("click", helpOn);
    document.getElementById("back").addEventListener("click", backOn);

    document.getElementById("hawaii").addEventListener("click", correctOn);
    document.getElementById("japan").addEventListener("click", incorrectOn);
    document.getElementById("indonesia").addEventListener("click", incorrectOn);

    document.getElementById("australia").addEventListener("click", correctOn);
    document.getElementById("turkey").addEventListener("click", incorrectOn);
    document.getElementById("brazil").addEventListener("click", incorrectOn);

    document.getElementById("correctAnswer").addEventListener("click", displayNextOverlay);
    document.getElementById("incorrectAnswer").addEventListener("click", displayNextOverlay);

    document.getElementById("china").addEventListener("click", incorrectOn);
    document.getElementById("vietnam").addEventListener("click", correctOn);
    document.getElementById("philippines").addEventListener("click", incorrectOn);

    document.getElementById("arizona").addEventListener("click", incorrectOn);
    document.getElementById("chinaTwo").addEventListener("click", correctOn);
    document.getElementById("peru").addEventListener("click", incorrectOn);

}

function hideElement(elementId) {
    document.getElementById(elementId).classList.remove("show");
    document.getElementById(elementId).classList.add("hide");
}

function showElement(elementId) {
    document.getElementById(elementId).classList.remove("hide");
    document.getElementById(elementId).classList.add("show");
}

function helpOff() {
    hideElement("helpPage");
    let help = document.getElementsByClassName("help");
    help.addEventListener("click", helpOn);
}

function helpOn() {
    showElement("helpPage");
    hideElement("mainButtons");
}

function backOff() {
    let back = document.getElementById("back");
    back.addEventListener("click", backOn);
}

function backOn() {
    showElement("mainPage");
    showElement("mainButtons");
    hideElement("helpPage");

}

function overlayOff() {
    let overlay = document.getElementById("overlay");
    let start = document.getElementsByClassName("start");

    overlay.classList.add("hide");
    start.addEventListener("click", overlayOn);
}

function overlayOn() {
    currentQuestion++;
    showElement("overlay");
    hideElement("mainButtons");
}

function overlayTwoOff() {
    hideElement("overlayTwo");
    let next = document.getElementsByClassName("next");
    next.addEventListener("click", overlayTwoOn);
}

function overlayTwoOn() {
    showElement("overlayTwo");
    hideElement("incorrectPage");
    hideElement("correctPage");
}

function overlayThreeOff() {
    hideElement("overlayThree");
    let next = document.getElementsByClassName("next");
    next.addEventListener("click", overlayThreeOn);
}

function overlayThreeOn() {
    showElement("overlayThree");
    hideElement("incorrectPage");
    hideElement("correctPage");
}

function overlayFourOff() {
    hideElement("overlayFour");
    let next = document.getElementsByClassName("next");
    next.addEventListener("click", overlayThreeOn);
}

function overlayFourOn() {
    showElement("overlayFour");
    hideElement("incorrectPage");
    hideElement("correctPage");
}

function endOff() {
    hideElement("endOfQuiz");
    let next = document.getElementsByClassName("next");
    next.addEventListener("click", endOn);
}

function endOn() {
    showElement("endOfQuiz");
    hideElement("incorrectPage");
    hideElement("correctPage");
    let endQuiz = document.getElementById("endQuiz");
    endQuiz.addEventListener("click", showMainPage);
    currentQuestion = 0;
}

function showMainPage() {
    showElement("mainPage");
    showElement("mainButtons");
    hideElement("endOfQuiz");
}


function correctOff() {
    hideElement("correctPage");

    let hawaii = document.getElementById("hawaii");
    hawaii.addEventListener("click", correctOn);

    let australia = document.getElementById("australia");
    australia.addEventListener("click", correctOn);

    let vietnam = document.getElementById("vietnam");
    vietnam.addEventListener("click", correctOn);

    let chinaTwo = document.getElementById("chinaTwo");
    chinaTwo.addEventListener("click", correctOn);
}

function correctOn() {
    showElement("correctPage");
    hideElement("overlay");
    hideElement("overlayTwo");
    hideElement("overlayThree");
    hideElement("overlayFour");

}
function incorrectOff() {

    hideElement("incorrectPage");
    let japan = document.getElementById("japan");
    let indonesia = document.getElementById("indonesia");

    japan.addEventListener("click", incorrectOn);
    indonesia.addEventListener("click", incorrectOn);

    let turkey = document.getElementById("turkey");
    let brazil = document.getElementById("brazil");

    turkey.addEventListener("click", incorrectOn);
    brazil.addEventListener("click", incorrectOn);

    let china = document.getElementById("china");
    let philippines = document.getElementById("philippines");

    china.addEventListener("click", incorrectOn);
    philippines.addEventListener("click", incorrectOn);

    let arizona = document.getElementById("arizona");
    let peru = document.getElementById("peru");

    arizona.addEventListener("click", incorrectOn);
    peru.addEventListener("click", incorrectOn);
}

function incorrectOn() {
    showElement("incorrectPage");
    hideElement("overlay");
    hideElement("overlayTwo");
    hideElement("overlayThree");
    hideElement("overlayFour");
}

window.addEventListener('DOMContentLoaded', initialiseGame);




