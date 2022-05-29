
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


