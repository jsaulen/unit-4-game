var crystal = {
    blue: {
        name: "blue",
        value: 0
    },
    green: {
        name: "green",
        value: 0
    },
    red: {
        name: "red",
        value: 0
    },
    yellow: {
        name: "yellow",
        value: 0
    }
};

var currentScore = 0;
var targetScore = 0;
var winCount = 0;
var lossCount = 0;

var getRandom = function(min, max) {
    return Math.floor(Math.random()*(max-min + 1)) + min;
};

var startGame = function(){
currentScore = 0;
targetScore = getRandom(19, 120);
crystal.blue.value = getRandom(1, 12);
crystal.green.value = getRandom(1, 12);
crystal.red.value = getRandom(1, 12);
crystal.yellow.value = getRandom(1, 12);

$("#your-score").text(currentScore);
$("#target-score").text(targetScore);

console.log("Target score: " + targetScore);
console.log("Blue: " + crystal.blue.value + " | Green: " + crystal.green.value + " | Red: " + crystal.red.value + " | Yellow: " + crystal.yellow.value);

};

var checkWin = function() {
    if (currentScore > targetScore) {
        alert("Sorry. You lost!");
        console.log("You Lost");
        lossCount++;
        $("#loss-count").text(lossCount);
        startGame();
    }

    else if (currentScore === targetScore) {
        alert("Congratulations. You won!");
        console.log("You Won");
        winCount++;
        $("#win-count").text(winCount);
        startGame();
    }
};

var addValues = function(clickedCrystal) {
    currentScore += clickedCrystal.value;
    $("#your-score").text(currentScore);
    checkWin();
    console.log("Your score: " + currentScore);
};

startGame();

$("#blue").click(function() {
    addValues(crystal.blue);
});
$("#green").click(function() {
    addValues(crystal.green);
});
$("#red").click(function() {
    addValues(crystal.red);
});
$("#yellow").click(function() {
    addValues(crystal.yellow);
});

