

let currentQuestion = 0;

function displayNextQuestion() {

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

    document.getElementById("correctAnswer").addEventListener("click", displayNextQuestion);
    document.getElementById("incorrectAnswer").addEventListener("click", displayNextQuestion);

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

function helpOn() {
    showElement("helpPage");
    hideElement("mainButtons");
}

function backOn() {
    showElement("mainPage");
    showElement("mainButtons");
    hideElement("helpPage");

}

function overlayOn() {
    currentQuestion++;
    showElement("overlay");
    hideElement("mainButtons");
}
function overlayTwoOn() {
    showElement("overlayTwo");
    hideElement("incorrectPage");
    hideElement("correctPage");
}

function overlayThreeOn() {
    showElement("overlayThree");
    hideElement("incorrectPage");
    hideElement("correctPage");
}

function overlayFourOn() {
    showElement("overlayFour");
    hideElement("incorrectPage");
    hideElement("correctPage");
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

function correctOn() {
    showElement("correctPage");
    hideElement("overlay");
    hideElement("overlayTwo");
    hideElement("overlayThree");
    hideElement("overlayFour");

}

function incorrectOn() {
    showElement("incorrectPage");
    hideElement("overlay");
    hideElement("overlayTwo");
    hideElement("overlayThree");
    hideElement("overlayFour");
}

window.addEventListener('DOMContentLoaded', initialiseGame);




