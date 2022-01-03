const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1
var wall1
var wall2
var ball
engine = Engine.create();
world = engine.world;
function preload()
{
	ground1 = new Ground(300, 480, 600, 20)
	wall1 = new Ground(400,440, 20, 60  )
	wall2=new Ground(200, 440, 20, 60)
	ball = Bodies.circle(80, 440, 15, options)
	World.add(world, ball)
	var options = {restitution: 0.004}
}

function setup() {
	createCanvas(600, 500);




	//Create the Bodies Here.

	
	Engine.run(engine);
  
}
function keyPressed(){
if (keyCode== UP_ARROW ){
	Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.008, y:-0.04})
}

	  
}

function draw() {
  rectMode(CENTER);
  background(0);

 

  wall1.show()
  ground1.show()
  wall2.show()
 ellipseMode(RADIUS)
 ellipse(ball.position.x, ball.position.y, 15, 15)
  
  
 
}



