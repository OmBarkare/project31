const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;

var plinko1 = [], plinko5 = [];
var plinko2 = [], plinko6 = [];
var plinko3 = [], plinko7 = [];
var plinko4 = []/* plinko8 = []*/;
var ballArray = [], ball;
var bin1, bin2, bin3;
var leftWall, rightWall;

function setup() {
  createCanvas(800,650);
	engine = Engine.create();
	world = engine.world;

  var n = 0
  for(var i = 20; i < width-10; i = i + 30){
    plinko1[n] = new Plinko(i,150,5);
    plinko2[n] = new Plinko(i+18,200,5);
    plinko3[n] = new Plinko(i,250,5);
    plinko4[n] = new Plinko(i+18,300,5);
    plinko5[n] = new Plinko(i,350,5);
    plinko6[n] = new Plinko(i+18,400,5);
    plinko7[n] = new Plinko(i,450,5);
    n = n + 1 ;
  //plinko8[n] = new Plinko(i+18,500,5);
  }
  bin1 = new Bin(400,640);
  bin2 = new Bin(650,640);
  bin3 = new Bin(150,640);
  leftWall = new Ground(0,325,2,650);

//  plinko = new Plinko(200,50,5);
//  bin1 = new Bin(200, 200);
//  Engine.run(engine);
}

function draw() {
  background(0);

  Engine.update(engine,17);

  for(var i = 0; i < plinko1.length; i = i + 1){
    plinko1[i].display();
    plinko2[i].display();
    plinko3[i].display();
    plinko4[i].display();
    plinko5[i].display();
    plinko6[i].display();
    plinko7[i].display();
//    plinko8[i].display();
  }
  //  plinko.display();
  bin2.display();
  bin1.display();
  bin3.display();

  /*
  if(mouseY < 145){
    ball = new Ball(7);
    ballArray.push(ball);
  }
  */

  for(var i = 0; i < ballArray.length; i = i + 1){
    ballArray[i].display();
  }

//  stroke("white");
//  text("x:"+mouseX+"y:"+mouseY,mouseX,mouseY);
}

// try using mouseDragged function instead of mouseReleased

function mouseReleased(){ 
  if(mouseY < 145){
    ball = new Ball(7);
    ballArray.push(ball);
  }
}