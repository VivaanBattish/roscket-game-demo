class Game{
    constructor(){

    }
  getState(){
      var gameStateref = database.ref("gameState");
      gameStateref.on("value",function(data){
          gameState = data.val();
      })
  }
  update(State){
      database.ref("/").update({
         gameState: State,
      })
  }
 async start(){
      if (gameState === 0){
          player = new Player();
          var playerCountref = await database.ref("playerCount").once("value");
          if(playerCountref.exists()){
                 playerCount = playerCountref.val();
                 player.getCount();
          }
          form = new Form();
          form.display();
          p1 = createSprite(200,200);
          p1.addImage(r1);
          p1.scale = 0.3;

          p2 = createSprite(400,200);
          p2.addImage(r2);
          p2.scale = 0.3;

          p3 = createSprite(600,200);
          p3.addImage(r3);
          p3.scale = 0.3;


          rockets = [p1,p2,p3];
      }
  }
  play(){
      player.carsE();
      form.Hide();  
      textSize(40);
    //  text("GAME START!!",120,90);
      Player.getplayerinfo();
      if(allPlayers !== undefined){
          var displayPosition = 150;
          var x = 20;
          var y = 80;
          var Index = 0;

         // image(track,0,-displayHeight*4,displayWidth-100,displayHeight*5);

          for(var plr in allPlayers){
              //displayPosition+= 50;
              //textSize(30);
              x = x+225;
              y = displayHeight-150 - allPlayers[plr].distance;
              rockets[Index].x = x;
              rockets[Index].y = y;
/*
              if(plr === "player"+player.index){
                  fill("green");
                  cars[Index].shapeColor = "green";
                  camera.position.x = (displayWidth - 100)/2;
                  camera.position.y = y;
                  ellipseMode(RADIUS);
                  ellipse(x,y,60,60);

                 // console.log(player.rank);

              }
              */
              /*
              else{
                  fill("black");
              }
              text(allPlayers[plr].name+": "+allPlayers[plr].distance,100,displayPosition);  
              */
             Index++;             
          }
      }
      
      if(keyDown("UP_ARROW") && player.index !== null){
           player.y = player.y - 5;
           player.update();
      }

      if(keyDown("RIGHT_ARROW") && player.index !== null){
        player.x = player.x + 5;
        player.update();
   }

   if(keyDown("LEFT_ARROW") && player.index !== null){
    player.x = player.x - 5;
    player.update();
}

       
      if(player.distance > 4050){
          gameState = 2;
          player.rank+= 1;
          Player.updateC(player.rank);
      }

      bground.velocity.y = 4;
      if(bground.y > displayHeight/2 +100){
          bground.y = displayHeight/4;
      }

     player.velocityY = player.velocityY + 0.8;

    
      drawSprites();
  }

  end(){
      console.log("end");
      console.log(player.rank);
  }
}
