const questions = [
  {  
    question: "What is the full name of the legislation commonly known as the Persons with Disabilities Act 1995?",
    choices: ["A.Disability Discrimination Act","B.Equal Opportunities Ac","C.Americans with Disabilities Ac","D.Persons with Disabilities Act 1995"],
    answer: 3
  },
  {  
    question: "In which country was the Persons with Disabilities Act 1995 enacted?",
    choices: ["A.United States","B.United Kingdom "," C.Canada ","D.India"],
    answer: 3
  },
  {  
    question: "What is the primary objective of the Persons with Disabilities Act 1995?",
    choices: [" A.Promoting disability discrimination","B.Ensuring equal opportunities and full participation for persons with disabilitie","C.Restricting employment opportunities for persons with disabilities    ","D.None of the above"],
    answer: 1
  },
  {  
    question: " According to the Persons with Disabilities Act 1995, what percentage of reservation is provided in government jobs for persons with disabilities?",
    choices: ["A.2%","B.3%","C.5%","D.10%"],
    answer: 2
  },
  {  
    question: "Question: Which of the following disabilities is NOT specifically mentioned in the Persons with Disabilities Act 1995?",
    choices: ["A.Blindness","B.Autism","C.Hemophilia  ","D.Hearing impairmen"],
    answer: 1
  },
  {  
    question: "What type of non-discrimination is emphasized in the Persons with Disabilities Act 1995?",
    choices: ["A.Racial non-discriminatio"," B.Gender-based non-discrimination ","C.Disability-based non-discrimination","D.Religious non-discriminatio"],
    answer: 2
  },
  {  
    question: " Which government agency is responsible for implementing and monitoring the Persons with Disabilities Act 1995 in India?",
    choices: ["A.Ministry of Social Justice and Empowerment ","B.Ministry of Health and Family Welfare","C.Ministry of Finance","D.Ministry of External Affairs"],
    answer: 0
  },
  {  
    question: "According to the Persons with Disabilities Act 1995, what is the duration for which disability certificates are valid?",
    choices: ["A.1 year","B.3 years","C.5 years","D.10 years"],
    answer: 2
  },
  {  
    question: "What provision does the Persons with Disabilities Act 1995 make for accessibility in public buildings?",
    choices: ["A.No provisions for accessibility","B.Voluntary accessibility measures","C.Mandatory accessibility measure","D.Accessibility only for certain disabilities"],
    answer: 2
  },
  {  
    question: " What is the penalty for discriminating against persons with disabilities under the Persons with Disabilities Act 1995?",
    choices: [" A.Fine","B.Imprisonment ","C.Both A and B","D.No penalty    "],
    answer: 2
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








