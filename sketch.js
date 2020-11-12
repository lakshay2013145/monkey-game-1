var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var survivalTime=0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
}



function setup() {
  createCanvas(600,600);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  monkey.collide(ground);
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  obstacleGroup=createGroup();
  bananaGroup=createGroup();
}


function draw() {
  background("white");
  
  score=score+1;
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50)
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/framerate())
  text("SurvivalTime:"+survivalTime,100,50);
  
  if(keyDown("space")){
     monkey.velocityX=-8;
     monkey.addGravity();
     }
        
  obstacles();
  fruits();
  drawSprites();
}

function fruits(){
  if(frameCount/80===0){
     banana.y=Math.round(random(120,200));
     banana.addImage(bananaImage);
     banana.velocityX=-8;
     bananaGroup.add(banana);
     }
}

function obstacles(){
  if(frameCount/300===0){
     obstacles.y=Math.round(random(120,200));
     obstacles.addImage(obstacleImage);
     obstacles.velocityX=-8;
     obstaclesGroup.add(obstacle);
     }
}


