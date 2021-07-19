var wall,car
var speed,weight;


function setup() {
  createCanvas(1200,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1150,200,60,height/2);
  speed=random(55,90)
  weight=random(400,1500)
 car.velocityX=speed;
  
 car.shapeColor=color(225);
}

function draw() {
background(0,0,0);  


if (wall.x-car.x<(car.width+wall.width)/2)
{
  car.velocityX=0
  console.log(car.velocityX)
  var deformation=0.5*weight*speed*speed/22509;
  text(deformation,400,50);
  if(deformation>180){
    car.shapecolor=color(255,0,0)
  }

  if(deformation<180 && deformation>100){
    car.shapeColor=color(255,255,0)
  }

  if(deformation< 100){
    car.shapeColor=color(0,255,0)
  }

}


  
  drawSprites();
}