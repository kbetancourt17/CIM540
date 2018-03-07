var centerX = 150;
var centerY = 250;

var water;
var bgImage;
var imageSize = 400;

function preload() {
  water = loadImage("assets/water.jpg");
  
}

function setup(){

createCanvas(300,400);
bgImage = water;
water.resize(300,400);

}

function draw(){

background(255)
image(bgImage,0,0);

stroke(0)
fill(255)
ellipse(centerX, centerY +100, 30, 30);






}
