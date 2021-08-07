const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,paper;
var binImg,bin;
var launcher1;

function preload(){
    binImg = loadImage("dustbin.png");
  
}
function setup(){
    var canvas = createCanvas(1350,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    paper = new paperclass();

    bin = createSprite(964,500,20,20);
    bin.addImage(binImg);
    bin.scale = 0.45;

    binPart1 = new Dustbin(909,510,10,120);
    binPart2 = new Dustbin(965,580,130,10);
    binPart3 = new Dustbin(1020,510,10,120);
    launcher1 = new launcher(paper.body,{x:300, y:300});
}

function draw(){
    background("white");
    Engine.update(engine);

   

    
    ground.display();
    //binPart1.display();
    //binPart2.display();
    //binPart3.display(); 
    paper.display();
    launcher1.display();
      
    drawSprites();
}

function mouseDragged()
{
	Matter.Body.setPosition(paper.body, {x:mouseX, y:mouseY})
  
}

function mouseReleased()
{
	
	launcher1.fly();
 
}