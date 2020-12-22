// namespacing or aliasing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ground
  var engine,
    world;

  var object

  function setup() {
    createCanvas(400, 400);

    engine = Engine.create();
    world = engine.world
    //restitution, isStatic, density, friction - different properties
    var options = {
      isStatic: true
    }
    var ball_options = {
      restitution: 7
    }
    object = Bodies.circle(200, 200, 15, ball_options);
    World.add(world, object)

    console.log(object.position.x)
    Engine.run(engine)

    ground = Bodies.rectangle(200, 390, 400, 10, options);
    World.add(world, ground)

    //reconnect session can you hear me?

  }

  function draw() {
    background("pink");
    rectMode(CENTER)
    circle(object.position.x, object.position.y, 30)
    rect(ground.position.x, ground.position.y, 400, 10)
  }