const questionElement = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const progressElement = document.getElementById("progress");
const scoreElement = document.getElementById("score");
const closeBtn = document.getElementById("reset-button");
const container = document.querySelector(".div1"); 

let currentQuestionIndex = 0;
let score = 0;

const questions = [
    {
        question: "Vem var Sveriges kung under stora delar av andra världskriget?",
        answers: ["Karl XVI Gustaf", "Gustav V", "Oscar II", "Gustav VI Adolf"],
        correct: 1
    },
    {
        question: "Vilket imperium styrdes av Julius Caesar?",
        answers: ["Grekiska riket", "Romerska riket", "Persiska riket", "Osmanska riket"],
        correct: 1
    },
    {
        question: "Vilket år upptäckte Christopher Columbus Amerika?",
        answers: ["1492", "1520", "1601", "1453"],
        correct: 0
    },
    {
        question: "Vilket år föll Västromerska riket?",
        answers: ["395", "410", "476", "527"],
        correct: 2
    },
    {
        question: "Vilken stad var huvudstad i det bysantinska riket?",
        answers: ["Aten", "Konstantinopel", "Alexandria", "Rom"],
        correct: 1
    },
    {
        question: "Vilket slag 1066 ledde till normandernas erövring av England?",
        answers: ["Slaget vid Hastings", "Slaget vid Waterloo", "Slaget vid Agincourt", "Slaget vid Tours"],
        correct: 0
    },
    {
        question: "Vilken europeisk konflikt pågick mellan 1618 och 1648?",
        answers: ["Sjuårskriget", "Trettioåriga kriget", "Hundraårskriget", "Krimkriget"],
        correct: 1
    },
    {
        question: "Vem var ledare för Sovjetunionen under större delen av andra världskriget?",
        answers: ["Vladimir Lenin", "Leon Trotskij", "Josef Stalin", "Nikita Chrusjtjov"],
        correct: 2
    },
    {
        question: "Vilket år började den franska revolutionen?",
        answers: ["1776", "1789", "1812", "1848"],
        correct: 1
    }
];




function showQuestion() {
    const q = questions[currentQuestionIndex];

    questionElement.textContent = q.question;
    progressElement.textContent = `Fråga ${currentQuestionIndex + 1} av ${questions.length}`;

    optionsContainer.innerHTML = "";

    q.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.textContent = answer;
        btn.classList.add("answers");
        btn.dataset.index = index;

        btn.addEventListener("click", () => handleAnswer(index));

        optionsContainer.appendChild(btn);
    });
    
    container.classList.remove("slide");
    void container.offsetWidth;
    container.classList.add("slide"); 
}

function handleAnswer(selectedIndex) {
    const q = questions[currentQuestionIndex];
    const buttons = optionsContainer.querySelectorAll("button");

    buttons.forEach(btn => btn.disabled = true);

    if (selectedIndex === q.correct) {
        score++;
        buttons[selectedIndex].style.backgroundColor = "green";
    } else {
        buttons[selectedIndex].style.backgroundColor = "red";
        buttons[q.correct].style.backgroundColor = "green";
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 1000);
}
//denna koden 
function showResult() {
    questionElement.textContent = "Quizet är slut!";
    optionsContainer.innerHTML = "";
    progressElement.textContent = "";
    scoreElement.textContent = `Du fick ${score} av ${questions.length} rätt!`;
}


closeBtn.addEventListener ("click", function () {
    
    score = 0;
    currentQuestionIndex = 0;
    scoreElement.textContent = "";
    closeBtn.style.display = "none";
    showQuestion();

});

    
showQuestion();

