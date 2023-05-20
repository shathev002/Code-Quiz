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

var questions = [{

  question: "What does DOM stand for?",
  answer: "Document Object Model",
  options: ["Document Object Model", "Document Oriented Module", "Date of Birth", "Database Object Model"]

},{
  question: "What type of loop continues through the code as long as the condition stated stays TRUE?",
  answer: "While Loop",
  options: ["For Loop", "While Loop", "Else Loop", "Conditional Loop"]

}, 

{question: "Which of the following is true about functions?",
answer: "All of the above",
options: ["Code to be executed by the function is put inside curly brackets", "The return statement stops the function from performing indefinitely", 
"Local variables are variables declared within a function", "All of the above"]

}, 


{question: "What element in JavaScript is used to store multiple values in a variable?",
answer: "Arrays",
options: ["Functions", "Variables", "Arrays ", "Strings"]

}, 

{question: "What format is used to store and transport data?",
answer: "JSON",
options: ["HTML", "Syntax", "For loop ", "JSON"]

}

]

//use innerText to fill the timer div

startButton.addEventListener("click",function(event){
  event.preventDefault();
  gameMenu.classList.remove("hide")
  startMenu.classList.add("hide")
  questionText.innerText = questions[currentPosition].question
  buttonOne.innerText = questions[currentPosition].options[0]
  buttonTwo.innerText = questions[currentPosition].options[1]
  buttonThree.innerText = questions[currentPosition].options[2]
  buttonFour.innerText = questions[currentPosition].options[3]
})

choices.addEventListener("click",function(event) {
event.preventDefault();
if(event.target.innerText === questions[currentPosition].answer){
  nextQuestion()
}else{
  time-10;
  nextQuestion();
}


}

//once finish all the questions: All done!

//for( i= 0; i < question.length; i++)

)
function nextQuestion(){

  currentPosition++;
  //rewrite h1 and choices with question[currentPosition]
  questionText.innerText = questions[currentPosition].question
  buttonOne.innerText = questions[currentPosition].options[0]
  buttonTwo.innerText = questions[currentPosition].options[1]
  buttonThree.innerText = questions[currentPosition].options[2]
  buttonFour.innerText = questions[currentPosition].options[3]

}

// if(currentPosition = question.length) {
//   startMenu.classList.remove("hide")
//   highScore.classList.add("hide")
//   } 



function saveScore () {
  var score = {
    name: document.querySelector("#scoreName").value,
    score:time
  }
  highScores.push(score)
  localStorage.setItem("score",JSON.stringify(highScores))
}