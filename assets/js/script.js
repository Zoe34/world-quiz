

    

    function overlayOff(){
        let overlay = document.getElementById("overlay");
        let start = document.getElementsByClassName("start");

        overlay.style.display = "none";
        start.addEventListener("click", overlayOn());
        
    }

    function overlayOn(){
        document.getElementById("overlay").style.display = "block";
    }


    [
        {
          "question": "Where are those craters?"
          "image": <url>
          "options": [
            "Hawaii", "Japan", "Indonesia"
          ]
          "answer" : "Hawaii"
        },
        
        {
          "question": "Where is this beach?"
          "image": <url>
          "options": [
            "Australia", "Turkey", "Brazil"
          ]
          "answer" : "Australia"
        },
        
      ]

    




