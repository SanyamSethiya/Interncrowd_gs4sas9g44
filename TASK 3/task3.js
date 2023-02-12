const quizData = [{
    question: "The Grand Canyon located in which country? ",
    a: "Ghana",
    b: "The US",
    c: "Canada",
    d: "Bolivia",
    correct: "b",
},
{
    question: "Who Invented the 3-D printer?",
    a: "Nick Holonyak",
    b: "Elias Howe",
    c: "Chuck Hull",
    d: "Christiaan Huygens",
    correct: "c",
},
{
    question: "Fatehpur Sikri was founded as the capital of the Mughal Empire by ______.",
    a: "Jahangir",
    b: "Akbar",
    c: "Babur",
    d: "Humayun",
    correct: "b",
},
{
    question: "What is the maximum number of Members in Lok Sabha?",
    a: "512",
    b: "542",
    c: "552",
    d: "532",
    correct: "c",
},
{
    question: "Which Veda depicts the information about the most ancient Vedic age culture?",
    a: "Atharvaveda",
    b: "Samaveda",
    c: "Rig Veda",
    d: "Yajurveda",
    correct: "c",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Your Score is ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);