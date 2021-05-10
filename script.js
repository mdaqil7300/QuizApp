const quizDB = [
    {
        question: "Q1. What is the full form of HTML?",
        a: "Hello to my land.",
        b: "Hey text makeup language",
        c: "Hyper Text mark language",
        d: "Hyper Text Markup Language.",
        ans: "ans4"
    },

    {
        question: "Q2. What is the full form of CSS?",
        a: "Cascading Style Shit",
        b: "Cascoding Stylee Sheet",
        c: "Cascading Style Sheet",
        d: "Cascode Styling Sheet",
        ans: "ans3"
    },

    {
        question: "Q3. What is 10/2?",

        a: '3',
        b: '5',
        c: '115',
        d: '20',
        ans: 'ans2'
    },

    {
        question: "Q4. What is 30%7?",
        a: '3',
        b: '5',
        c: '10',
        d: '2',
        ans: 'ans4'
    },

    {
        question: "Q5. Which of the following is not JavaScript Data Types?",
        a: "Undefined",
        b: "Number",
        c: "Boolean",
        d: "Float",
        ans: "ans4"
    },

    {
        question: "Q6. Which company developed JavaScript?",
        a: "Netscape",
        b: "Bell Labs",
        c: "Sun MIcrosystems",
        d: "IBM",
        ans: "ans1"
    },

    {
        question: "Q7. Inside which HTML element do we put the JavaScript?",
        a: "script",
        b: "head",
        c: "meta",
        d: "style",
        ans: "ans1"
    },

    {
        question: "Q8. Which of the following is correct about features of JavaScript?",
        a: "It can not Handling dates and time.",
        b: "JavaScript is a object-based scripting language.",
        c: "JavaScript is not interpreter based scripting language.",
        d: " All of the above",
        ans: "ans2"
    },

    {
        question: 'Q9. Which of the following is the correct syntax to display "Letsfindcourse" in an alert box using JavaScript?',
        a: 'alert-box("Letsfindcourse");',
        b: 'confirm("Letsfindcourse");',
        c: 'msgbox("Letsfindcourse");',
        d: 'alert("Letsfindcourse");',
        ans: 'ans4'
    },

    {
        question: "Q10. What is the original name of JavaScript?",
        a: "LiveScript",
        b: "EScript",
        c: "Mocha",
        d: "JavaScript",
        ans: "ans3"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

let questionCount = 0;
let score = 0;

const loadFunction = () => {

    const questionList = quizDB[questionCount];

    question.innerHTML = questionList.question;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}

loadFunction();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curElem) => {
        if (curElem.checked) {
            answer = curElem.id;
        }
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curElem) => curElem.checked = false);
};

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    };
    questionCount++;

    deselectAll();

    if (questionCount < quizDB.length) {
        loadFunction();
    }
    else {
        showscore.innerHTML = `
        <h3>You Scored ${score}/${quizDB.length} </h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
                                `;
        showscore.classList.remove('container')
    }
})