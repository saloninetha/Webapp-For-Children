const questions = [

  
  {  
    question: "What is the primary objective of the Juvenile Justice Act, 2000?",
    choices: ["A.Rehabilitation and reintegration of juvenile offenders","B.Maximum punishment for juvenile offenders","C.Exclusion of juvenile offenders from the justice system","D. Capital punishment for serious juvenile crimes"],
    answer: 0
  },
  {  
    question: "At what age does the Juvenile Justice Act, 2000 define a person as a juvenile?",
    choices: ["A.16 years","B.18 years","C.21 years","D.14 years"],
    answer: 1 
  },
  {  
    question: "What is the primary consideration when determining the disposal of a juvenile's case under the Juvenile Justice Act? ",
    choices: ["A.Severity of the offense","B.Age of the juvenile","C.Public opinion","D.Previous criminal record"],
    answer: 1
  },
  {  
    question: "Under the Juvenile Justice Act, 2000, what is the duration of institutional care for a juvenile in conflict with the law?",
    choices: ["A.No institutional care is allowed","B.Maximum 2 years","C.Maximum 3 years","D.Until the age of 21 years"],
    answer: 2
  },
  {  
    question: "Who is responsible for the rehabilitation and social reintegration of juvenile offenders under the Juvenile Justice Act?",
    choices: ["A.Juvenile's parents","B.State government","C.State government","D.Non-governmental organizations"],
    answer: 1
  },
  {  
    question: "According to the Juvenile Justice Act, what is the role of the Juvenile Justice Board (JJB)?",
    choices: [" A.Prosecution of juvenile offenders","B. Rehabilitation of juvenile offenders","C. Adjudication of cases involving juvenile offenders","D.Legal representation for juvenile offenders"],
    answer: 2
  },
  {  
    question: "What provision does the Juvenile Justice Act, 2000 have for the confidentiality of juvenile proceedings? ",
    choices: [" A.Open court proceedings","B.Closed-door hearings","C.Media coverage","D.No provision for confidentiality"],
    answer: 1
  },
  {  
    question: "Under the Juvenile Justice Act, 2000, what is the emphasis on when dealing with non-serious offenses committed by juveniles?    ",
    choices: ["A.Restitution to victims","B.Corporal punishment","C.Exemplary punishment","D.Life imprisonment"],
    answer: 0
  },
  {  
    question: "Who oversees the functioning of observation homes under the Juvenile Justice Act, 2000?",
    choices: ["A.Police Department","B.Juvenile Justice Board","C. Child Welfare Committee","D.Ministry of Home Affairs"],
    answer: 2
  },
  {  
    question: "What is the purpose of the Child Welfare Committee (CWC) under the Juvenile Justice Acts",
    choices: ["A.Legal representation for juveniles","B.Rehabilitation of juvenile offenders","C.Adoption of juvenile offenders","D.Monitoring the functioning of observation home"],
    answer: 3
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