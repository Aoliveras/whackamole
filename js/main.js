console.log('JS loaded');

//Steps to game:

//1 when user clicks start button mole should appear
//2 start button click should start a timer at 30 secs
//3 when user clicks mole should increment the users score
//4 After the timer starts the mole shuold move wholes every sec.
//5 after timer is timedout an alert should pop up to give players score and sme game over
//6 hitting start again starts the game over. 

//BONUS 
// 1 log high score on screen
// Implement levels easy, med, hard


//1 Make mole appear on start
//2 Make timer start
//global variables
let start = document.getElementById("start-button");
let gameTimer = document.getElementById('timer');
let critter = document.getElementById('mole');
let startTime;
let startScore = 0
let currentScore = document.getElementById('score');
let holecation = document.getElementsByClassName("hole");
console.log(holecation);
//console.log(critter);
//console.log(gameTimer);
//console.log(start);


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

let randoNumber = getRandomInt(9);
console.log(randoNumber);

function moveHole() {
    holecation[randoNumber].append(critter);
    critter.style.display = "inline";
    //console.log(holecation[randoNumber]);
};

function startGo() {
    setInterval(moveHole, 1000);
    startTime = 30;
    //gameTimer.innerText = `Time left: ${startTime} secs`;
    let currentTime = setInterval(function() {
        gameTimer.innerText = `Time left: ${startTime} secs`;
        startTime-=1;
        if (startTime === 0) {
            clearInterval(currentTime);
            alert('Your Time is up, Dingus!');
        } else ;
    }, 1000);
    //setInterval(moveHole, 700);
};

function addPoint() {
    startScore +=1;
    currentScore.innerText = `${startScore} Points`;
}

start.addEventListener('click', startGo);
critter.addEventListener('click', addPoint);
