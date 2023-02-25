// declare variable to get a random number for dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

function player1Dice(){
    // variable to get the image with the random number
    var randomImage = "images/dice" + randomNumber1 + ".png";
    // change the image using dom
    document.querySelectorAll("img")[0].setAttribute("src", randomImage);

    // shortcut document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`);
}

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

function player2Dice(){
    var randomImage2 = "images/dice" + randomNumber2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomImage2);
    // document.querySelector(".img2").setAttribute("src", `images/dice${randomNumber2}.png`);
}

function textWinner(){
    // condition for winner
    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    }
    else if(randomNumber2 > randomNumber1){
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    }
    else{
        document.querySelector("h1").innerHTML = "Draw!";
    }
}

