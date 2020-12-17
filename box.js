class Box{
    constructor(x,y){
        var options={
           isStatic:true,
                friction:1,
                restitution:0
        };
        this.body=Matter.Bodies.rectangle(x,y,40,40,options);
        this.width=40;
        this.height=40;
        this.box=loadImage("images/mango.png");
        Matter.World.add(world, this.body);
    }
display(){
    
   var pos=this.body.position;
   var angle=this.body.angle;
   imageMode(CENTER);
   push();
   strokeWeight(4);
   stroke("green")
   translate(pos.x,pos.y);
   rotate(angle);
    image(this.box,0,0,this.width,this.height);
    pop();
}
}
