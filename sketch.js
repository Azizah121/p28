var world
var ball, engine, World
var Engine=Matter.Engine;
var Bodies=Matter.Bodies;
var Constraint=Matter.Constraint;
function preload(){
}
function setup(){
createCanvas(1200,400);
engine=Engine.create();
world=engine.world;
Ground1=new Ground(600,390,1200,20);
Box1=new Box(1050,200);
Box2=new Box(1100,200,20,30);
Box3=new Box(1000,300);
Box4=new Box(1100,240,20,30);
Box5=new Box(1030,200,20,30);
Bird1=new Birds(100,50,40,40)
Boy1=new Boy(200,310,90);
Log1=new Log(1050,250,200,PI/50);

// var options={
//   bodyA: Bird1.body,
//   bodyB: Log5.body,
//   length: 100,
slingshot=new Constraints(Box1.body,{x:1050,y:200});
slingshot=new Constraints(Box2.body,{x:1100,y:280});
slingshot=new Constraints(Box3.body,{x:960,y:180});
slingshot=new Constraints(Box4.body,{x:1100,y:100});
slingshot=new Constraints(Box5.body,{x:1000,y:120});
slingshot=new Constraints(Bird1.body,{x:175,y:240});
// };

// slingshot=Constraint.create(options);
// Matter.World.add(world, slingshot);
}
function draw(){
  background(900);
  // imageMode(CENTER);
  // image(bg,width/2,height/2, width, height);
  Matter.Engine.update(engine);
  detectCollision(Bird1,Box1);
 detectCollision(Bird1,Box2);
 detectCollision(Bird1,Box3);
 detectCollision(Bird1,Box4);
 detectCollision(Bird1,Box5);
  Ground1.display();
  Log1.display();
  Box1.display();
 Box2.display();
 Box3.display();
 Box4.display();
 Box5.display();
 Boy1.display();
 Bird1.display();
 slingshot.display();
text("Press Space to Restart",300,100);
 //line(slingshot.bodyA.position.x,slingshot.bodyA.position.y,slingshot.bodyB.position.x,slingshot.bodyB.position.y);
}
function mouseDragged(){
  Matter.Body.setPosition(Bird1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
if(keyCode === 32){
  Matter.Body.setPosition(Bird1.body,{x:175, y:240})
  slingshot=new Constraints(Bird1.body,{x:175,y:240});
}
}

function detectCollision(stone,mango){
mangoBodyPosition=mango.body.position;
stoneBodyPosition=stone.body.position;
var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
if(distance<=mango+stone){
  Matter.Body.setStatic(mango.body,false);

}
}