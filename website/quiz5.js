const questions = [
  {  
    question: "In which year was the Child Marriage Restraint Act enacted in India?",
    choices: ["A.1939","B.1947","C.1929 ","D.1955"],
    answer: 2
  },
  {  
    question: " What is the common name for the Child Marriage Restraint Act 1929?    ",
    choices:["A.Juvenile Justice Act","B.Sati Prevention Act","C.Prohibition of Child Marriage Act","D.Child Protection Act"],
    answer: 2
  },
  {  
    question: "According to the Act, what is the minimum age for marriage for a girl?",
    choices: ["A.16 years","B.18 years","C.21 years","D.14 years"],
    answer: 1
  },
  {  
    question: "What penalty is prescribed for a male adult marrying a child under the Child Marriage Restraint Act?",
    choices: ["A.Fine only","B.Imprisonment only","C.Both fine and imprisonment"," D.Community service    "],
    answer: 2 
  },
  {  
    question: "Who is responsible for reporting a child marriage under the Act?    ",
    choices: ["A.Police only","B.Neighbors only","C.Any person having knowledge of the marriage","D.Only the parents of the child"],
    answer: 2
  },
  {  
    question: "Under the Act, who can be punished for promoting or permitting a child marriage?    ",
    choices: ["A.Only the parents","B.Only the religious leader","C.Both parents and the person solemnizing the marriage","D.Only the government officials"],
    answer: 2
  },
  {  
    question: "What is the punishment for performing, conducting, or directing a child marriage?",
    choices: ["A.Fine","B.Imprisonment","C.Both fine and imprisonment","D.Verbal warning"],
    answer: 2
  },
  {  
    question: "Which section of the Indian Penal Code (IPC) is related to the offense of child marriage?",
    choices: ["A.Section 375","B.Section 498A","C.Section 9","D.Section 4"],
    answer: 3
  },
  {  
    question: " The Child Marriage Restraint Act was amended in which year to increase the legal age of marriage for girls to 18 years? ",
    choices: ["A.1955","B.1978","C.2006","D.2019"],
    answer: 2
  },
 
  {  
    question: "Under the Act, what is the role of Child Marriage Prohibition Officers?    ",
    choices: ["A.Conducting marriage ceremonie"," B.Preventing child marriages and ensuring compliance with the Ac"," C.Issuing marriage certificates","D.Promoting child marriages "],
    answer: 1
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