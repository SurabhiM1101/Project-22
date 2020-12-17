//namespacing, this is v imp

const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var ball;
var engine,world;
var ground;
function setup() {
  var canvas=createCanvas(400,400);
  //creation of the engine
 engine=Engine.create();
 world=engine.world;

var ground_options={
  isStatic:true
}


ground=Bodies.rectangle(200,390,400,20,ground_options);
World.add(world,ground);
console.log(ground);
var ball_options={
  restitution:1.0
}
ball=Bodies.circle(200,100,20,ball_options);
World.add(world,ball);
console.log(ball);
}


function draw() {
  background("black");
  //for updating engine
  Engine.update(engine);
  fill ("purple")
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  strokeWeight(3);
  stroke("red");
  fill ("orange");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

}