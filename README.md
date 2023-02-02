# web-api-code-quiz
# Description
This website was created to have users take a quiz based off of javascript and they can see their high score in the console log.They are timed while taking the quiz and whenever they are finished and submit their name they time gets recorded.

# Link
https://cguzman37.github.io/web-api-code-quiz/

# Image
./web-api-code-quiz/Screenshot 2023-01-27 at 7.49.38 PM.png alt
/Users/cynthiaguzman/Desktop/bootcamp/Challenges/code-quiz/web-api-code-quiz/Screenshot 2023-02-01 at 10.47.23 PM.png
# Resources

Worked in study group with Tim Smith and Jack Kelly
Sam TA's psuedo code 
<!-- //click button to start
    //event listener
    //a timer will start
//user is presented with a question
//user selects one multiple choice question
    //IF answer is wrong, decrement the timer
        //Display that the user choice was incorrect, then move to next question
    //IF answer is correct
        //Display that the user choice was correct(textContent)
        //Increment the score++
    //FOR loop to loop through the questions array
//When timer hits 0 OR no more questions in array
    //THEN clear interval
    //THEN allow user to input initials
    //THEN link to highscores page(two separate HTML pages, index.html and hiscores.html)
    //Save data to local storage(setItem, getItem)

//startQuiz() function changes content
    //hide the start screen
    //unhide the questions section
    //start the timer
    //show the starting time
    //call getQuestion()
//getQuestion() function get current question object from questions array
    //change content of the page
    //getElementbyId, change textContent
    //loop over choices create a button for each choice
    //after creating all the elements we appendChild
//questionClick() function that checks choice user clicked
    //first we check that the event.target matches an answer choice
    //check event.target.value matches the questions[currentIndex].answer

    var questions = [
        {
            question: "What does HTML stand for?",
            choices: ["Hyper text Martian language", "Hyper text markup language"],
            answer: "Hyper text markup language",
        },
        {
            question: "What does CSS stand for?",
            choices: ["Cats stay sleeping", "Cascading style sheets"],
            answer: "Cascading style sheets",
        }
    ] -->
