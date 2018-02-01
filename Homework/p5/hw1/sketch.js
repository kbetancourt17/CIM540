function setup() {
  // put setup code here

createCanvas(600, 600);
background(255,255,255);

}

function draw() {
  // put drawing code here

//eyes
stroke(40,60,70);
fill(40,60,70);
rect(20,20,80,80);

stroke(255,255,255);
fill(255,255,255);
ellipse(65,60,40,60);

stroke(40,60,70);
fill(40,60,70);
rect(160,20,80,80);

stroke(255,255,255);
fill(255,255,255);
ellipse(190,60,40,60);

//nose
stroke(50,30,20);
fill(50,30,20);
triangle(110,100,120,120,150,100);

//mouth
stroke(0,0,0);
fill(0,0,0);
line(70,160,200,160);




}
