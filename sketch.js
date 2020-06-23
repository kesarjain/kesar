
var speed,weight,bullet;
var wall, thickness;

function setup() {
  createCanvas(1200,400);
thickness=random(22,83)
speed=random(23,31)
weight=random(30,52)
car=createSprite(50, 200, 50, 50);
wall=createSprite(1200,200,60,height/2)
color(80)

}
function draw() {
  background(255,255,255);
  car.velocityX=speed;
 hascollided(wall,car)

drawSprites();
}
function hascollided  (wall,car){
if(wall.x-car.x < (car.width+wall.width)/2)
{
car.velocityX=0;
var deformation=0.5 * weight * speed * speed/thickness*thickness*thickness;
if (deformation>180)
{
car.shapeColor="green";
}
if (deformation<180 && deformation>50)
{
  car.shapeColor ="red";
  }
  console.log(deformation)
}
}