var car,wall;
var speed,weight,deformation;

function setup() {
  createCanvas(1600,400);
  speed=Math.round(random(55,90));
  weight=Math.round(random(400,1500));
 
  car=createSprite(50,200,50,20);
  wall=createSprite(1200,200,40,200);

  wall.shapeColor="red";

  car.velocityX=speed;

  deformation=(0.5*weight*car.velocityX*car.velocityX)/22500;

 
}

function draw() {
  
  background("black");

   

 if(isTouching()){
  
   car.collide(wall);
   if(deformation<100){
      car.shapeColor="green";
      fill("green");
      text("all is safe",500,100);
   }
   if(deformation>100 && deformation<180){
      car.shapeColor="yellow";
      fill("yellow");
      text("not quite safe",500,100);
   }
   if(deformation>180){
      car.shapeColor="red";
     fill("red");
      text("disqualified",500,100);
   }
 }
 else{
      car.shapecolor="blue";
 }
 

  drawSprites();
 
}
function isTouching(){
  if(wall.x - car.x < car.width/2 + wall.width/2){
    return true;
  }
  else {
    return false;
   }
}
