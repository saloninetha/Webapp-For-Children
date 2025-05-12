const questions = [
{
question: " What is the main objective of the Women's and Children's Act of 1956?",
    choices: ["A.To promote gender inequality", "B.To protect the rights of women and children", "C.To restrict the freedom of women","D.To discriminate against children "],
    answer: 1
 }, 
 {
  question: "Which country enacted the Women's and Children's Act of 1956?",
  choices: [" A.United States", "B.United Kingdom", "C.India", "D.South Africa"],
  answer: 2
},
{
  question: " Question: What does the Women's and Children's Act of 1956 aim to prevent?",
  choices: ["A. Employment opportunities for women","B.Child labor","C.Women's education"," D.Child marriages"],
  answer: 3
},
{
  question: "Under the Women's and Children's Act, what age is considered the legal minimum for marriage for girls?",
  choices: ["A.16 years","B.18 years","C.21 years","D.14 years"],
  answer: 1 
},
{
  question: "What specific rights does the Women's and Children's Act protect for women?",
  choices: ["A.Right to vote","B.Right to education","C.Right to work and receive equal pay ","D.Right to own property"],
  answer: 2
},
{
  question: "What provision in the Women's and Children's Act addresses the prohibition of dowry?",
  choices: ["A.Section 498A","B.Section 4304B","C.Section 125","D.Section 6"],
  answer: 0
},
{
  question: " What does Section 125 of the Women's and Children's Act deal with?",
  choices: ["A.Maintenance of wives, children, and parents"," B.Prohibition of child labor","C.Protection of women from harassment","D.Prevention of dowry"],
  answer: 0
},
{
  question: "Under the Women's and Children's Act, what is the punishment for domestic violence?",
  choices: [" A.Fine","B.Community service"," C.Imprisonment","D.Verbal warning"],
  answer: 2
},
{
  question: "Which government body is responsible for the implementation of the Women's and Children's Act?",
  choices: ["A.Ministry of Education","B.Ministry of Health","C.Ministry of Women and Child Development","D.Women and Child Finance"],
  answer: 2
},
{
  question: " In the context of the Women's and Children's Act, what is the importance of the guardianship provision?",
  choices: ["A.It grants women the right to vote","B.It establishes child custody rights","C.It regulates women's employment","D. It promotes child marriages"],
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