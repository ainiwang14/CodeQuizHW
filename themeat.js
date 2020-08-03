//select html elements

var start = document.getElementById("btn");
var quizContent = document.getElementById("quizContent");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var choiceE = document.getElementById("E");
var timer = document.getElementById("time");
var score = document.getElementById("score");

//write questions in an array called "myQuestions"

//each question in array will be made of an object with question:; (choice)A:; etc; correct: "A"

var myQuestions = [
    {
        question: "Lecturer: There are many benefits to connecting everyday objects like cars and home appliances to the internet to enable their owners to manage them remotely. But beware of doing so! With the rising number and variety of devices connected to it, the internet is becoming more complex and, consequently, more prone to security breaches by hackers. The consequences of a security breach are much graver with an internet-connected car or home appliance than with an internet-connected computer and might even include a risk to the life of the owner of these objects. Which one of the following most accurately expresses the main conclusion of the lecturer's argument?",
        A: "The gravity of the consequences suffered by the owner of an internet-connected car or home appliance in the event of a security breach outweighs the benefits that these devices offer.",
        B: "Owners of cars and home appliances should be cautious and alert to the dangers of connecting these objects to the internet.",
        C: "A security breach of a car or home appliance that is connected to the internet can be much more dangerous than a security breach of an internet-connected computer.",
        D: "The vulnerability of the internet to security breaches is directly proportional to the number and variety of the devices connected to the internet.",
        E: "The increasing connection of everyday objects such as cars and home appliances to the internet in the recent years has increased the overall vulnerability of the internet to security breaches.",
        correct: "B",
    },
    {
        question: "Each year, the number of students caught copying in examination is nearly the same as the number of students caught driving without a valid driving license and the number of students caught traveling without a valid ticket. Therefore, the outcry about copying in examination ought to be put to rest, as the act of copying in examination is in fact almost as mundane as the acts of driving without a valid driving license or traveling without a valid ticket. Which one of the following, if true, would most effectively undermine the author's argument?",
        A: "Although the number of students caught driving without a valid driving license each year is very small, the total number of incidences of students traveling without a valid ticket is many times greater.",
        B: "The punishments upon being caught copying in examination are graver than those upon being caught driving without a valid driving license or traveling without a valid ticket.",
        C: "Fewer students would take their chances with driving without a valid driving license and traveling without a valid ticket than with copying in examination.",
        D: "Cheating in general—including copying in examination—is more prevalent than driving without a valid driving license.",
        E: "The prevalence of wrongdoings such as copying in examination, driving without a valid driving license or traveling without a valid ticket among students is inversely proportional to their probability of getting caught.",
        correct: "B",
    },
    {
        question: "If Amy were a tall and fair actress from the mainstream film industry, she would have won the best actress award. She is not a tall and fair actress since she has not won the best actress award. The previous conclusion is flawed because the author does not consider that Amy could",
        A: "have won an award for scriptwriting",
        B: "be a singer from the mainstream film industry",
        C: "be a tall and fair actress from a non-mainstream film industry",
        D: "be an actress belonging to a mainstream theatre group",
        E: "have won an award for some other mainstream work",
        correct: "C",
    },
    {
        question: "This year, the cotton crop in Alabama has been attacked by a new, hardy variety of bollworm that is resistant to all known pesticides. Due to this, the cotton production of the state has declined by 40 percent this year. Since this bollworm variety reproduces rapidly, it is likely to spread through all cotton-producing states of the United States by the next year and, therefore, we can expect a decline of at least 40 percent in the amount of cotton produced in the country next year. Which one of the following, if true, most weakens the argument?",
        A: "Many other crops in Alabama too have been attacked by this bollworm variety this year.",
        B: "The natural predators of this bollworm variety are not able to survive in Alabama while cotton-farms in other cotton-producing states have large populations of these predators.",
        C: "Ninety-five percent of all cotton produced in the United States is of the Upland variety, which is also the only variety of cotton that is grown in Alabama.",
        D: "The domestic prices of cotton are not likely to increase next year as the United States will be able to meet its domestic demand for cotton through imports.",
        E: "Agricultural scientists in the United States are making a massive effort to soon develop a variety of genetically-modified cotton that is resistant to this bollworm variety.",
        correct: "B"
    },
    {
        question: "A metropolitan area that has a population of more than 10 million and a population density of more than 2000 people per square kilometer is termed a megacity. Among the metropolitan areas of the United States, X and Z are megacities but Y is not. If the statements prior are true, each of the following statements must also be true EXCEPT:",
        A: "Y is a metropolitan area with a population density of less than 2000 people per square kilometer.",
        B: "X is a metropolitan area with a population density of more than 2000 people per square kilometer.",
        C: "Z is a metropolitan area with a population of more than 10 million.",
        D: "X is a metropolitan area with a population of more than 10 million.",
        E: "At least some metropolitan areas of the United States have a population density of more than 2000 people per square kilometer.",
        correct: "A",
    },
    {
        question: "A test that examines people on their memory capacity for spatial layouts has placed Jason in the top 1 percentile of all test-takers. We can conclude from this that his memory capacity for things that do not involve spatial layouts will be below average. The conclusion follows logically if which one of the following is assumed?",
        A: "Jason tried hard to remember spatial layouts.",
        B: "Jason has a greater proclivity to remember spatial layouts than most people.",
        C: "It is possible for Jason to improve, through practice and effort, his memory capacity for things that do not involve spatial layouts.",
        D: "The total memory capacity of the human brain is fixed and equal for all people.",
        E: "Some people have a greater memory capacity than others.",
        correct: "D",
    },
    {
        question: "Movies that contain persistent violence are usually given R rating. R rated movies can be viewed in a theater by a child or an under-17 adolescent only in the company of a parent or an adult guardian. Mr. Smith and Mr. Green are two directors whose every movie has been given an R rating, while only some of Ms. Abbott's movies are R rated. Which one of the following logically follows from the statements prior, if they are true?",
        A: "The movies made by female directors are more often viewed alone in the theaters by children or under-17 adolescents than the movies made by male directors.",
        B: "An under-17 adolescent cannot view a movie of Mr. Green by himself in a theater.",
        C: "No movie of Mr. Smith can be viewed by a child or an under-17 adolescent in a theater.",
        D: "A child is more likely to view a movie made by Ms. Abbott in a theater than a movie made by Mr. Green.",
        E: "Some of Ms. Abbott's movies do not contain persistent violence.",
        correct: "B",
    },
    {
        question: "Arguing for the acquittal of his client from the charge of murdering the client's wife, the attorney reasoned that since neither the garage nor the main door of the client's home was bolted on the night of the murder, a thief must have trespassed on the home to steal valuables, and upon an unexpected confrontation with the client's wife, murdered her. The flawed pattern of reasoning in the argument above is most similar to that in which one of the following?",
        A: "The city administration could not find a solution to either water shortage or waterlogging problems; thus, it had to eat a humble pie and publicly accept responsibility for its lackluster approach.",
        B: "Due to the work strike of railroads and the non-availability of sufficient buses during the rush hours – the only two modes of transport used by John, he may have faced a hard time commuting during the rush hours.",
        C: "In a 100-meter race, two of Amy's co-participants won Silver and Bronze and she performed exceedingly well; it follows that Amy won Gold.",
        D: "The evidence collected reveals that the financial fraud was executed by neither one nor all the team members. Therefore, it can be concluded that it was executed by either some team members or a third party.",
        E: "In an annual test of Midland high school students, the average score of neither the boys nor the girls is more than 50; thus, the average score of the total students is not more than 50.",
        correct: "C",
    },
    {
        question: "Astragalus linifolius, a rare plant species that is found only in the Colorado region of the United States, reproduces when a pollinating agent like a fly or a bee carries the pollen grain from the male part of one plant to the female part of another plant of the same species. To maintain the population of this species, the use of pesticides that control grasshoppers should be banned in this region. These pesticides also often result in significant mortality among the Bombylius flies that are the most important pollinating agents of A. linifolius. Which one of the following, if true, most strengthens the argument?",
        A: "A. linifolius has a short life-span.",
        B: "A. linifolius is also pollinated, though to a much-lesser degree, by some local species of bees.",
        C: "The pesticides that control insect herbivores other than grasshoppers are even more toxic to Bombylius flies.",
        D: "Bombylius flies do not reproduce very fast and their populations do not recover for many years after one spraying of a pesticide that controls grasshoppers.",
        E: "The populations of some other plant species in the Colorado region have decreased to an even greater extent than the population of A. linifolius since the spraying of pesticides that control grasshoppers first started in the region.",
        correct: "D",
    },
    {
        question: "Palmistry—the art of understanding an individual's present personality and predicting his or her future state through the study of the shape, size, and lines of the hands—is an unscientific technique. In a study, most palmists' assertions about the present financial status of the individuals in the sample population were found to be mere intelligent guesses. Which one of the following is an assumption necessary to the argument?",
        A: "Individuals with the same financial status usually do not have a similar personality.",
        B: "There is a stable correlation between an individual's personality and his or her financial status.",
        C: "Palmistry is an effective means of predicting how personalities of individuals evolve over the long term.",
        D: "There are numerous other methods for understanding the personality of an individual that are more precise than palmistry.",
        E: "The financial future of a person is one of the most important concerns that palmists address.",
        correct: "B"
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

function renderQuestion() {
    var runningQuestionIndex = myQuestions.length - 1;
    runningQuestionIndex = 0;
    var q = questions[runningQuestionIndex];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    choiceE.innerHTML = q.choiceE;
    runningQuestionIndex++;
}



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