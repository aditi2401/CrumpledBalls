
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	//Create a Ground
	ground = new Ground(width/2, height-18, width, 10);
 	
 	boxPosition=width-150;
 	boxY=height-30;

 	boxLeftBody = new Dustbin(boxPosition-70, boxY-30, 15,75);

 	boxBottomBody = new Dustbin(boxPosition, boxY, 150,15);

 	boxRightBody = new Dustbin(boxPosition+70 , boxY-30, 15,75);

	paper = new Paper(100, boxY, 20);

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);

  ground.display();
  boxLeftBody.display();
  boxBottomBody.display();
  boxRightBody.display();
  paper.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:14, y:-14});
	}
}



