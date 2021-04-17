
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var particle;
var divisions = [];
var particles = [particle];
var plinkos = [];
var line;
var divisionHeight = 300;
var gameState = "PLAY";
var count = 0;
var score = 0;

function setup() {
   //creating the canvas
    createCanvas(800, 800);

    //creating the engine
    engine = Engine.create();

    //adding physics engine to the world
    world = engine.world;

    //creating ground
    ground = new Ground(width/2,height,width,20);
  
  
     for (var k = 0; k <=width; k = k + 80) {
       divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
     }
  
  
      for (var j = 75; j <=width; j=j+50) 
      {
      
         plinkos.push(new Plinko(j,75));
      }
  
      for (var j = 50; j <=width-10; j=j+50) 
      {
      
         plinkos.push(new Plinko(j,175));
      }
  
       for (var j = 75; j <=width; j=j+50) 
      {
      
         plinkos.push(new Plinko(j,275));
      }
  
       for (var j = 50; j <=width-10; j=j+50) 
      {
      
         plinkos.push(new Plinko(j,375));
      }
  
      
  
      
  }

 

function draw() {
    background(0);
    Engine.update(engine);
    textSize(35)
  text("Score : "+score,20,40);
  



    ground.display();
    if ( gameState =="END") {
        background("black");
        fill("red");
        textSize(100);
        text("Game Over", 200, 400);
       
      } 
      for(var k = 0; k < plinkos.length; k++) {
       plinkos[k].display();
    }

    if(particle!=null)
    {
       particle.display();
        
        if (particle.body.position.y>700)
        {
              if (particle.body.position.x < 300) 
              {
                  score=score+500;      
                  particle=null;
                  if ( count>= 5) gameState ="END";                          
              }


              else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
              {
                    score = score + 100;
                    particle=null;
                    if ( count>= 5) gameState ="END";

              }
              else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                    particle=null;
                    if ( count>= 5)  gameState ="END";

              }      
              
        }
    }
    

   
    
  
 for (var i = 0; i < divisions.length; i++) {
     
    divisions[i].display();
  }
  
}


function mousePressed() {
    if(gameState !== "END") {
        count++;
    particle = new Particle(mouseX, 50, 10, 10);
    }
}




