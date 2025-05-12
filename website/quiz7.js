const questions = [
 
  {  
    question: "Which section of the Indian Penal Code deals with the punishment for murder    ",
    choices: ["A.Section 302","B.Section 304A","C.Section 307","D.Section 376"],
    answer: 0
  },
  {  
    question: " What does Section 420 of the IPC pertain to?",
    choices: ["A.Kidnapping","B.Cheating and dishonestly inducing delivery of propert","C.Robbery ","D.Rioating"],
    answer: 1
  },
  {  
    question: "Which section of the IPC deals with the offense of theft?",
    choices: ["A.Section 378","B.Section 420","C.Section 406","D.Section 324"],
    answer: 0
  },
  {  
    question: "4. *Question:* In the Indian Penal Code, what does Section 499 relate to?",
    choices: ["A.Culpable Homicide","B.Defamation","C.Kidnapping ","D.Forgery"],
    answer: 1
  },
  {  
    question: " Under which section of the IPC is the punishment for voluntarily causing hurt defined?",
    choices: ["A.Section 300","B.Section 307","C.Section 323","D.Section 376    "],
    answer: 2
  },
  {  
    question: "What is the punishment for the offense of dacoity under Section 395 of the IPC? ",
    choices: ["A.Life imprisonment","B.Death penalty","C.Imprisonment for 10 years","D.Fine only"],
    answer: 1
  },
  {  
    question: "Which section of the IPC deals with the punishment for kidnapping?",
    choices: ["A.Section 363","B.Section 376","C.Section 302","D.Section 420"],
    answer: 0
  },
  {  
    question: " What does Section 304A of the IPC relate to?",
    choices: [" A.Murder","B. Dowry Death","C.Causing death by negligence","D.Attempt to murder"],
    answer: 2
  },
  {  
    question: "Under which section of the IPC is the punishment for rioting defined?",
    choices: ["A.Section 147","B.Section 420Section 420","C.Section 324","D.Section 378"],
    answer: 0
  },
  {  
    question: "What does Section 497 of the IPC pertain to?",
    choices: ["A.Adultery","B.Bigamy"," C.Dowry Death    ","D.Kidnapping"],
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
