
/**
 * Allows for the displaying of questions in order. When game ends on question 4 the code resets
 */
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

/**
 * Increases the score by one for the incorrect and correct answers once the option has been selected.
 */
function checkScore(){
    if(document.getElementById('hawaii').clicked == true){
        incrementCorrectScore();
    } else if (document.getElementById('australia').clicked == true){
        incrementCorrectScore();

    } else if (document.getElementById('vietnam').clicked == true){
        incrementCorrectScore();

    } else if (document.getElementById('chinaTwo').clicked == true){
        incrementCorrectScore();

    } else{
        incrementIncorrectScore();
    }
}

function incrementCorrectScore() {
    let oldScore = document.getElementById("score").innerText;
    document.getElementById("score").innerText = ++oldScore;

}
function incrementIncorrectScore(){
    let oldScore = document.getElementById("incorrect").innerText;
    document.getElementById("incorrect").innerText = ++oldScore;
}

function reset(){
    oldScore = 0;
    oldScore++;
}

/**
 * When a button is clicked during the game, the appropriate function is called e.g.,
 * after answering correctly a confirmation appears: "Correct!"
 */
function initialiseGame() {
    showElement("mainPage");
    document.getElementById("endQuiz").addEventListener("click", reset);
    document.getElementById("startQuiz").addEventListener("click", overlayOn);
    document.getElementById("helpSection").addEventListener("click", helpOn);
    document.getElementById("back").addEventListener("click", backOn);

    document.getElementById("hawaii").addEventListener("click", correctOn);
    document.getElementById("hawaii").addEventListener("click", incrementCorrectScore);
    document.getElementById("japan").addEventListener("click", incorrectOn);
    document.getElementById("japan").addEventListener("click", incrementIncorrectScore);
    document.getElementById("indonesia").addEventListener("click", incorrectOn);
    document.getElementById("indonesia").addEventListener("click", incrementIncorrectScore);

    document.getElementById("australia").addEventListener("click", correctOn);
    document.getElementById("australia").addEventListener("click", incrementCorrectScore);
    document.getElementById("turkey").addEventListener("click", incorrectOn);
    document.getElementById("turkey").addEventListener("click", incrementIncorrectScore);
    document.getElementById("brazil").addEventListener("click", incorrectOn);
    document.getElementById("brazil").addEventListener("click", incrementIncorrectScore);

    document.getElementById("correctAnswer").addEventListener("click", displayNextQuestion);
    document.getElementById("incorrectAnswer").addEventListener("click", displayNextQuestion);

    document.getElementById("china").addEventListener("click", incorrectOn);
    document.getElementById("china").addEventListener("click", incrementIncorrectScore);
    document.getElementById("vietnam").addEventListener("click", correctOn);
    document.getElementById("vietnam").addEventListener("click", incrementCorrectScore);
    document.getElementById("philippines").addEventListener("click", incorrectOn);
    document.getElementById("philippines").addEventListener("click", incrementIncorrectScore);

    document.getElementById("arizona").addEventListener("click", incorrectOn);
    document.getElementById("arizona").addEventListener("click", incrementIncorrectScore);
    document.getElementById("chinaTwo").addEventListener("click", correctOn);
    document.getElementById("chinaTwo").addEventListener("click", incrementCorrectScore);
    document.getElementById("peru").addEventListener("click", incorrectOn);
    document.getElementById("peru").addEventListener("click", incrementIncorrectScore);

}

/**
 * The hideElement function allows to hide elements that are not supposed to be shown on certain
 * pages. E.g. when question one is shown, other questions will be hidden. 
 * When question two is shown, other questions will be hidden.
 */
function hideElement(elementId) {
    document.getElementById(elementId).classList.remove("show");
    document.getElementById(elementId).classList.add("hide");
}

/**
 * The showElement function allows to show specific overlays during the game.
 * For example question one must be shown for the player to be able to answer.
 * When showing one overlay the others will be hidden.
 */
function showElement(elementId) {
    document.getElementById(elementId).classList.remove("hide");
    document.getElementById(elementId).classList.add("show");
}

/**
 * Help page is displayed after clicking "how to play"
 */
function helpOn() {
    showElement("helpPage");
    hideElement("mainButtons");
}

/**
 * Back button that takes user from the help page back to start page.
 */
function backOn() {
    showElement("mainPage");
    showElement("mainButtons");
    hideElement("helpPage");

}

/**
 * Question one displayed
 */
function overlayOn() {
    currentQuestion++;
    showElement("overlay");
    hideElement("mainButtons");
}

/**
 * Question two displayed
 */
function overlayTwoOn() {
    showElement("overlayTwo");
    hideElement("incorrectPage");
    hideElement("correctPage");
}

/**
 * Question three displayed
 */
function overlayThreeOn() {
    showElement("overlayThree");
    hideElement("incorrectPage");
    hideElement("correctPage");
}

/**
 * Question four displayed
 */
function overlayFourOn() {
    showElement("overlayFour");
    hideElement("incorrectPage");
    hideElement("correctPage");
}

/**
 * Confirmation page when quiz has ended.
 * All other pages hidden
 * Option to return to main page by clicking "end quiz"
 */
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

/**
 * Overlay displays after user chooses correct answer
 */
function correctOn() {
    showElement("correctPage");
    hideElement("overlay");
    hideElement("overlayTwo");
    hideElement("overlayThree");
    hideElement("overlayFour");

}

/**
 * Overlay displays after user chooses incorrect answer
 */
function incorrectOn() {
    showElement("incorrectPage");
    hideElement("overlay");
    hideElement("overlayTwo");
    hideElement("overlayThree");
    hideElement("overlayFour");
}

window.addEventListener('DOMContentLoaded', initialiseGame);




