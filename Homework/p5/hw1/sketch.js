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

stroke(0,0,0);
fill(0,0,0);
ellipse(67,55,20,20);

stroke(40,60,70);
fill(40,60,70);
rect(160,20,80,80);

stroke(255,255,255);
fill(255,255,255);
ellipse(190,60,40,60);

stroke(0,0,0);
fill(0,0,0);
ellipse(192,55,20,20);

//nose
stroke(50,30,20);
fill(50,30,20);
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
