
const quizData = [
    {
        question: "How old is Johnny?",
        a: '10',
        b: '17',
        c: '32',
        d: '110',
        correct: 'c'
    },
    {
        question: "What programming language did Johnny use to build this?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    },
    {
        question: "Who is the president of the USA?",
        a: "Joe Biden",
        b: "Donald Trump",
        c: "Barrack Obama",
        d: "Hilary Clinton",
        correct: "a"
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Javascript Object Notation",
        d: "Helicopters Terminals Motorboats Lamborghinis",
        correct: "a"
    },
    {
        question: "What year was JavaScript invented?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "None of the above",
        correct: "b"
    }
]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    });

    return answer
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
    
}

submitBtn.addEventListener("click", () => {
    
    const answer = getSelected();

    console.log(answer)
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;  
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML =
                `<h2>You got ${score}/${quizData.length} questions correct!</h2>
                <button onclick="location.reload()">Reload</button>`
        }
    }
})