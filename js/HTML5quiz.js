var questions = [
    {
        "question": "_____________is the replacement for cookies in HTML5.",
        "option1": "Java scripts",
        "option2": "Web beacons",
        "option3": "Local Storage",
        "option4": "All of the above",
        "answer": "3"
    },
    {

        "question": "___________is not a HTML5 tag.",
        "option1": "<source>",
        "option2": "<video>",
        "option3": "<slider>",
        "option4": "All of the above",
        "answer": "3"
    },
    {
        "question": "Which browsers does the HTML5 supports?",
        "option1": "Firefox",
        "option2": "Safari",
        "option3": "Internet Explorer",
        "option4": "All the mentioned above",
        "answer": "4"
    },
    {

        "question": " The new form elements are introduced in HTML5 is -",
        "option1": "2",
        "option2": "3",
        "option3": "4",
        "option4": "6",
        "answer": "2"
    },
    {

        "question": "<audio> tag is used for audio in HTML5.",
        "option1": "True",
        "option2": "False",
        "answer": "1"
    },
    {

        "question": "Which of the following element does not support autofocus attribute?",
        "option1": " <input>",
        "option2": "<base>",
        "option3": "<select>",
        "option4": "both 1 & 2",
        "answer": "2"
    },
    {

        "question": " _____________ is not a Boolean attribute.",
        "option1": " Formvalidate",
        "option2": "Formtarget",
        "option3": "Novalidate",
        "option4": "None of these",
        "answer": "2"
    },
    {

        "question": " Which of the following element is used for or styling HTML5 layout?",
        "option1": "CSS",
        "option2": "PHP",
        "option3": "JavaScript",
        "option4": "jQuery",
        "answer": "3"
    },
    {

        "question": " _____________feature was already introduced before HTML5.",
        "option1": " Video",
        "option2": "Canvas/SVG",
        "option3": "Frames",
        "option4": "All of the above",
        "answer": "3"
    },
    {

        "question": "______________ is the correct syntax of doctype in HTML5.",
        "option1": "</doctype html>",
        "option2": "<doctype html!>",
        "option3": "<!doctype html>",
        "option4": "All of the above",
        "answer": "3"
    },
];

var question = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");

question.innerHTML = questions[0].question;
option1.innerHTML = questions[0].option1;
option2.innerHTML = questions[0].option2;
option3.innerHTML = questions[0].option3;
option4.innerHTML = questions[0].option4;


function func1() 
{
    document.getElementById("nextButton").disabled = false;
}

var val = document.querySelector("input[name='option']");
if (val.checked === false) 
{

}

var i = 0;
var correct = 0;
var wrong = 0;
var ans = document.getElementById("ans");
function next() 
{
    var val = document.querySelector("input[name='option']:checked");
    if (val === null) 
    {
        alert("Select anyone");
    }
    else {
        if (questions[i].answer === val.value) 
        {
            correct++;
            ans.innerHTML = "Right";
        }
        else 
        {
            wrong++;
            ans.innerHTML = "Wrong";
        }
        if (questions.length - 1 === i) 
        {
            var score = correct * 10;
            document.getElementById("quizContainer").style.display = "none";
            document.getElementById("resultContainer").style.display = "block";
            document.getElementById("score").innerHTML = "Your score is " + score + "%";
            document.getElementById("correct").innerHTML = "Number of correct answers = "+correct;
            document.getElementById("wrong").innerHTML = "Number of wrong answers = " + wrong;
            var remarks = document.getElementById("remarks");
            var scoreAns = document.getElementById("scoreAns");
            if (score >= 60) 
            {
                scoreAns.className += " btn-success";
                remarks.innerHTML = "Congratulations! You passed this quiz <i class='fa fa-child'></i>";
            }
            else if (score < 60)
            {
                scoreAns.className += " btn-danger";
                remarks.innerHTML = "Bad! You are failed in this quiz &#9785;";
            }
        }
        else 
        {
            document.querySelector("input[name='option']:checked").checked = false;
            i++;
            question.innerHTML = questions[i].question;
            option1.innerHTML = questions[i].option1
            option2.innerHTML = questions[i].option2;
            option3.innerHTML = questions[i].option3;
            option4.innerHTML = questions[i].option4;
        }
    }

}
/* Quiz Timer */
var min = 4;
var sec = 60    ;
var timer;

function quizTimer() 
{
    sec--;
    if (sec === 0) 
    {
        sec = 59;
        min--;
    }
    document.getElementById("timer").innerHTML = min + ":" + sec + " <i class='fa fa-clock-o'></i>";
    if (sec <= 1 && min <= 0) 
    {
        var score = correct * 10;
        document.getElementById("quizContainer").style.display = "none";
        document.getElementById("resultContainer").style.display = "block";
        document.getElementById("score").innerHTML = "Your score is " + score + "%";
        document.getElementById("correct").innerHTML = "Number of correct answers = " + correct;
        document.getElementById("wrong").innerHTML = "Number of wrong answers = " + wrong;
        var remarks = document.getElementById("remarks");
        var scoreAns = document.getElementById("scoreAns");
        if (score >= 60) 
        {
            scoreAns.className += " btn-success";
            remarks.innerHTML = "Congratulations! You passed this quiz <i class='fa fa-child'></i>";
        }
        else if (score < 60) 
        {
            scoreAns.className += " btn-danger";
            remarks.innerHTML = "Bad! You are failed in this quiz &#9785";
        }
    }
}
timer = setInterval(quizTimer, 1000);