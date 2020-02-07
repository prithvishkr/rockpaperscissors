let input;
let buton;
let video;
let classisfier;
let user;

function preload() {
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/mG4CuF5N/model.json');
}

function setup() {
  createCanvas(400, 400);
  input = createInput('');
  button = createButton('ENTER!');
  
  button.mousePressed(myfunction);
  background(0);
  
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  image(video, 0, 0);
  classifyVideo();
}

function myfunction() {
  // var user = getInput()
  var computer, ran
  
  ran = Math.ceil(Math.random() * 3)
  
  if (ran == 1) {
    computer = 'rock'
  } else if (ran == 2) {
    computer = 'paper'
  } else {
    computer = 'scissors'
  }
  
  check(computer, user)
}
// Function to find out wheather you win/lose/draw.
function check(computer, user) {
  var result
  
  if (computer == 'rock' && user == 'rock') {
    result = 'draw'
  } 
  else if(computer == 'rock'&& user == 'paper') {
    result = 'win'
  } 
  else if(computer == 'rock' && user == 'scissors') {
    result = 'lose'
  }
  else if (computer == 'paper' && user == 'rock') {
    result = 'lose'
  } 
  else if(computer =='paper' && user == 'paper') {
    result = 'draw'
  } 
  else if(computer == 'paper' && user == 'scissors') {
    result = 'win'
  }
  else if (computer == 'scissors' && user == 'rock') {
    result = 'win'
  }
  else if(computer =='scissors' && user == 'paper') {
    result = 'lose'
  }
  else {
    result = 'draw'
  }
  console.log('Computer choose ' + computer + '. You chose ' + user)
  console.log('You ' + result)
  
  showResult(computer, user, result);
}

function getInput() {
  return input.elt.value.trimRight();
}

function showResult(computer, user, result) {
  background(0);
  
  textSize(32);
  fill(255);
  text('Computer chose '+ computer , 10, 300);
  text('You chose '+ user , 10, 335);
  fill(0, 102, 153);
  text('You '+ result , 10, 380);
}

function classifyVideo() {
  classifier.classify(video, (err, res) => user = res[0].label);
}
