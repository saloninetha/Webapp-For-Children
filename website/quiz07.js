const questions = [
 
  {
    question: "भारतीय दंड संहिता की कौन सी धारा हत्या के लिए सज़ा से संबंधित है",
    choices: ["धारा 302", "धारा 304ए", "धारा 307", "धारा 376"],
    answer: 0
  },
  {
    question: "आईपीसी की धारा 420 किससे संबंधित है?",
    choices: ["अपहरण", "धोखाधड़ी और बेईमानी से संपत्ति की डिलीवरी के लिए प्रेरित करना", "डकैती", "दंगा करना"],
    answer: 1
  },
  {
    question: "आईपीसी की कौन सी धारा चोरी के अपराध से संबंधित है?",
    choices: ["धारा 378","धारा 420","धारा 406","धारा 324"],
    answer: 0
  },
  {
    question: "4. *question:* भारतीय दंड संहिता में धारा 499 किससे संबंधित है?",
    choices: ["दोषपूर्ण मानव वध", "मानहानि", "अपहरण", "जालसाजी"],
    answer: 1
  },
  {
    question: "आईपीसी की किस धारा के तहत स्वेच्छा से चोट पहुंचाने की सजा को परिभाषित किया गया है?",
    choices: ["धारा 300","धारा 307","धारा 323","धारा 376 "],
    answer: 2
  },
  {
    question: "आईपीसी की धारा 395 के तहत डकैती के अपराध के लिए क्या सज़ा है?",
    choices: ["आजीवन कारावास", "मृत्युदंड", "10 वर्ष कारावास", "केवल जुर्माना"],
    answer :1
  },
  {
    question: "आईपीसी की कौन सी धारा अपहरण की सजा से संबंधित है?",
    choices: ["धारा 363","धारा 376","धारा 302","धारा 420"],
    answer: 0
  },
  {
    question: "आईपीसी की धारा 304ए किससे संबंधित है?",
    choices: ["हत्या"," दहेज हत्या","लापरवाही से मौत","हत्या का प्रयास"],
    answer: 2
  },
  {
    question: "आईपीसी की किस धारा के तहत दंगे के लिए सज़ा परिभाषित है?",
    choices: ["धारा 147","धारा 420धारा 420","धारा 324","धारा 378"],
    answer: 0
  },
  {
    question: "आईपीसी की धारा 497 किससे संबंधित है?",
    choices: ["व्यभिचार", "द्विविवाह", "दहेज मृत्यु", "अपहरण"],
    answer: 0
  },
  
  
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const submitButton = document.getElementById("submit");
const resultElement = document.getElementById("result");
const restartButton = document.getElementById("restart");

function showQuestion() {
  const question = questions[currentQuestion];
  questionElement.innerText = question.question;

  choicesElement.innerHTML = "";
  for (let i = 0; i < question.choices.length; i++) {
    const choice = document.createElement("button");
    choice.innerText = question.choices[i];
    choice.addEventListener("click", () => checkAnswer(i));
    choicesElement.appendChild(choice);
  }
}

function checkAnswer(choice) {
  const question = questions[currentQuestion];

  if (choice === question.answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionElement.style.display = "none";
  choicesElement.style.display = "none";
  submitButton.style.display = "none";
  resultElement.innerHTML = `<p><strong>Your score:</strong> ${score} <strong>out of</strong> ${questions.length} <br> <strong>Scored points:</strong> ${score*10}</p>`;
  resultElement.style.display = "block";
  restartButton.style.display = "block";
}

function restartGame() {
  currentQuestion = 0;
  score = 0;
  questionElement.style.display = "block";
  choicesElement.style.display = "block";
  submitButton.style.display = "block";
  resultElement.style.display = "none";
  restartButton.style.display = "none";
  showQuestion();
}

submitButton.addEventListener("click", () => checkAnswer());
restartButton.addEventListener("click", () => restartGame());

showQuestion();