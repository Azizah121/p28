class Constraints{
    constructor (x,y){
        var options={
bodyA:x,
pointB:y,
length:7,
stiffness:0.04
        }
        this.slingshot=Constraint.create(options);
        Matter.World.add(world,this.slingshot);
    }
    display(){
        if(this.slingshot.bodyA!=null){
        var pointA=this.slingshot.bodyA.position;
        var pointB=this.slingshot.pointB;
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
    fly(){
        this.slingshot.bodyA=null;
    }
}