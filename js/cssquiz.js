var questions = [
    {
        "question": "What is css stand for?",
        "option1": "Creative Style Sheets",
        "option2": "Colorful Style Sheets",
        "option3": "Computer Style Sheets",
        "option4": "Cascading Style Sheets",
        "answer": "4"
        
    },
    {

        "question": "If we want to place text around an image, which CSS property should we use?",
        "option1": "Push",
        "option2": "float",
        "option3": "Align",
        "option4": "Wrap",
        "answer": "2"
    },
    {

        "question": "Can we define the direction of the text via a CSS property?",
        "option1": "Yes it’s possible.",
        "option2": "No, it’s not possible.",
        "answer": "1"
    },
    {

        "question": "If we want to use a green border around an image, which css property are we going to use?",
        "option1": "border-line",
        "option2": "border-style",
        "option3": "border-decoration",
        "option4": "border-color",
        "answer": "4"
    },
    {

        "question": "Where in an HTML document is the correct place to refer to an external style sheet?",
        "option1": "At the end of the document",
        "option2": "In the &lt;head&gt; section",
        "option3": "At the top of the document",
        "option4": "In the &lt;body&gt; section",
        "answer": "2"
    },
    {

        "question": "Which HTML tag is used to define an internal style sheet?",
        "option1": "&lt;style&gt;",
        "option2": "&lt;css&gt;",
        "option3": "&lt;script&gt;",
        "answer": "1"
    },
    {

        "question": "Which HTML attribute is used to define inline styles?",
        "option1": "Font",
        "option2": "Class",
        "option3": "Styles",
        "option4": "Style",
        "answer": "4"
    },
    {

        "question": "Which is the correct CSS syntax?",
        "option1": "body {color: black}",
        "option2": "{body;color:black}",
        "option3": "{body:color=black(body}",
        "option4": "body:color=black",
        "answer": "1"
    },
    {

        "question": "How do you insert a comment in a CSS file?",
        "option1": "// this is a comment //",
        "option2": "/* this is a comment */",
        "option3": "‘ this is a comment",
        "option4": "// this is a comment",
        "answer": "2"
    },
    {

        "question": "Which CSS property controls the text size?",
        "option1": "font-size",
        "option2": "font-style",
        "option3": "text-style",
        "option4": "text-size",
        "answer": "1"
    },
];

var question = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");

question.innerHTML = questions[0].question;
option1.innerHTML = questions[0].option1
option2.innerHTML = questions[0].option2;
option3.innerHTML = questions[0].option3;
option4.innerHTML = questions[0].option4;


function func1() {
    document.getElementById("nextButton").disabled = false;
}

var val = document.querySelector("input[name='option']");
if (val.checked === false) {

}

var i = 0;
var correct = 0;
var wrong = 0;
var ans = document.getElementById("ans");
function next() {
    var val = document.querySelector("input[name='option']:checked");
    if (val === null) {
        alert("Select anyone");
    }
    else {
        if (questions[i].answer === val.value) {
            correct++;
            ans.innerHTML = "Right";
        }
        else {
            wrong++;
            ans.innerHTML = "Wrong";
        }
        if (questions.length - 1 === i) {
            var score = correct * 10;
            document.getElementById("quizContainer").style.display = "none";
            document.getElementById("resultContainer").style.display = "block";
            document.getElementById("score").innerHTML = "Your score is " + score + "%";
            document.getElementById("correct").innerHTML = "Number of correct answers = "+correct;
            document.getElementById("wrong").innerHTML = "Number of wrong answers = " + wrong;
            var remarks = document.getElementById("remarks");
            var scoreAns = document.getElementById("scoreAns");
            if (score >= 60) {
                scoreAns.className += " btn-success";
                remarks.innerHTML = "Congratulations! You passed this quiz <i class='fa fa-child'></i>";
            }
            else if (score < 60){
                scoreAns.className += " btn-danger";
                remarks.innerHTML = "Bad! You are failed in this quiz &#9785;";
            }
        }
        else {
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

function quizTimer() {
    sec--;
    if (sec === 0) {
        sec = 59;
        min--;
    }
    document.getElementById("timer").innerHTML = min + ":" + sec + " <i class='fa fa-clock-o'></i>";
    if (sec <= 1 && min <= 0) {
        var score = correct * 10;
        document.getElementById("quizContainer").style.display = "none";
        document.getElementById("resultContainer").style.display = "block";
        document.getElementById("score").innerHTML = "Your score is " + score + "%";
        document.getElementById("correct").innerHTML = "Number of correct answers = " + correct;
        document.getElementById("wrong").innerHTML = "Number of wrong answers = " + wrong;
        var remarks = document.getElementById("remarks");
        var scoreAns = document.getElementById("scoreAns");
        if (score >= 60) {
            scoreAns.className += " btn-success";
            remarks.innerHTML = "Congratulations! You passed this quiz <i class='fa fa-child'></i>";
        }
        else if (score < 60) {
            scoreAns.className += " btn-danger";
            remarks.innerHTML = "Bad! You are failed in this quiz &#9785";
        }
    }
}
timer = setInterval(quizTimer, 1000);