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

function main() {

    let start = document.getElementById("start-button");
    let gameTimer = document.getElementById('timer');
    let critter = document.getElementById('mole');
    let startTime;
    let startScore = 0
    let currentScore = document.getElementById('score');

    //console.log(holecation);
    //console.log(critter);
    //console.log(gameTimer);
    //console.log(start);


    function toggleMole(displayValue) {
        mole.style.display = displayValue;
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }


    function moveHole() {
        let randoNumber = getRandomInt(9);
        let holecation = document.getElementsByClassName("hole");
        holecation[randoNumber].append(critter);
    };

    function startGo() {
        startTime = 30;
        let currentTime = setInterval(function() {
            gameTimer.innerText = `Time left: ${startTime} secs`;
            startTime--;
            if (startTime === 0) {
                startTime = 0;
                clearInterval(currentTime);
                alert(`Your Time is up, Dingus! Your score is ${startScore} points!`);
                toggleMole("none");
            } else ;
        }, 1000);
        toggleMole("initial");
        setInterval(moveHole, 1000);
    };

    function addPoint() {
        startScore++;
        currentScore.innerText = `${startScore} Points`;
    }

    start.addEventListener('click', startGo);
    critter.addEventListener('click', addPoint);
};

main();