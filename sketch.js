const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1, bob2, bob3, bob4, bob5;
var chain1, chain2, chain3, chain4, chain5;

function preload()
{
  
}

function setup() {
 createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  bob1 = new Bob(350,400,50)
  bob2 = new Bob(400,400,50)
  bob3 = new Bob(450,400,50)
  bob4 = new Bob(500,400,50)
  bob5 = new Bob(550,400,50)
  chain1 = new Chain(bob1.body,{x:350,y:100})
  chain2 = new Chain(bob2.body,{x:400,y:100})
  chain3 = new Chain(bob3.body,{x:450,y:100})
  chain4 = new Chain(bob4.body,{x:500,y:100})
  chain5 = new Chain(bob5.body,{x:550,y:100})
  roof = new Roof(450,100,300,30);

  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
    width: 1600,
    height:700,
    wireframes: false
    }
  })

  Engine.run(engine);
  Render.run(render);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  roof.display();
  
 
}


