const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon, score;
var gameState = "onSling";
var box1,box2,box3,box4,box5,box6,box7,box8,box9, slingshot;

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;
    // bottom level
    box1 = new Box(330,275,30,40);
    box2 = new Box(360,275,30,40);
    box3 = new Box(390,275,30,40);
    box4 = new Box(420,275,30,40);
    box5 = new Box(450,275,30,40);
    // 2nd level
    box6 = new Box(360,235,30,40);
    box7 = new Box(390,235,30,40);
    box8 = new Box(420,235,30,40);
    // top
    box9 = new Box(390,195,30,40);

    ground = new Ground(390,300,400,20)
    ground2 = new Ground(390,height,400,20);
    // polygon with sling
    polygon = new Polygon(100,200,20,20);
    slingshot = new SlingShot(polygon.body,{x:100,y:200});
    score = 0;
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    ground.display();
    polygon.display();
    slingshot.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    textSize(25);
    text("Score: " + score, 650, 40);
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
        //Matter.Body.applyForce(polygon.body,polygon.body.position, {x:5, y:5} );
        return false;
    }
}


function mouseReleased(){
    slingshot.fly();
    //birds.pop();
    if (gameState!=="launched"){
        Matter.Body.applyForce(polygon.body,polygon.body.position, {x:5, y:5} );
        
    }
    gameState = "launched";
    return false;
}

function keyPressed() {
    if (keyCode === 32) {
        slingshot.attach(polygon.body);
        gameState = "onSling";
    }
}