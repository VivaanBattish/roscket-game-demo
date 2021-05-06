var gameState = 0;
var player;
var playerCount = 0;
var form,game;
var p1,p2,p3;
var rockets;
var allPlayers;
var r1,r2,r3;
var s1,s2;
var bground;

function preload(){
r1 = loadImage("images/rocket1.png");
r2 = loadImage("images/rocket2.png");
r3 = loadImage("images/rocket3.png");

s1 = loadImage("images/space1.png");
s2 = loadImage("images/space2.png");  
}

function setup(){
  database = firebase.database();
  createCanvas(displayWidth/2 + 100,displayHeight/2+100);
  game = new Game();
  game.getState();
  game.start();


  bground = createSprite(displayWidth/4,displayHeight/4);
  bground.addImage(s1);
  bground.scale = 3;

  
}

function draw(){
  if (playerCount === 3){
    game.update(1);
  }
   console.log(gameState);
  if (gameState === 1){
    game.play();
    
  }
}
