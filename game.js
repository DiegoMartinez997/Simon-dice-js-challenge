

var buttonColour = ["red", "blue", "green", "yellow"];
var gamePatternt = [];

function nextSecuence () {
    var randomNumber = Math.floor(Math.random()* 4);

    var chosenColour = buttonColour[randomNumber];

    gamePatternt.push (chosenColour);

    $("#"+ chosenColour).on("click", function(){
        $("." + chosenColour).fadeOut(100).fadeIn(100);

        var audio = new Audio("sounds/" + chosenColour + ".mp3")
        audio.play();

        return chosenColour;
    }
    );

$(".btn").on("click", nextSecuence);


}



alert("hello")
;

