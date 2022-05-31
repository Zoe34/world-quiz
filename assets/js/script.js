
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

    document.getElementById("incorrectPage").style.display = "none";
    let japan = document.getElementById("japan");
    let indonesia = document.getElementById("indonesia");

    japan.addEventListener("click", incorrectOn);
    indonesia.addEventListener("click", incorrectOn);
}

function incorrectOn() {
    document.getElementById("incorrectPage").classList.remove("hide");
    document.getElementById("overlay").style.display = "none";
}


function overlayTwoOff(){
let overlayTwo = getElementById("overlayTwo");
overlayTwo.style.display = "none";
let next = getElementsByClassName("next");
next.addEventListener("click", overlayTwoOn)
}

function overlayTwoOn(){
    document.getElementById("overlayTwo").classList.remove("hide");
    document.getElementById("incorrectPage").style.display = "none";
    document.getElementById("correctPage").style.display = "none";
}


function correctTwoOff() {
    let correctPage = document.getElementById("correctPage");
    correctPage.style.display = "none";
    
    let australia = document.getElementById("australia");
    australia.addEventListener("click", correctTwoOn);
}

function correctTwoOn() {
    document.getElementById("correctPage").classList.remove("hide");
    correctPage.style.display = "visible";

    let overlayTwo = document.getElementById("overlayTwo");
    overlayTwo.style.display = "none";

}
function incorrectTwoOff() {

    document.getElementById("incorrectPage").style.display = "none";
    let turkey = document.getElementById("turkey");
    let brazil = document.getElementById("brazil");

    turkey.addEventListener("click", incorrectTwoOn);
    brazil.addEventListener("click", incorrectTwoOn);
}

function incorrectTwoOn() {
    document.getElementById("incorrectPage").classList.remove("hide");
    
}

