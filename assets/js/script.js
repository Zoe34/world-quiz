
    function overlayOff(){
        let overlay = document.getElementById("overlay");
        let start = document.getElementsByClassName("start");

        overlay.style.display = "none";
        start.addEventListener("click", overlayOn);
        
        
    }

    function overlayOn(){
        document.getElementById("overlay").classList.remove("hide");
        document.getElementById("mainButtons").style.display = "none";        
    }

    function correctOff(){
        let correctPage = getElementById("correctPage");
        let hawaii = getElementById("hawaii");

        correctPage.style.display = "hide";
        hawaii.addEventListener("click", correctOn);
        
    }

    function correctOn(){

        document.getElementById("correctPage").classList.remove("hide");

        let overlay = document.getElementById("overlay");
        overlay.style.display = "none";
    }

    function incorrectOff(){
        let japan = document.getElementById("japan");
        let indonesia = document.getElementById("indonesia");

        japan.addEventListener("click", incorrectOn);
        indonesia.addEventListener("click", incorrectOn);
    }

    function incorrectOn(){
        document.getElementById("incorrectPage").classList.remove("hide");
        document.getElementById("overlay").style.display = "none";
    }






    




