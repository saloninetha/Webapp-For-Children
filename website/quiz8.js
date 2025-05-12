const questions = [
  {  
    question: "What is the primary objective of the Immoral Traffic (Prevention) Act, 1956?",
    choices: ["A.To regulate traffic on highways","B.To prevent immoral trafficking in persons for commercial exploitation","C.To control drug trafficking","D.To promote tourism"],
    answer: 1
  },
  {  
    question: "Under the Immoral Traffic (Prevention) Act, 1956, what is the punishment for keeping a brothel or allowing premises to be used as a brothel?",
    choices: ["A.Fine only","B.Imprisonment up to 3 years","C.Imprisonment up to 7 years"," D.Imprisonment for life"],
    answer: 2
  },
  {  
    question: "What age group is protected under the Immoral Traffic (Prevention) Act, 1956, regarding the prevention of trafficking of persons?",
    choices: ["A.Children only","B.Adults only"," C.Both children and adults","D. Senior citizens only"],
    answer: 2
  },
  {  
    question: "According to the Immoral Traffic (Prevention) Act, 1956, what is the punishment for living on the earnings of prostitution?",
    choices: ["A.Fine only","B.Imprisonment up to 3 years","C.Imprisonment up to 5 years","D.Imprisonment up to 10 years"],
    answer: 3
  },
  {  
    question: "Who has the power to issue search warrants under the Immoral Traffic (Prevention) Act, 1956?",
    choices: [" A.Chief Justice of India","B. Prime Minister"," C.District Magistrate or a Metropolitan Magistrate","D.Chief of Police"],
    answer: 2
  },
  {  
    question: "What is the legal age of consent for engaging in prostitution under the Immoral Traffic (Prevention) Act, 1956? ",
    choices: ["A.16 years","B.18 years","C.21 years","D. There is no specified age    "],
    answer: 1
  },
  {  
    question: "Under the Immoral Traffic (Prevention) Act, 1956, what is the punishment for soliciting in a public place for the purpose of prostitution?",
    choices: [" A.Fine only ","B.Imprisonment up to 3 months","C.Imprisonment up to 6 months","D.Imprisonment up to 1 year"],
    answer: 2
  },
  {  
    question: "What does the Immoral Traffic (Prevention) Act, 1956, define as prostitution?",
    choices: [" A.Any sexual activity between consenting adults"," B.Exchange of sexual services for money"," C.Marital relations"," D.Casual sexual encounter"],
    answer: 1
  },
  {  
    question: "Under the Immoral Traffic (Prevention) Act, 1956, who is considered a minor when it comes to trafficking for the purpose of prostitution?"  ,
    choices: [" A.Under 12 years"," B.Under 16 years","C. Under 18 years","D. Under 21 years"],
    answer: 2
  },
  {  
    question: "What is the role of a Protection Officer under the Immoral Traffic (Prevention) Act, 1956? ",
    choices: ["A.To regulate traffic","B.To provide protection to witnesses and victims","C.To prosecute offenders","D.To issue search warrants"],
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