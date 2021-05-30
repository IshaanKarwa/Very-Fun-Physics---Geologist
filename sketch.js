const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,50);
    hammer = new Hammer(10,100);
    rubber = new Rubber(600, 100)
    stone = new Stonee(400, 100)
    iron = new Iron(800, 100)

    console.log(Iron)
    console.log(Rubber)
    console.log(Stonee)
    console.log(Hammer)
    console.log(Plane)
}

function draw(){
    background("lightBlue");
    Engine.update(engine);




    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();
 


    
 
}