//select html elements

//write questions in an array called "myQuestions"

//each question in array will be made of an object with question:; (choice)A:; etc; correct: "A"

var myQuestions = [
    {
        question: "Palmistry—the art of understanding an individual's present personality and predicting his or her future state through the study of the shape, size, and lines of the hands—is an unscientific technique. In a study, most palmists' assertions about the present financial status of the individuals in the sample population were found to be mere intelligent guesses. Which one of the following is an assumption necessary to the argument?",
        A: "Individuals with the same financial status usually do not have a similar personality.",
        B: "There is a stable correlation between an individual's personality and his or her financial status.",
        C: "Palmistry is an effective means of predicting how personalities of individuals evolve over the long term.",
        D: "There are numerous other methods for understanding the personality of an individual that are more precise than palmistry.",
        E: "The financial future of a person is one of the most important concerns that palmists address.",
        correct: "B"
    }
    {
        question: "Each year, the number of students caught copying in examination is nearly the same as the number of students caught driving without a valid driving license and the number of students caught traveling without a valid ticket. Therefore, the outcry about copying in examination ought to be put to rest, as the act of copying in examination is in fact almost as mundane as the acts of driving without a valid driving license or traveling without a valid ticket. Which one of the following, if true, would most effectively undermine the author's argument?",
        A: "Although the number of students caught driving without a valid driving license each year is very small, the total number of incidences of students traveling without a valid ticket is many times greater.",
        B:
        C:
        D:
        E:
        correct:
    }
    {
        question:
        A:
        B:
        C:
        D:
        E:
        correct:
    }
    {
        question:
        A:
        B:
        C:
        D:
        E:
        correct:
    }
    {
        question:
        A:
        B:
        C:
        D:
        E:
        correct:
    }
    {
        question:
        A:
        B:
        C:
        D:
        E:
        correct:
    }
    {
        question:
        A:
        B:
        C:
        D:
        E:
        correct:
    }
    {
        question:
        A:
        B:
        C:
        D:
        E:
        correct:
    }
    {
        question:
        A:
        B:
        C:
        D:
        E:
        correct:
    }
    {
        question:
        A:
        B:
        C:
        D:
        E:
        correct:
    }
]

//event listeners for button clicks

//create var timer = 500 i guess probably more tbh

//timer should decrement every second

//create var for lastQuestionIndex which equals (myQuestions.length - 1)

//create var for runningQuestionIndex equal to 0

//make function renderQuestion where var q = questions[runningQuestionIndex]

//in function renderQuestion, have qImg.innerHTML = "<img src = " + q.imgSrc + ">" to put HTML of question in

//" question.innerHTML = "<p>" + q.question + "</p>"

//" choiceA.innerHTML = q.choiceA etc

//when runningQuestionIndex = 0, first question will render when function is run; to render subsequent questions, increment runningQuestionIndex++

//to check answer, make function checkAnswer(answer)

//in checkAnswer function, set up if/else where if(questions[runningQuestionIndex].correct == answer) and result is next question

//in checkAnswer function, else will be timer - 10 or something

//to run through the questions, in checkAnswer function set another if/else

//if(runningQuestionIndex < lastQuestionIndex) then count = 0; runningQuestionIndex++; questionRender();

//else end quiz and display score

//make input box to submit user score

//make array to contain highScores

//make var userScore to save user's high score as an object pair of name and score

//append userScore to highScores

//use JSON.stringify(highScores) to set item to local storage

//use JSON.parse(highScores) to retrieve object from local storage

//use .textContent to make high scores visible in div #quiz