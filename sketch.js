var balloon;

function preload() 
{
  bg = loadImage('Hot Air Ballon-01.png');
  balloonImage = loadAnimation("Hot Air Ballon-02.png", "Hot Air Ballon-03.png", "Hot Air Ballon-04.png");
}

function setup() 
{
  database = firebase.database();
  createCanvas(1365,650);
  balloon = createSprite(100, 400, 20, 20);
  balloon.addAnimation("balloon", balloonImage);
  balloon.scale = 0.4;
}

function draw() 
{
  background(bg);
  
  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x - 10;
  }
  
  if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x + 10;
  }

  if(keyDown(UP_ARROW)){
    balloon.y = balloon.y - 10;
  }

  if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y + 10;
  }
  drawSprites();

  
  textSize(30);
  fill("black")
  text("**use the arrow keys to move " , 190, 90);
}