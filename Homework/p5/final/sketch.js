
var synthButton;
var kickButton;
var kick;
var bassButton;

var phase;
var speed;
var maxCircleSize;
var numRows;
var numCols;
var numStrands;
var colorA;
var colorB;


var kickState = false;
var synthNote;
var synthState = false;
var bassState = false;
var bass2;
var bassbutton2;
var bass2State = false;
var hiHat;
var hiHatButton;
var hiHatState = false;
var pluck;
var pluckState = false;
var pluckButton;
var synth;
var effects;
var effectsState = false;
var effectsButton;


function setup() {
  createCanvas(500, 500)

  noStroke();

  phase= 0;
  speed = 0.05;
  maxCircleSize = 20;
  numRows = 10;
  numCols = 22;
  numStrands = 3;

  colorA = color('blue');
  colorB = color('red');


  Clock.bpm = 140;
  Clock.timeSignature = '3/4';

  //C3Note = FM({ maxVoices:1, index:15, cmRatio:1.0333 });
  //C3Note.play( ['c3'],[1/2]);
  //C3Note.amp(0);

  kick = XOX('x');
  //drums = XOX('x*ox*xo-');
    kick.play(['x'],1/4);
    kick.amp(0);

    hiHat = XOX('*');
    hiHat.play(['*'],1/20);
    hiHat.amp(0);

  pluck = Pluck().note.seq( Rndi(5,10), 1/8)
    //pluck.note.seq( Rndi[0,5,10], [1/10].rnd() );
    pluck.fx.add( Vibrato(2) );
    pluck.amp(0);


  bass = FM('bass').note.seq([0,5,10],1/8);
    //bass.play(['bass'], 1/8);
    bass.amp(0);

  bass2 = FM('bass').note.seq([.50,.10,.20],1/8);
    //bass.play(['bass'], 1/8);
    bass2.amp(0);

  synthNote = FM('glockenspiel');
    //synth.note.seq( Rndi[0,5,10], [2].rnd() );
    synthNote.amp(0);

    effects = FM('stabs').chord.seq( Rndi(0,5,10),[1/4,1/8].rnd());
    effects.amp(0);

//buttons
kickButton = createButton('Kick Drum');
kickButton.position (400, 225);
kickButton.mousePressed(function(){


  if(kickState == false){
    kickState = true;
  }else{
    kickState = false;
  }


  if(kickState == true){
    console.log("stop");
    kick.amp(1);
  }

  if(kickState == false){
    kick.amp(0);
    console.log("play");
  }

});

hiHatButton = createButton('Hi-Hat');
hiHatButton.position (400, 250);
hiHatButton.mousePressed(function(){


  if(hiHatState == false){
    hiHatState = true;
  }else{
    hiHatState = false;
  }


  if(hiHatState == true){
    console.log("stop");
    hiHat.amp(1);
  }

  if(hiHatState == false){
    hiHat.amp(0);
    console.log("play");
  }

});

pluckButton = createButton('Pluck');
pluckButton.position (400, 325);
pluckButton.mousePressed(function(){


  if(pluckState == false){
    pluckState = true;
  }else{
    pluckState = false;
  }


  if(pluckState == true){
    console.log("stop");
    pluck.amp(1);
  }

  if(pluckState == false){
    pluck.amp(0);
    console.log("play");
  }

});

//synthButton = createButton('Synth');
//synthButton.position(400,350);
//synthButton.mousePressed(function(){


  //if(synthState == false){
    //synthState = true;
  //}else{
    //synthState = false;
  //}


  //if(synthState == true){
    //console.log("stop");
    //synthNote.amp(1);
  //}

  //if(synthState == false){
   //synthNote.amp(0);
    //console.log("play");
  //}

//});

bassButton = createButton('Bass #1');
bassButton.position(400,275);
bassButton.mousePressed(function(){

    if(bassState == false){
      bassState = true;
    }else{
      bassState = false;
    }

    if(bassState == true){
      console.log("stop");
      bass.amp(1);
    }

    if(bassState == false){
     bass.amp(0);
      console.log("play");
    }

});

bass2Button = createButton('Bass #2');
bass2Button.position(400,300);
bass2Button.mousePressed(function(){

    if(bass2State == false){
      bass2State = true;
    }else{
      bass2State = false;
    }

    if(bass2State == true){
      console.log("stop");
      bass2.amp(1);
    }

    if(bass2State == false){
     bass2.amp(0);
      console.log("play");
    }

});

effectsButton = createButton('Effects');
effectsButton.position (400, 350);
effectsButton.mousePressed(function(){


  if(effectsState == false){
    effectsState = true;
  }else{
    effectsState = false;
  }


  if(effectsState == true){
    console.log("stop");
    effects.amp(1);
  }

  if(effectsState == false){
    effects.amp(0);
    console.log("play");
  }

});

}



function draw() {
background(0);

var x = width;
var y = height +sin(phase)* 40;
phase = frameCount * speed;
var sizeOffset = (cos(phase)+ 1)* 0.5;
var circleSize = sizeOffset * maxCircleSize;

for( var strand = 0; strand < numStrands; strand +=1){
  var strandPhase = phase +map(strand, 0, numStrands, 0, TWO_PI);

  for(var col = 0; col< numCols; col +=1){
    var colOffset = map(col, 0, numCols, 0, TWO_PI);
    var x = map(col, 0, numCols, 40, width - 100);

    for( var row = 0; row < numRows; row +=1){
      var y = height/2 + row * 10 + sin(strandPhase + colOffset) * 50;
        var sizeOffset = (cos(strandPhase - (row / numRows) + colOffset) + 1) * 0.5;
        var circleSize = sizeOffset * maxCircleSize;

        fill(lerpColor(colorA, colorB, row / numRows));
        ellipse(x, y, circleSize, circleSize);

      }
    }
  }

}

function mousePressed(){

  colorA = color(random(255), random(255), random(255));
  colorB = color(random(255), random(255), random(255));

}
