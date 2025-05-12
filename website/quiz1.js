const questions = [
  {  
    question: "What is the main objective of the Child Labour (Prohibition and Regulation) Act, 1986?",
    choices: ["A.To promote child labor","B.To regulate child labor","C.To prohibit child labor","D.None of the above"],
    answer: 2
  },
  {  
    question: "At what age is a child allowed to work under the Act?",
    choices: ["A.12 years","B.14 years","C.16 years","D.18 years"],
    answer: 1 
  },
  {  
    question: "Under the Act, which type of work is prohibited for children?",
    choices: ["A.Light work","B.Hazardous work","C.Domestic work","D.Agricultural work"],
    answer: 1
  },
  {  
    question: "What is the maximum working hours for a child under the age of 14?",
    choices: ["A.4 hours a day","B.6 hours a day","C.8 hours a day","D.10 hours a day"],
    answer: 1
  },
  {  
    question: "Who is responsible for the enforcement of the Child Labour Act?",
    choices: ["A.Ministry of Education","B.Ministry of Labour and Employmen","C.Ministry of Health and Family Welfare","D.Ministry of Women and Child Development"],
    answer: 1
  },
  {  
    question: "What is the penalty for employing a child in contravention of the Act?",
    choices: ["A.Fine only","B.Imprisonment only","C.Both A and B","D.Warning letter"],
    answer: 2
  },
  {  
    question: "What is the role of the Child Labour Rehabilitation-cum-Welfare Society under the Act?",
    choices: ["A.Prohibiting child labor","B.Rehabilitating child laborers","C.Regulating working hours","D.Conducting inspections"],
    answer: 1
  },
  {  
    question: "Which form of child labor is completely prohibited under the Act?",
    choices: ["A.Family-based work","B.School-based work","C.Bonded labor","D.Apprenticeship"],
    answer: 2
  },
  {  
    question: "Who is considered a child under the Child Labour Act, 1986?",
    choices: ["A.Below 10 years","B.Below 12 years","C.Below 14 years","D.Below 16 years"],
    answer: 2
  },
  {  
    question: "What is the responsibility of the appropriate government under the Act?",
    choices: ["A.Issuing child labor permits","B.Conducting raids on workplaces","C.Formulating and implementing policies","D.Providing financial assistance to employers"],
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