class Baseclass{
    constructor(x,y,width, height){
        var options={
            density:1.2,
            friction:1,
            restitution:0
        };
this.body=Matter.Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
this.image=loadImage("sprites/base.png");
Matter.World.add(world,this.body);

    }
    display(){
var pos=this.body.position;
var angle=this.body.angle;

push();
strokeWeight(4);
stroke("pink");
imageMode(CENTER);
   translate(pos.x,pos.y);
   rotate(angle);
    image(this.image,0,0,this.width,this.height);
    pop();
    }
}