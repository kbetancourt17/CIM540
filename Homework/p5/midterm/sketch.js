var centerX = 150;
var centerY = 250;

var posX = 0;
var posY = 0;
var directionY = false;

var startButton;
var startBounce = false;

var water;
var bgImage;



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

  stroke(0);
  fill(255);
  ellipse(width /2, posY, 20, 20);

  }

if(directionY ==false){posY ++;
}else {posY --;
}

if(posY >= height){
  directionY = true;
}

if(posY <= 0){
  directionY = false;
}




}
