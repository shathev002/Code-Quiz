var starButton = document.querySelector("#startButton");
var buttonOne = document.querySelector("#button1");
var buttonTwo = document.querySelector("#button2");
var buttonThree = document.querySelector("#button3");
var buttonFour = document.querySelector("#button4");
var startMenu = document.querySelector("#startMenu");
var gameMenu = document.querySelector("#gameMenu");
var timer = document.querySelector("#timer");
var questionText = document.querySelector("#questionText");
var choices = document.querySelector("#choices");
var highScore = document.querySelector("#highScoreMenu");
var scoreTable = document.querySelector("#scoreTable");

var highScores = JSON.stringify(localStorage.getItem("scores")) || []

var time = 60;

var currentPosition = 0;

var question = [{

  question: "What does DOM stand for?",
  answer: "Document Object Model",
  options: ["Document Object Model", "choice", "choice", "choice"]

},{

  question: "What is javascript?",
  answer: "a programming language",
  options: ["a programming language", "choice", "choice", "choice"]

}]

//use innerText to fill the timer div

startButton.addEventListener("click",function(event){
  event.preventDefault();
  gameMenu.classList.remove("hide")
  startMenu.classList.add("hide")
  questionText.innerText = question[currentPosition].question
  buttonOne.innerText = question[currentPosition].options[0]
  buttonTwo.innerText = question[currentPosition].options[1]
  buttonThree.innerText = question[currentPosition].options[2]
  buttonFour.innerText = question[currentPosition].options[3]
})

choices.addEventListener("click",function(event) {
event.preventDefault();
if(event.target.innerText === question[currentPosition].answer){
  nextQuestion()
}else{
  time-10;
  nextQuestion();
}


}
)
function nextQuestion(){
  currentPosition++
  //rewrite h1 and choices with question[currentPosition]
  questionText.innerText = question[currentPosition].question
  buttonOne.innerText = question[currentPosition].options[0]
  buttonTwo.innerText = question[currentPosition].options[1]
  buttonThree.innerText = question[currentPosition].options[2]
  buttonFour.innerText = question[currentPosition].options[3]
}

function saveScore () {
  var score = {
    name: document.querySelector("#scoreName").value,
    score:time
  }
  highScores.push(score)
  localStorage.setItem("score",JSON.stringify(highScores))
}