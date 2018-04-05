var song;
var bgImage;
var rainbow;
var mySound;

function preload(){
  soundFormats('mp3', 'ogg');
  mySound = loadSound('assets/song.mp3');
  rainbow = loadImage("assets/water.jpg");
};

function setup(){

  createCanvas(300,400);
  bgImage = rainbow;
  rainbow.resize(300,400);

  mySound.setVolume(0.3);
  mySound.play();

};

function draw(){
  background(255);
  image(bgImage,0,0);

};
