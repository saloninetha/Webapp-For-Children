const questions = [
  {  
    question: " What does POSCO stand for in the POSCO Act 2012?",
    choices: ["A. Protection of Sexual Crimes Act","B.Prevention of Sexual Offences Act","C.Punishment for Sexual Offenders Act","D.Prevention of Sexual Crimes and Offences Ac"],
    answer: 1
  },
  {  
    question: ". Which governmental body oversees the implementation of the POSCO Act in India?",
    choices: ["A.Ministry of Women and Child Development","B. National Human Rights Commission"," C.National Commission for Women","D. National Crime Records Bureau"],
    answer: 0
  },
  {  
    question: "What is the minimum imprisonment term for the offender under the POSCO Act for sexually assaulting a minor?",
    choices: ["A.3 years "," B.5 years"," C.7 years"," D.10 years"],
    answer: 1
  },
  {  
    question: "Which age group does the POSCO Act primarily aim to protect?",
    choices: ["A.Under 12 years","B.Under 14 years","C.Under 16 years","D.Under 18 years"],
    answer: 3
  },
  {  
    question: "What kind of sexual offenses are covered under the POSCO Act?",
    choices: ["A.Only rape","B.Rape and other sexual offenses against adults","C.Only sexual offenses against minors"," D.Sexual harassment in the workplace"],
    answer: 2
  },
  {  
    question: " Who is considered a child under the POSCO Act?*",
    choices: ["A.A person under 14 years","B.A person under 16 years","C.A person under 18 years","D.A person under 12 years"],
    answer: 2
  },
  {  
    question: "Can the POSCO Act be applied retroactively?",
    choices: [" A.Yes, in certain cases","B.No, it only applies prospectively","C.Yes, without any limitations","D. No, it's constitutionally prohibited"],
    answer: 0
  },
  {  
    question: "Who can file a complaint under the POSCO Act on behalf of a minor victim?",
    choices: ["A.Only the victim's parents","B.Any responsible person","C. Only the victim","D.Police officers"],
    answer: 1
  },
  {  
    question: "What's the punishment for not reporting a case of child sexual abuse under the POSCO Act?",
    choices: ["A.Fine of Rs. 50,000","B.Imprisonment up to 6 months","C.Fine and imprisonment both","D.Community service for 3 months"],
    answer: 2
  },
  {  
    question: "Is the identity of the victim of a sexual offense under the POSCO Act protected?",
    choices: ["A.No, it's public information","B.Yes, always kept confidential","C.Only in certain cases","D.Only if requested by the victim"],
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