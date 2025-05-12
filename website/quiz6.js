const questions = [
  {  
    question: "What international document recognizes the right to health as a fundamental human right?",
    choices: ["A.Kyoto Protocol","B.Geneva Conventions","C.Paris Agreemen"," D.Universal Declaration of Human Rights"],
    answer: 3
  },
  {  
    question: "In which year was the right to health explicitly recognized by the international community in a binding treaty?",
    choices: ["A.1945","B.1976","C.1996","D.2005"],
    answer: 1
  },
  {  
    question: "The right to health encompasses access to what essential components of healthcare?",
    choices: ["A.Only emergency services","B.Preventive, curative, and rehabilitative services","C.Cosmetic procedures","D.Experimental"],
    answer: 1
  },
  {  
    question: "Which United Nations agency is primarily responsible for promoting and protecting the right to health globally?",
    choices: ["A.UNESCO","B.WHO","C.UNICEF","D.ILO"],
    answer: 1
  },
  {  
    question: "*5. Question: What is the term for the principle that the right to health should be enjoyed without discrimination of any kind?",
    choices: ["A.Non-interference","B.Universal jurisdiction","C.Non-discrimination","D.Sovereignty    "],
    answer: 2
  },
  {  
    question: "Which of the following is NOT considered a social determinant of health that impacts the realization of the right to health?",
    choices: ["A.Education","B.Income","C.Gender","D.Favorite color"],
    answer: 3
  },
  {  
    question: "The right to health is an inclusive right, meaning it applies to which of the following groups?",
    choices: ["A.only adults","B.only citizens"," C.Everyone, without discrimination","D.Only healthcare professionals"],
    answer: 2
  },
  {  
    question: "Which country's constitution was the first to explicitly include the right to health as a fundamental right?",
    choices: ["A.United States","B.South Africa","C.Sweden","D.India"],
    answer: 1
  },
  {  
    question: "What is the term for the process by which people can have a say in the development and implementation of health policies that affect them?",
    choices: [" A.Autocracy","B.Public participation","C.Oligarchy","D.Exclusion"],
    answer: 1
  },
  {  
    question: " The right to health is often interconnected with which other human rights?",
    choices: [" A.Right to bear arms"," B.Right to privacy"," C.Right to freedon of speech"," D.Right to food and housing"],
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