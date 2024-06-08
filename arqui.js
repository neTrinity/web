const questions = [
    {
        question: "Es la dirección modificada por el fabricante.",
        answers: [
            { text: "IP", correct: false},
            { text: "MAC", correct: true},
            { text: "Windows", correct: false},
            { text: "IP fabrica", correct: false},
        ]
    },
    {
        question: "A las direcciones IP CADA número separado por un ounto se llama...",
        answers: [
            { text: "Pentagono", correct: false},
            { text: "MAC", correct: false},
            { text: "Octeto", correct: true},
            { text: "Binario", correct: false},
        ]
    },
    {
        question: "¿Una dirección de 32Bits cuántos grupos tiene?.",
        answers: [
            { text: "16", correct: false},
            { text: "8", correct: false},
            { text: "4", correct: true},
            { text: "19", correct: false},
        ]
    },
    {
        question: "•una dirección de 128Bits cuántos grupos tiene? .",
        answers: [
            { text: "8", correct: true},
            { text: "47", correct: false},
            { text: "4", correct: false},
            { text: "32", correct: false},
        ] 
    },
    {
        question: "•¿A qué se le llama dirección estática?.",
        answers: [
            { text: "no cambia y se asigna manualmente número de host", correct: true},
            { text: "el host ya viene modificado", correct: false},
            { text: "no se modifica el host", correct: false},
            { text: "cambia todo", correct: false},
        ] 
    },
    {
        question: "•¿para qué nos sirve la dirección IP?.",
        answers: [
            { text: "Para tener Wi-FI", correct: false},
            { text: "para ver el host", correct: false},
            { text: "sirve para identificar un dispositivo, y facilitando comunicación.", correct: true},
            { text: "poder mandar mensajes", correct: false},
        ] 
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". "+ currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `¡Tu puntaje es ${score} de ${questions.length}!`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();