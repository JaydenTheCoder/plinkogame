const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var Plinkos=[];
var ground;
var division=[];
var particles=[];
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,800);
 for(var i=70;i<780;i=i+80){
  Plinkos.push(new Plinko(i,70)) 
 }
 for(var i=50;i<780;i=i+60){
  Plinkos.push(new Plinko(i,150)) 
 }
 for(var i=25;i<780;i=i+60){
  Plinkos.push(new Plinko(i,225)) 
 }
 for(var i=0;i<780;i=i+80){
  Plinkos.push(new Plinko(i,290)) 
 }
 for(var i=-25;i<780;i=i+80){
  Plinkos.push(new Plinko(i,350)) 
 }
 ground=new Ground(width/2,height,width,20)
for(var k=0;k<=width;k=k+80){
  division.push(new Divisions(k, height-200/2, 10, 200));
}

}

function draw() {
  Engine.update(engine);
  background(0);  
  if(frameCount%60===0){
    console.log("test")
    particles.push(new particle(random(width/2-30,width/2+30),10,10))
  }
  for(var i=0;i<Plinkos.length;i++){
    Plinkos[i].display();
  }
  for(var i=0;i<division.length;i++){
   division[i].display();
  }
  for(var i=0;i<particles.length;i++){
    particles[i].display();
  }
  ground.display();
  drawSprites();
}
