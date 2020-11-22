
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score = 0;
var ground;
var bananasGroup,obstaclesGroup;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  //monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  //ground
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  bananasGroup = createGroup();
  obstaclesGroup = createGroup();
}


function draw() {
background(235);
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
      score = score + Math.round(getFrameRate()/60);
    
    if(score>0 && score%100 === 0){
       
    }
  textSize(15);
  text("Survival Time: "+score,100,50);
  
  if(keyDown("SPACE")){
    monkey.velocityY = -12;
  }
  //gravity for monkey
  monkey.velocityY = monkey.velocityY + 1;
  monkey.collide(ground);
  
  //spawn Bananas
  spawnBananas();
  //spawn Obstacles
  spawnObstacles();
  
  drawSprites();
}

function spawnBananas() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(90,150));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //banana lifetime
    banana.lifetime = 200;
    
    //depth
    banana.depth = monkey.depth;
    banana.depth = monkey.depth + 1;
    
    //add each cloud to the group
    bananasGroup.add(banana);
  }
}


function spawnObstacles() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    obstacle = createSprite(600,330,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
     //banana lifetime
    obstacle.lifetime = 200;
    

    
    //add each cloud to the group
    obstaclesGroup.add(obstacle);
  }
}




