var FixedRect, MovingRect

function setup() {
  createCanvas(800,400);
  FixedRect = createSprite(400, 200, 50, 50);
  MovingRect = createSprite(800,200,80,80);
  FixedRect.shapeColor="Green"
  MovingRect.shapeColor="Green"
  
}

function draw() {
  background(255,255,255); 
  
  MovingRect.x=World.mouseX
  MovingRect.y=World.mouseY
  
  if(MovingRect.x - FixedRect.x <= MovingRect.width/2 + FixedRect.width/2 
    && FixedRect.x - MovingRect.x <= MovingRect.width/2 + FixedRect.width/2 &&
    MovingRect.y- FixedRect.y <= MovingRect.height/2 + FixedRect.height/2
    && FixedRect.y - MovingRect.y <= MovingRect.height/2 + FixedRect.height/2){
  FixedRect.shapeColor= "Red"
  MovingRect.shapeColor= "Red"

  }
  else{
  
  FixedRect.shapeColor="Green"
  MovingRect.shapeColor="Green"




  
  }

  drawSprites();
}