

const images = [
    "wodospad1.jpg",
    "dolina2.jpg",
    "park2.jpg",
    "pobrane.jpg",
    "kampin2.jpg"
];

let currentIndex = 0;

const sliderImage = document.getElementById("slider");

function showImage(index) {
    sliderImage.src = images[index];
}

function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
}

function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    showImage(currentIndex);
}

setInterval(nextImage, 3000);



const facts = [
    "To miejsce ma ponad 1000 lat historii.",
    "Znajduje się tam jedna z najpiękniejszych plaż świata.",
    "Kręcono tam znane filmy i seriale.",
    "Temperatura rzadko spada poniżej 20°C.",
    "Jest popularnym miejscem nurkowania."
];

function showFact() {
    const factBox = document.getElementById("factBox");
    const randomIndex = Math.floor(Math.random() * facts.length);
    factBox.textContent = facts[randomIndex];
}


const quiz = [
    {
        question: "Gdzie znajduje się to miejsce?",
        answers: ["Europa", "Azja", "Afryka"],
        correct: 0
    },
    {
        question: "Jaka jest główna atrakcja?",
        answers: ["Plaże", "Góry", "Pustynia"],
        correct: 0
    },
    {
        question: "Jaki klimat tam panuje?",
        answers: ["Tropikalny", "Polarny", "Umiarkowany"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const resultEl = document.getElementById("result");

function showQuestion() {
    const q = quiz[currentQuestion];
    questionEl.textContent = q.question;
    answersEl.innerHTML = "";

    q.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.textContent = answer;

        btn.onclick = () => checkAnswer(index);

        answersEl.appendChild(btn);
    });
}

function checkAnswer(selected) {
    if (selected === quiz[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quiz.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionEl.textContent = "Koniec quizu!";
    answersEl.innerHTML = "";
    resultEl.textContent = `Twój wynik: ${score} / ${quiz.length}`;
}

window.onload = function () {
    showQuestion();
};
