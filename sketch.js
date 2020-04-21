const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball1;

function setup() {
  console.log("in setup")
  createCanvas(800, 800);
  engine = Engine.create();
    world = engine.world;

   // ball1= Bodies.rectangle(200,200,20,20);
   // World.add(world,ball1)
  ball1 = new ball(100,300);
  /*console.log("after ball")*/

    fix = new fixShot(ball1.body,{x:100,y:300});
}

function draw() {
  console.log("in draw")
  background(0);

  Engine.update(engine);
  //rect(this.ball1.position.x,this.ball1.position.y,20,20);
 ball1.display();

   fix.display();
}
