var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(30,52);
weight=random(223,321);
thickness =random(22,83)
 bullet= createSprite(50, 200, 30, 50);
 bullet.velocityX=speed;
 bullet.shapeColor="white";

 wall=createSprite(1200,200,thickness,400/2);
 wall.shapeColor=color(80,80,80);

}

function draw() {
  background(0,0,0);


drawSprites();
}
function hasCollided(lbullet,lwall){

  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x
  if(bulletRightEdge>=wallLeftEdge){
return true;
}else{return false;}
 
}
if(hasCollide(bullet,wall)){
bullet.velocityX=0; 
var damage=(0.5*weight*speed*speed)/thickness*thickness*thickness;
 if (damage>10){
wall.shapeColor=color(255,0,0)
}
if(damage<10){
  wall.shapeColor=color(0,255,0);
}


}


  
