class Birds extends Baseclass{
    constructor(x,y,w,h){
super(x,y,w,h);
this.image=loadImage("images/stone.png")
    }
display(){
    // this.body.position.x=mouseX;
    // this.body.position.y=mouseY;
    super.display();
}
}