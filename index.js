const gameScreen = document.querySelector(".game-screen")
const startScreen = document.querySelector(".start-screen")
const gameOverScreen = document.querySelector(".game-over") 
const startButton = document.querySelector(".start-btn")

let isGameRunning = false
let spaceShipInstance;

function preload() {
    //load all the images you will need here
    bg = loadImage("./images/background.jpg");
    spaceShip = loadImage("./images/spaceShip.png"); //character size and position variables

}
  
function setup() {
gameScreen.style.display = "none"
gameOverScreen.style.display = "none"
const canvas = createCanvas(900, 700);
canvas.parent("gameScreen");
noLoop();



}

if(isGameRunning) {

    function draw() {
        background(bg)
        image()
    }

}

