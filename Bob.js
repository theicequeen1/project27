class Bob{
  constructor(x,y,r)
  {
    var options ={
     'restitution': 1.4,
     'friction': 1.0,
     'density': 1.0   
    }  
    this.x = x;
    this.y = y;
    this.r = r;
    this.body = Bodies.circle(this.x, this.y,(this.r-20)/2,options)
    World.add(world, this.body);
  }  
  display(){
var bobpops = this.body.position;
push()
translate(bobpops.x, bobpops.y);
rectMode(CENTER)
fill(rgb(6, 253, 199));
ellipse(0, 0 this.r,this.r);
pop();
  }
}