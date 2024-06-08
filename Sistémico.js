const questions = [
    {
        question: "Una consultoría debe desarrollar un sistema en el cual los requerimientos son muy vólatiles, existen riesgos en el manejo de la tecnología y existe la necesidad de contar con una versión operable del sistema en el menor tiempo posible. seleccione el modelo de desarrollo a aplicar al caso anterior.",
        answers: [
            { text: "Prototipo", correct: false},
            { text: "scrum", correct: false},
            { text: "Cascada", correct: false},
            { text: "Xp", correct: true},
        ]
    },
    {
        question: "Scrum trabaja mediante iteraciones, esas tienen una duración de entre 1 y 4 semanas, cada Iteración termina con un producto entregable que es presentado al cliente. Estas iteraciones se llaman:",
        answers: [
            { text: "Sprint", correct: true},
            { text: "Backlogs", correct: false},
            { text: "Artefactos", correct: false},
            { text: "Medios", correct: false},
        ]
    },
    {
        question: "Una empresa desarrolla un sistema para el control de la producción de hortalizas en Invernaderos, el cual se llevará a cabo en varias etapas. El cliente participara activamente en la especificación de los requerimientos y validara los resultados de cada etapa. Las primeras versiones son de tipo beta y se espera que el producto final sea comercial. ¿Cuál modelo de desarrollo se utiliza?",
        answers: [
            { text: "Incremento", correct: false},
            { text: "Espiral", correct: true},
            { text: "Cascada", correct: false},
            { text: "Basado en componentes", correct: false},
        ]
    },
    {
        question: "Es un modelo fácilmente ampliable y modificable de un sistema de software, donde se muestran su interfaz y las funcionalidades más relevantes.",
        answers: [
            { text: "Proeso unificado", correct: true},
            { text: "Prototipo", correct: false},
            { text: "Espiral", correct: false},
            { text: "Dinámico", correct: false},
        ] 
    },
    {
        question: "Un conjunto de músicos que no son una orquesta, esta no es sino la correcta coordinación de sus componentes, su interrelación, es decir no podemos deducir que un conjunto unido de músicos puede llegar a ser una orquesta ya que no conocemos la funcionalidad de cada uno de ellos así que para esto cada uno tendrá que ser el soporte de una otro para conformar una canción y así poder escucharse como una. Indique que elemento falta para cumplir con el concepto de sistema",
        answers: [
            { text: "Entrada", correct: false},
            { text: "Proceso", correct: false},
            { text: "Salida", correct: false},
            { text: "Retroslimentación", correct: true},
        ] 
    },
    {
        question: "El área de sistemas de una empresa está desarrollando un sistema de almacén. Ya se levantaron los requerimientos iniciales usando casos de uso y se determinaron también objetos y clases, por lo que ahora se desea conocer la manera en que interactúan los objetos para lograr cierta funcionalidad en el sistema.",
        answers: [
            { text: "Entidad-Relación", correct: false},
            { text: "Clase", correct: true},
            { text: "Casos de uso", correct: false},
            { text: "Dinámico", correct: false},
        ] 
    },
    {
        question: "Cuál de las siguientes no es una ventaja del uso de iteraciones e incrementos en el desarrollo de software",
        answers: [
            { text: "El cliente recibe parte de lo encargado antes que con un modelo de cascada", correct: false},
            { text: "Es útil en todo tipo de proyectos", correct: false},
            { text: "facilita la incorporación de personal durante el desarrollo.", correct: false},
            { text: "La calidad y la estabilidad del software progresan con las iteraciones", correct: true},
        ] 
    },
    {
        question: "En el ciclo de vida del desarrollo de un sistema (SDLC) una fase del proceso debe concluir antes de que comience la siguiente.¿Cuál es el modelo?",
        answers: [
            { text: "iterativo", correct: false},
            { text: "cascada modificada", correct: false},
            { text: "cascada.", correct: true},
        ] 
    },
    {
        question: " El rector de la Universidad Nacional de Loja, solicita que se cree un sistema integro que gestione todas las funciones para la entidad universitaria. Como el proyecto se compone de algunos sistemas independientes que luego se relacionarán entre sí, y como el rector necesita que se muestren avances periódicos del mismo para tomar respectivas correcciones si las hubiera, la metodología óptima para el proyecto debería ser:",
        answers: [
            { text: "Cascada", correct: false},
            { text: "XP", correct: false},
            { text: "Scrum.", correct: true},
            { text: "Sprint", correct: false},
        ] 
    },
    {
        question: "El desarrollo ágil tiene varias metodologias para aplicarse en los proyectos, seleccione cuales tienen un enfoque de desarrollo y de gestión 1.- Método de Desarrollo de Sistemas dinámicos (DSDM), 2.- Scrum, XP, 3.- XP, 4.- Desarrollo Dirigido por Caracterisicas(FDD), 5.- Dirigido por Pruebas(TDD), 6.- Crytal, 7.- Lean",
        answers: [
            { text: "1,2,3,4,5", correct: false},
            { text: "1,5,6,7,3", correct: false},
            { text: "1,3,4,6,7", correct: true},
            { text: "3,4,5,6,7", correct: false},
        ] 
    },
    {
        question: " Para desarrollar un sistema de información, una consultoria tiene las siguientes características para el proyecto: se debe reducir los procedimientos y la documentación al mínimo, el grupo de trabajo es pequeño, se requiere que el cliente forme parte del equipo de trabajo. Indique los modelos de desarrollo que puede aplicarse a este caso:  1. Srcum, 2. XP, 3. Cascada, y 4. prototipo..",
        answers: [
            { text: "1,4", correct: true},
            { text: "3,4", correct: false},
            { text: "2,3", correct: false},
            { text: "1,2", correct: false},
        ] 
    },
    {
        question: "Etapa o fase del proceso administrativo que se refiere a ejercer el liderazgo mediante una adecuada comunicación, motivación, supervisión y toma de decisiones para alcanzar en forma efectiva lo planeado, organizado y de esta forma lograr los propósitos de la organización:",
        answers: [
            { text: "Dirección", correct: true},
            { text: "Proceso", correct: false},
            { text: "Prototipo", correct: false},
            { text: "XP", correct: false},
        ] 
    },
    {
        question: "Ideas clave para poner en práctica una gestión Lean",
        answers: [
            { text: "Visualizar flujos, dividir trabajo, establecer procesos", correct: false},
            { text: "visualizar y entregar procesos diferentes", correct: false},
            { text: "Procesos transversales enfocados en el cliente, aprender a ver el derroche, buscar la simplicidad", correct: true},
        ] 
    },
    {
        question: "Proceso que consiste en medir, valorar y evaluar la planeación, organización, integración y dirección, con la finalidad de corregir y retroalimentar las variaciones para alcanzar lo que pretende la empresa:",
        answers: [
            { text: "Proceso", correct: false},
            { text: "Visualización", correct: false},
            { text: "Prototipo", correct: false},
            { text: "Control", correct: true},
        ] 
    },
    {
        question: "Este paso de la metodología de Hall busca transformar una situación confusa e indeterminada, reconocida como problemática y por lo tanto indeseable, en un estatuto en donde se trate de definirla claramente:",
        answers: [
            { text: "Selección del sistema", correct: false},
            { text: "Definición del problema", correct: true},
            { text: "Selección del problema", correct: false},
            { text: "Definición del sistema", correct: false},
        ] 
    },
    {
        question: "Actividades que desarrolla el sistema con elementos de entrada para obtener las salidas:",
        answers: [
            { text: "Metodología", correct: true},
            { text: "Definición", correct: false},
            { text: "Prototipo", correct: false},
            { text: "Procesos", correct: false},
        ] 
    },
    {
        question: "En la metodología Scrum, ¿cómo se llama a la gráfica en la que se representa el trabajo pendiente del equipo?",
        answers: [
            { text: "Backlogs", correct: true},
            { text: "Scrum", correct: false},
            { text: "Burndown Chart", correct: true},
            { text: "Sprint", correct: false},
        ] 
    },
    {
        question: "Patrón de relaciones que definen los estados posibles de un sistema",
        answers: [
            { text: "Organización", correct: true},
            { text: "Modelo", correct: false},
            { text: "Dinámico", correct: false},
            { text: "XP", correct: false},
        ] 
    },
    {
        question: "En la metodología de Checkland o metodología de sistemas suaves una forma de asegurar que la definición raíz cumple con el propósito de definir bien el sistema, es asegurar que posee los siguientes elementos:",
        answers: [
            { text: "Customer (C), Actor (A), Transformation (T), Ownership (O), Weltanschauugn (W), Environment (E).", correct: true},
            { text: "Ambiente, organización y proveedores", correct: false},
            { text: "Ambiente, operación y administración reguladora de operaciones.", correct: false},
        ] 
    },
    {
        question: "La estructura básica de un sistema viable se compone de",
        answers: [
            { text: "Ambiente, organización y proveedores", correct: false
        },
            { text: "Ambiente, operación y  organización", correct: false},
            { text: "Ambiente, organización y administración reguladora de operaciones.", correct: false},
            { text: "Ambiente, operación y administración reguladora de operaciones.", correct: true},
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