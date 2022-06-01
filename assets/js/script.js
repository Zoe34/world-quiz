
function helpOff(){
    let helpPage = document.getElementById("helpPage");
    helpPage.style.display = "none";
    let help = document.getElementsByClassName("help");
    help.addEventListener("click", helpOn);
}

function helpOn(){
    document.getElementById("helpPage").classList.remove("hide");
    document.getElementById("mainButtons").style.display = "none";
}

function backOff(){
    let backButton = document.getElementsByClassName("backButton");
    backButton.addEventListener("click", backOn);
}

function backOn(){
  
}


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

function overlayTwoOff(){
    let overlayTwo = document.getElementById("overlayTwo");
    overlayTwo.style.display = "none";
    let next = document.getElementsByClassName("next");
    next.addEventListener("click", overlayTwoOn)
    }
    
function overlayTwoOn(){
    document.getElementById("overlayTwo").classList.remove("hide");
    document.getElementById("incorrectPage").style.display = "none";
    document.getElementById("correctPage").style.display = "none";
}





function correctOff() {
    let correctPage = document.getElementById("correctPage");
    correctPage.style.display = "none";
    
    let hawaii = document.getElementById("hawaii");
    hawaii.addEventListener("click", correctOn);

    let australia = document.getElementById("australia");
    australia.addEventListener("click", correctOn);
}

function correctOn() {
    document.getElementById("correctPage").classList.remove("hide");

    let overlay = document.getElementById("overlay");
    overlay.style.display = "none";
    let overlayTwo = document.getElementById("overlayTwo");
    overlayTwo.style.display = "none";

}
function incorrectOff() {

    document.getElementById("incorrectPage").style.display = "none";
    let japan = document.getElementById("japan");
    let indonesia = document.getElementById("indonesia");

    japan.addEventListener("click", incorrectOn);
    indonesia.addEventListener("click", incorrectOn);

    let turkey = document.getElementById("turkey");
    let brazil = document.getElementById("brazil");

    turkey.addEventListener("click", incorrectOn);
    brazil.addEventListener("click", incorrectOn);
}

function incorrectOn() {
    document.getElementById("incorrectPage").classList.remove("hide");
    document.getElementById("overlay").style.display = "none";
    document.getElementById("overlayTwo").style.display = "none";
}



