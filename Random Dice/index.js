var randNum1 = Math.floor(Math.random() * 6) + 1;

var randDiceImage1 = "Dice" + randNum1 + ".png";

var randImageSource1 = "images/" + randDiceImage1;

var img1 = document.querySelectorAll("img")[0].setAttribute("src", randImageSource1)

var randNum2 = Math.floor(Math.random() * 6) + 1;

var randDiceImage2 = "Dice" + randNum2 + ".png";

var randImageSource2 = "images/" + randDiceImage2;

var img2 = document.querySelectorAll("img")[1].setAttribute("src", randImageSource2)

if (randNum1 > randNum2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!"
} else if (randNum2 > randNum1) {
    document.querySelector("h1").innerHTML = " Player 2 wins! 🚩"
} else {
    document.querySelector("h1").innerHTML = "Draw"
}