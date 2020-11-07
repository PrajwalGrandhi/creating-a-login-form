var hypnoticBall, database;
var position;
var stateValue = 0;
var playerCount;
var form;
var player;
var game;
function setup(){
  database = firebase.database();
  console.log(database);

game = new Game()
game.getState();
game.start();

  createCanvas(500,500);

 
}

function draw(){
  background("white");
  
    
    drawSprites();
  
}

