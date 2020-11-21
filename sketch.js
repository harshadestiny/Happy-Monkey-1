//variables
var PLAY=1;
var END=0;
var gameState=1;
var monkey , monkeyImage;
var banana ,bananaImage, bananaGroup, obstacle, obstacleImage, obstacleGroup;
var FoodGroup, obstacleGroup;
var ground, groundImage, invisibleGround;
var number, survivalNumb, score, scoreImage;

//preload
function preload()
{
 monkeyImage =  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png   ","sprite_6.png","sprite_7.png","sprite_8.png");
 groundImage = loadImage("ground.png");
 bananaImage = loadImage("banana.png");
 obstacleImage = loadImage("obstacle.png");
 scoreImage = loadImage("score.png"); 
}

//setup
function setup()
{
  createCanvas(700,300);
  monkey = createSprite(50,250,20,50);
  monkey.addAnimation("running", monkeyImage);
  monkey.scale=0.1 ; 
  monkey.setCollider("circle");
  monkey.debug = false;
  
  ground = createSprite(200,270,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX=-6;
  
  invisibleGround = createSprite(200,280,400,10);
  invisibleGround.visible = false;
  
  score = createSprite(560,20,20,20);
  score.addImage(scoreImage);
  score.scale=0.1;
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();

  number=0;
  survivalNumb=0;
}

//draw
function draw()
{
 background(300);
 stroke("black"); 
 textSize(15);
 fill("black");
 text(number,600,25); 
 text("Survival Count: "+survivalNumb, 500, 50);
 survivalNumb = survivalNumb +  Math.round(getFrameRate()/60);
 monkey.collide(invisibleGround);
  
if(gameState===PLAY)
{   
if (ground.x < 0)
{
 ground.x = ground.width/2;
}
 monkey.collide(invisibleGround);
if(keyDown("space")&& monkey.y >= 100)
{
 monkey.velocityY = -10;
}
 monkey.velocityY = monkey.velocityY + 0.8 ;

 obstacles();
 food();
}
 drawSprites();
  
if(gameState===END)
{
 number=0;
 survivalNumb=0
 bananaGroup.destroyEach();
 obstaclesGroup.destroyEach();
 ground.velocityX=0;
}  
}


//food
function food()
{
if(World.frameCount%80===0)
{
 banana=createSprite(400,200,20,20);
 banana.addImage(bananaImage);
 banana.y=Math.round(random(0,200));
 banana.velocityX=-8;
 banana.setLifetime=50;
 banana.scale=0.1;
 bananaGroup.add(banana)
}
}

function obstacles()
{
if (World.frameCount%100===0)
{   
 obstacle = createSprite(620,253,50,50);
 obstacle.addImage(obstacleImage);
 obstacle.setCollider("circle", 0, 0, 180);
 obstacle.scale = 0.16 ;
 obstacle.velocityX=-8;
 obstacle.lifetime = 70;
 obstacleGroup.add(obstacle);  
}
}


 




