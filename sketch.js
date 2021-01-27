//Game States
var PLAY = 1;
var END=0;
var gameState = PLAY;

var knife;
var knifeImage ;

var f1, f2, f3;
var Fruit

var fruitGroup;
var enemyGroup;

function preload(){
  
  knifeImage = loadImage("knife.png");
  
  f1 = loadImage("fruit1.png");
  f2 = loadImage("fruit2.png");
  f3 = loadImage("fruit3.png");
}



function setup() {
  createCanvas(600, 600);
  
  //creating sword
   knife=createSprite(40,200,20,20);
   knife.addImage(knifeImage);
   knife.scale=0.7
  
  fruitGroup=new Group();
  enemyGroup=new Group();
  
  //set collider for sword
  knife.setCollider("rectangle",0,0,40,40);

  score=0;
  //create fruit and monster Group variable here
}

function draw() {
  background("lightblue");
  
  if(gameState===PLAY){
  
    //calling fruit and monster function
    fruits();
    // Move knife with mouse
    knife.y=World.mouseY;
    knife.x=World.mouseX;
    
    if(fruitGroup.isTouching(knife)){
      score = score + 1
      fruitGroup.destroyEach()
    }
  
    // Increase score if knife touching fruit
   
    // Go to end state if knife touching enemy
      
}
  
  drawSprites();
  
  //Display score
  textSize(25);
  text("Score : "+ score,250,50);
}

function fruits(){
  if(World.frameCount % 80 == 0){
    Fruit = createSprite(200, 200, 10, 10)
    position = Math.round(random(1, 2));
    Fruit.scale = 0.2
    fruitNum = Math.round(random(1, 3));
    fruitGroup.add(Fruit)
    Fruit.y = Math.round(random(1, 600))
    switch(fruitNum){
        
      case 1: Fruit.addImage("F1", f1)
        break
      case 2: Fruit.addImage("F2", f2)
        break
      case 3: Fruit.addImage("F3", f3)  
        
    }

    if ( position === 1){
      Fruit.velocityX = 5
    }
    else {
      Fruit.velocityX = -5
    }
    
  }
}


function enemy(){
  
}