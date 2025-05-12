const questions = [
  {  
    question: "What is the primary objective of the Bonded Labour System (Abolition) Act, 1976?",
    choices: ["A.to regulate bonded labor ","B.To abolish bonded labor","C.To promote bonded labor","D.To provide subsidies for bonded labor"],
    answer: 1
  },
  {  
    question: "According to the Act, what is considered bonded labor?",
    choices: ["A.Voluntary employment","B.Forced or bonded labor","C.Apprenticeship programs","D.Unpaid internships"],
    answer: 1
  },
  {  
    question: "What is the punishment for enforcing bonded labor under the Act?",
    choices: ["A.Fine only"," B.Imprisonment only","C. Fine and imprisonment","D.Warning and counseling"],
    answer: 2
  },
  {  
    question: "Who is responsible for the implementation of the Bonded Labour System (Abolition) Act, 1976 at the district level?",
    choices: ["A.Police Department","B.District Magistrat","C.Employers","D.Labor Unions"],
    answer: 1
  },
  {  
    question: " According to the Act, what steps can be taken for the rehabilitation of released bonded laborers?",
    choices: ["A.Financial compensation","B.Vocational training","C.Both A and B","D.None of the above"],
    answer: 2
  },
  {  
    question: "What does the Act prescribe regarding the release of bonded laborers?",
    choices: ["A.Immediate release","B.Release after a warning","C.Release after a trial period","D.Release after compensation payment"],
    answer: 0
  },
  {  
    question: "Can children be subjected to bonded labor under the Act?",
    choices: ["A.Yes, with parental consent","B.No, under any circumstances","C.Yes, in specific industries","D.Yes, with government approval"],
    answer: 1
  },
  {  
    question: "Which government body is responsible for periodically reviewing the implementation of the Act?",
    choices: ["A.Ministry of Finance","B.National Human Rights Commission","C.National Commission for Scheduled Castes","D.Ministry of Labour and Employment"],
    answer: 1
  },
  {  
    question: " What is the role of vigilance committees under the Bonded Labour System (Abolition) Act, 1976?",
    choices: ["A.Enforce bonded labor","B.Monitor the implementation of the Act","C.Advocate for bonded labor","D.Provide legal representation to employers"],
    answer: 1
  },
  {  
    question: "Can the provisions of the Act be overridden by any other law or agreement?",
    choices: ["A.Yes, by international agreements","B.Yes, by state laws","C.No, the Act prevails","D.Yes, by employer"],
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