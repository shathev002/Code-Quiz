var startButton = document.querySelector("#startButton");
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
var scoreName = document.querySelector("#scoreName");
var highScores = JSON.parse(localStorage.getItem("scores")) || [];
var resultsMenu = document.querySelector("#resultsMenu");
var submitScore = document.querySelector("#submitScore");
var myScore = document.querySelector(".myScore");
var highScoreName = document.querySelector(".highScoreName");
var highScoreInput = document.querySelector(".highScoreInput");
var backBtn = document.querySelector("#backBtn");
var clearBtn = document.querySelector("#clearBtn");
var time = 60;
var timerInterval = '';
var currentPosition = 0;
var score = 0;
highScore.style.display = 'none'
gameMenu.style.display = 'none'
resultsMenu.style.display = 'none'

//myScore.innerText = `Your score: ${score}`;

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

startButton.addEventListener("click",function(event){
  event.preventDefault();
  startMenu.style.display = 'none'
  gameMenu.style.display = 'flex'
  setInterval(timerInterval);
  questionText.innerText = questions[currentPosition].question
  buttonOne.innerText = questions[currentPosition].options[0]
  buttonTwo.innerText = questions[currentPosition].options[1]
  buttonThree.innerText = questions[currentPosition].options[2]
  buttonFour.innerText = questions[currentPosition].options[3]
  

})


choices.addEventListener("click",function(event) {
event.preventDefault();
  if (event.target.innerText === questions[currentPosition].answer) {
    score += 1;
    if (currentPosition !== questions.length - 1 && time > 0) {
      nextQuestion();
      console.log("line 101");
    } else if (currentPosition === questions.length - 1 || time <= 0) {
      showScores();
      console.log("line 104");
    }
   //console.log("question: ", question);
    console.log("score: ", score);
  console.log("currentPosition: ", currentPosition);
console.log("questions.length: ", questions.length);
} else {
  time-=10;
  console.log("currentPosition: ", currentPosition);
  console.log("questions.length: ", questions.length);
  //console.log("question: ", question);
  if (currentPosition !== questions.length - 1 && time > 0) {
    nextQuestion();
    console.log("line 115");
  } else if (currentPosition === questions.length - 1 || time <= 0) {
    showScores();
    console.log("line 117");
  }
  console.log("incorrect");
} 

}

);


function nextQuestion(){
  currentPosition++;
 
  //rewrite h1 and choices with question[currentPosition]
  questionText.innerText = questions[currentPosition].question
  buttonOne.innerText = questions[currentPosition].options[0]
  buttonTwo.innerText = questions[currentPosition].options[1]
  buttonThree.innerText = questions[currentPosition].options[2]
  buttonFour.innerText = questions[currentPosition].options[3]
  

};

//timer

timerInterval = setInterval(countDown, 1000);

function countDown () {
   timer.innerText = time +" seconds";
if (time <= 60) {
  time--;
} else if (currentPosition === questions.length - 1 || time <= 0) {
  clearInterval(timerInterval);
  showScores();
}

};

//scores
function showScores () {
  gameMenu.style.display = 'none'
  resultsMenu.style.display = 'flex'
  myScore.innerText = `Your score: ${score}`;

}

submitScore.addEventListener("click", function() {
  resultsMenu.style.display = 'none'
  highScore.style.display = 'flex'
  saveScore();
  highScoreName.textContent = "Name: " + highScores[0].name;
  highScoreInput.textContent = "Score: " + highScores[0].score;
  console.log(scoreName.value); 
  

});

 
function saveScore () {
  
  var finalScore = {
    name: scoreName.value,
    score: score

  };
  console.log("finalScore", finalScore, typeof finalScore); 
  highScores.push(finalScore);  
  console.log("highScores:", highScores); 
  localStorage.setItem("scores", JSON.stringify(highScores));
}

// return to start menu

backBtn.addEventListener("click", function(event) {
  event.preventDefault();
  highScore.style.display = 'none'
  startMenu.style.display = 'flex'
  time = 60;
  currentPosition = 0;
  
});

// function restart() {
//   nextQuestion();
//   clearInterval(timerInterval);
//   setInterval(timerInterval);
//   };

// Reset the score

clearBtn.addEventListener("click", function(event) {
  event.preventDefault();
  score = 0;
localStorage.removeItem("scores");

});