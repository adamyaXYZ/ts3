const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var score = 0

var bg = "sprites/bg1.png";



function preload() {
    getBackgroundImg()
    var response =  fetch("http://worldclockapi.com/api/json/est/now");
    var responseJSON =  response.json();
    var datetime = responseJSON.currentDateTime;
    var hour = datetime.slice(10,13);

    if(hour>0600 && hour<1900){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }
    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
    
}

function setup() {
    createCanvas(1200,600)
    engine = Engine.create();
    world = engine.world;

    surface = new Ground(900,290,600,15)
    platty = new Ground(100,200,50,10)

        box1  = new Box (900,250,20,50)
        box2  = new Box (921,250,20,50)
        box3  = new Box (942,250,20,50)
        box4  = new Box (963,250,20,50)
        box5  = new Box (879,250,20,50)
        box6  = new Box (858,250,20,50)
        box7  = new Box (837,250,20,50)
        box8  = new Box (900,200,20,50)
        box9  = new Box (921,200,20,50)
        box10  = new Box (942,200,20,50)
        
        box12  = new Box (879,200,20,50)
        box13  = new Box (858,200,20,50)
        box14  = new Box (900,150,20,50)
        box15  = new Box (921,150,20,50)
        
        
        box18  = new Box (879,150,20,50)
        box19  = new Box (900,100,20,50)
        
        
        
        
        
        
        
    

        
        hexago = new Hex(98,142)
        sling = new SlingShot(hexago.body,{x:98,y:142})
        
    
}

function draw() {
    if (backgroundImg)
        background(backgroundImg)
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    

    Engine.update(engine);

    surface.display()
    platty.display()

    
    
    
    
    push()
        strokeWeight(5)
        box1.display()
        box2.display()
        box3.display()
        box4.display()
        box5.display()
        box6.display()
        box7.display()
        box8.display()
        box9.display()
        box10.display()
        
        box12.display()
        box13.display()
        box14.display()
        box15.display()
        
        
        box18.display()
        box19.display()
        
        
        
        
        
        
        
    
    pop()

    box1.score() 
    box2.score() 
    box3.score() 
    box4.score() 
    box5.score() 
    box6.score() 
    box7.score() 
    box8.score() 
    box9.score() 
    box10.score()

    box12.score()
    box13.score()
    box14.score()
    box15.score()

    box18.score()
    box19.score()
        

    hexago.display()

    sling.display()

    
    

    drawSprites()
    
    //console.log(mouseX,mouseY)

}

function mouseDragged(){
    Matter.Body.setPosition(hexago.body,{x:mouseX,y:mouseY});
}


function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode === 32){
        sling.attach(hexago.body);
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldclockapi.com/api/json/est/now");
    var responseJSON = await response.json();

    var datetime = responseJSON.currentDateTime;
    var hour = datetime.slice(10,13);
    
    if(hour>0600 && hour<1900){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}