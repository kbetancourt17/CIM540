var centerX = 150;
var centerY = 250;

var posX = 0;
var posY = 0;
var directionY = false;

var startButton;
var startBounce = false;

var water;
var bgImage;
var score =0;

var catchFish1;
var hiding1 = false;

var catchFish2;
var hiding2 = false;

var catchFish3;
var hiding3 = false;




function preload() {
  water = loadImage("assets/water.jpg");

}

function setup(){

createCanvas(300,400);
bgImage = water;
water.resize(300,400);

startButton = createButton("Start");
startButton.position(300,500);
startButton.mousePressed(function (){
  posY = 0;
  if (startBounce == false){
    startBounce = true;
  }else{
    startBounce = false;
  }


  catchFish1 = createButton("Catch Fish #1");
  catchFish1.position(10,520);
  catchFish1.mousePressed(function(){


    if(hiding1 == false){
      hiding1 = true;
    }else{
      hiding1 = false;
    }});

  catchFish2 = createButton("Catch Fish #2");
  catchFish2.position(100,520);
  catchFish2.mousePressed(function(){


    if(hiding2 == false){
      hiding2 = true;
    }else{
      hiding2 = false;
    }});

    catchFish3 = createButton("Catch Fish #3");
    catchFish3.position(190,520);
    catchFish3.mousePressed(function(){


      if(hiding3 == false){
        hiding3 = true;
      }else{
        hiding3 = false;
      }});


});


}

function draw(){

background(255);
image(bgImage,0,0);

centerX= mouseX;
centerY = mouseY;


stroke(120,100,180);
fill(120,100,180);
ellipse(centerX, 350, 30, 40);


stroke(120,100,180);
fill(120,100,180);
triangle(centerX, 360,centerX- 20, 385,centerX+ 20, 385);

if (startBounce == true){

if(hiding1 == false){
  fill(255, 255, 255);
  stroke(60,100,120);
  fill(60,100,120);
  ellipse(width/2 -100, posY, 20, 20)};

if(hiding3 == false){
  fill(255, 255, 255);
  stroke(60,100,120);
  fill(60,100,120);
  ellipse(width/2 + 100, posY, 20, 20)};

  if(hiding2 == false){
  fill(255, 255, 255);
  stroke(60,100,120);
  fill(60,100,120);
  ellipse(width /2, posY, 20, 20)};


  }

if(directionY == false){posY ++;
}else {posY --;

}


if(posY >= height){
  directionY = true;

}

if(posY <= 0){
  directionY = false;

}

if(posY >= 350){
directionY = true
}


}
