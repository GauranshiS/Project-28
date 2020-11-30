
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var launcherObj;

function preload()
{
	image=loadImage("Plucking mangoes/boy.png");
	
}

function setup() {
	createCanvas(800, 700);

	//var boy=createSprite(200,100,50,50);
	//boy.addImage("image",image);  
	
	engine = Engine.create();
	world = engine.world;
	

	
	//Create the Bodies Here.

	mango1= new Mango(100,100,20,20);
	mango2= new Mango(150,200,20,20);
	mango3= new Mango(200,250,20,20);
	mango4= new Mango(250,300,20,20);
	mango5= new Mango(300,350,20,20);
	mango6= new Mango(350,400,20,20);

stoneObj=new Stone(200,200,20,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  this.image(image,200,200,200,200);


	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();

	detectColission();


  drawSprites();
 
}

function mouseDragged(){
 

        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});

    
   
}


function mouseReleased(){
    launcher.fly();
    gameState="launched"
}

function detectColission(lstone,lmango){

	mangoBodyPosition=lmango.body.position
	stoneBody.position=lstone.body.position
	detectColission(stoneObj,mango1);
	detectColission(stoneObj,mango2);
	detectColission(stoneObj,mango3);
	detectColission(stoneObj,mango4);
	detectColission(stoneObj,mango5);
	detectColission(stoneObj,mango6);


var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distnace<=lmango.r+lstone.r){

	Matter.Body.setStatic(lmango.body,false);
}

}

function keyPressed(){

if(keyCode===32){

	Matter.Body.setPosition(stoneObj.body,{x:235, y:420})

}


}