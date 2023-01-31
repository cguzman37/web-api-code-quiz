console.log("hello");
var startBtn = document.querySelector("#start");
var timerSpan = document.querySelector("#timer");
var timer = 75;

startBtn.addEventListener("click", function() {questions();
    alert("start")
    var quizTimer = setInterval(function () {
        timer --;
        timerSpan.textContent = timer;
        if(timer ===0){
           clearInterval(quiztimer) 
        }
        
    }, 1000)
})
var questions =[
    {
        question: "Commonly use data types DO NOT Include:",
        answers:{
            1: 'strings',
            2: 'booleans',
            3: 'alerts',
            4:'numbers'
        },
        correctAnswer: '3'
    },
    {
        question: "Arrays in JavaScript can be used to store____.",
        answers:{
            1: 'numbers and strings',
            2: 'other arrays',
            3: 'booleans',
            4:'all of the above'
        },
        correctAnswer: '4'  
    },
    {
        question: "The condition if/Else statement is enclosed within",
        answers:{
            1: 'parathesis',
            2: 'curly brackets',
            3: 'quotes',
            4:'square brackets'
        },
        correctAnswer: '1'  
    },
    {
        question: "What symbol is the id attribute?",
        answers:{
            1: '$',
            2: '@',
            3: '#',
            4:'!'
        },
        correctAnswer: '3'  
    }
]
    function name(params) {
        
    }
    
