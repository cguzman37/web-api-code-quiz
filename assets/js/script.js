console.log("hello");
var startBtn = document.querySelector("#start");
var timerSpan = document.querySelector("#timer");
var timer = 75;
var quizContainer = document.querySelector("#quizC");
var questionEl= document.querySelector("#questionEl");
var questionCounter= 0;
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");
var form = document.querySelector("#form");
var input = document.querySelector("#input");
var highScore =[];
startBtn.addEventListener("click", function () {

    var gameTimer = setInterval(function () {
        timer--;
        timerSpan.textContent = timer;
        if (timer === 0) {
            clearInterval(gameTimer)
        }

    }, 1000)
    getQuestion();
})


   function getQuestion(){
questionEl.textContent= questions[questionCounter].question
choice1.textContent=questions[questionCounter].answers[0]
choice2.textContent=questions[questionCounter].answers[1]
choice3.textContent=questions[questionCounter].answers[2]
choice4.textContent=questions[questionCounter].answers[3]
//add time increments/dec/

questionCounter++
if (questionCounter==questions.length){
    showResults()
}
   }
choice1.addEventListener("click", getQuestion)
choice2.addEventListener("click", getQuestion)
choice3.addEventListener("click", getQuestion)
choice4.addEventListener("click", getQuestion)

   function showResults(event){
    event.preventDefault();
console.log(timer)
var user= input.value
console.log(user)
highScore.push({
    initials:user,
    score:timer
})
localStorage.setItem("highscores",JSON.stringify(highScore))
   }
form.addEventListener("submit", showResults)
//create html with it's own js
//have button to take you to that html
//that html js will render scores

    //hiding/display and true/false beginning and ending quiz