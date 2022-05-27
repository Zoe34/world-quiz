

    

    function overlayOff(){
        let overlay = document.getElementById("overlay");
        let start = document.getElementsByClassName("start");

        overlay.style.display = "none";
        start.addEventListener("click", overlayOn);
        
    }

    function overlayOn(){
        document.getElementById("overlay").classList.remove("hide");
    }


    




