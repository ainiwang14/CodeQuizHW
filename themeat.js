//select html elements

//write questions in an array called "myQuestions"

//each question in array will be made of an object with question:; imgSrc:; choiceA:; etc; correct: "A"

//event listeners for button clicks

//create var timer = 100 i guess

//create var for lastQuestionIndex which equals (myQuestions.length - 1)

//create var for runningQuestionIndex equal to 0

//make function renderQuestion where var q = questions[runningQuestionIndex]

//in function renderQuestion, have qImg.innerHTML = "<img src = " + q.imgSrc + ">" to put HTML of question in

//" question.innerHTML = "<p>" + q.question + "</p>"

//" choiceA.innerHTML = q.choiceA etc

//when runningQuestionIndex = 0, first question will render when function is run; to render subsequent questions, increment runningQuestionIndex++

//to check answer, make function checkAnswer(answer)

//in checkAnswer function, set up if/else where if(questions[runningQuestionIndex].correct == answer) and result is next question

//in checkAnswer function, else will be score - 10 or something

//to run through the questions, in checkAnswer function set another if/else

//if(runningQuestionIndex < lastQuestionIndex) then count = 0; runningQuestionIndex++; questionRender();

//else end quiz and display score