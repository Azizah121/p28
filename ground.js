class Ground{
    constructor(x,y,w,h){
       var option={
            isStatic: true,
            friction:1
        };
this.body=Matter.Bodies.rectangle(x,y,w,h, option);
this.width=w;
this.height=h;
this.image=loadImage("sprites/ground.png");
Matter.World.add(world,this.body);
}
display(){
var pos=this.body.position;
imageMode(CENTER);
image(this.image,pos.x,pos.y,this.width, this.height);
}
}