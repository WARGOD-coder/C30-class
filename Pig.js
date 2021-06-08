class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
 this.v=255
  }
display(){

  if(this.body.speed < 3){
    super.display()
  }
  else{
    this.v=this.v-10
    push ()
  tint(255,this.v)  
World.remove(world,this.body)
image (this.image,this.body.position.x,this.body.position.y,50,50)  }
pop ()
}
}