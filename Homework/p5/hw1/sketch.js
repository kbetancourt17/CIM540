
var centerX = 400;
var centerY= 600;

var button1;

var noseColor= "black";

var sel;
var eyeColor= "black";

function setup() {
  // put setup code here

createCanvas(800, 800);
background(255,255,255);

button1= createButton("Red");
button1.mousePressed(function(){

//your code goes here
  noseColor = "red";
});

//option buttons
sel= createSelect();
sel.option("blue");
sel.option("green");
sel.option("red");

sel.changed(function(){


  eyeColor = sel.value();


});

}

function draw() {
  // put drawing code here

//console.log("mouseX:" + mouseX);


//doesnt work- the variable was declared in setup, not in the
//draw scope
//console.log(addNumber);


//righteye
stroke(40,60,70);
fill(40,60,70);
rect(centerX+ 90,centerY-500,100,90);

stroke(255,255,255);
fill(eyeColor);
ellipse(centerX+140,centerY-455,50,75);

stroke(0,0,0);
fill(0,0,0);
ellipse(centerX+140,centerY-457,30,30);

//lefteye
stroke(40,60,70);
fill(40,60,70);
rect(centerX-90,centerY-500,100,90);

stroke(255,255,255);
fill(eyeColor);
ellipse(centerX-40,centerY-455,50,75);

stroke(0,0,0);
fill(0,0,0);
ellipse(centerX-40,centerY-457,30,30);

//nose
stroke(50,30,20);
fill(noseColor);
triangle(centerX+70,centerY-380,centerX+20,centerY-380,centerX+40,centerY-360);

//mouth
stroke(0,0,0);
fill(0,0,0);
strokeWeight(5)
line(centerX+130,centerY-320,centerX-20,centerY-320);

//ears

stroke(50,30,20);
fill(50,30,20);
triangle(centerX-120,centerY-500,centerX-140,centerY-500,centerX-130,centerY-480);

triangle(centerX+240,centerY-500,centerX+220,centerY-500,centerX+230,centerY-480);

}

function changeBG(){
noseColor= "green";


}
