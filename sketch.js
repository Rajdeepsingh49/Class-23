const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var myEng,mywor,box1,ground;
function setup() {
  createCanvas(1200,600);

  myEng = Engine.create();
  mywor = myEng.world;
  
  ground = new Ground(600,580,1200,10);
  box1 = new Box(600,300,50,50);
  box2= new Box(620,100,50,100);

  
 
  
 
}

function draw() {
  
  Engine.update(myEng);
  background(255,255,255);  
  
  ground.display();
  box1.display();
  box2.display();
}