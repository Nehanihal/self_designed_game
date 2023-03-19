var bkimg
var heliImg1,heli
var heliImg2
var bk
var help1,help2,help3,help4
var aid
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var con;
let engine;
let world;
function preload(){

bkimg=loadImage("FLOODBAKG.jpg")

heliImg1=loadImage("helinew1.jpg")
heliImg2=loadImage("helinew2.png")
aidImg=loadImage("FIRSTTAID.jpg")

help1=loadImage("help1.png")
help2=loadImage("help2.png")
help3=loadImage("help3.png")
help4=loadImage("help4.png")
}




function setup(){
createCanvas=(windowWidth,windowHeight)

bk=createSprite(450,200)

heli=createSprite(400,100)
heli.addImage(heliImg1)
heli.addImage(heliImg2)

heli.scale=0.3

engine = Engine.create();
  world = engine.world;

  con=Matter.Constraint.create({
    bodyA:heli,
    pointA:{x:0,y:0},
    bodyB:ball,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.1
  })
}



function draw(){
background("white")
image(bkimg,0,0,width+100,height+100)

if(keyDown(LEFT_ARROW)){
heli.x=heli.x-3
heli.changeImage(heliImg1)

}
if(keyDown(RIGHT_ARROW)){
  heli.x=heli.x+3
  heli.changeImage(heliImg2)
}
line(heli.position.x,heli.position.y,aid.position.x,aid.position.y)

spawnObstacles()


drawSprites()
}



function spawnObstacles(){
  if(frameCount%100===0){

  

  var help=createSprite(300,350,100,100)
  var rand=Math.round(random(1,4))
  switch(rand){
    case 1:help.addImage(help1)
    help.x=450
    help.velocityX=-0.5
    help.scale=0.2
  break
  case 2: help.addImage(help2)
  help.x=450
    help.velocityX=-0.5
  help.scale=0.2
  break
  case 3:help.addImage(help3)
  help.x=0
    help.velocityX=+0.2
  help.scale=0.2
  break
  case 4: help.addImage(help4)
  help.x=450
  help.velocityX=-0.5
  help.scale=0.3

  break
  }

  
}}
