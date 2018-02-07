
var backgroundColor = "white";
var centerX= 300;
var centerY =500;

var button;
var button2;

var noseColor= "black";

var sel;
var eyeColor= "black";

function setup() {
  // put setup code here

createCanvas(800, 800);
background(255,255,255);

button= createButton("Click Me");
button.mousePressed(changeBG);
button2= createButton("Red");
button2.mousePressed(function(){

//your code goes here
  noseColor = "red";
});


sel= createSelect();
sel.option("blue");
sel.option("green");
sel.option("brown");

sel.changed(function(){


  eyeColor = sel.value();


});


}



function draw() {
  // put drawing code here

background(backgroundColor);
centerX= mouseX;
centerY = mouseY;


//eye1

var xOffset = map(mouseX, 0, width, -20,20);
var yOffset = map(mouseY,0, height,-20,20);
console.log("xOffset:"+ xOffset+ "yOffset:" + yOffset);


stroke(255,255,255);
fill(eyeColor);
ellipse(centerX- 100 +xOffset, centerY-50 + yOffset,50,50);


//eye2
stroke(40,60,70);
fill(40,60,70);
ellipse(centerX+100+ xOffset, centerY +50+ yOffset,50,50);


//nose
stroke(50,30,20);
fill(noseColor);
triangle(110,110,120,130,150,110);

//mouth
stroke(0,0,0);
fill(0,0,0);
line(70,160,200,160);

stroke(0,0,0);
fill(0,0,0);
line(70,161,200,161);

stroke(0,0,0);
fill(0,0,0);
line(70,162,200,162);

//ears
stroke(50,30,20);
fill(50,30,20);
triangle(250,5,265,40,265,5);

triangle(0,5,15,40,15,5);

}


function mousePressed(){
//way to understand user pressed mouse
backgroundColor= "blue";

}

function mouseReleased(){
backgroundColor = "red";


}

function changeBG(){
noseColor= "green";


}
