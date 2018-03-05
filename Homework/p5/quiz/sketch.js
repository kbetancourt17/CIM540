var questions = ["Is Iceland covered in ice?", "What ocean lies to the East of the US?"];
var options = [["true", "false"], ["Pacific", "Eastern", "Indian", "Atlantic"]];
var answers = ["false", "Atlantic"];

var answer = "";
var currentQuestion = 0;

var currentOption = -1;

function setup(){

  createCanvas(400,400);
  //console.log(options[0].length);
}

function draw(){

  background(255);

  text(questions[currentQuestion], 20, 100);

  for(var i = 0; i < options[currentQuestion].length; i ++){
    //console.log(options[currentQuestion][i]);
      text(options[currentQuestion][i], 10 + (100*i), 200);
      var currentDist = dist(mouseX, mouseY, 30 + (100*i),200);

      if(currentDist < 20){
        currentOption = i;
        text("Your current option is:" + options[currentQuestion][currentOption], 20, 120);

      }
  }

text(answer, 20, 150);
}

function mousePressed(){
  if(options[currentQuestion][currentOption] == answers[currentQuestion]){
  console.log("Correct");
  currentQuestion++;
  if(currentQuestion >= questions.length){
    currentQuestion = 0

  }
  answer = "Correct";
    }else{
    console.log("Try again");

    answer = "Try again";
}


  }
