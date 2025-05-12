const questions = [

  {
    question: "किशोर न्याय अधिनियम, 2000 का प्राथमिक उद्देश्य क्या है?",
    choices: ["किशोर अपराधियों का पुनर्वास और पुन:एकीकरण", "किशोर अपराधियों के लिए अधिकतम सजा", "न्याय प्रणाली से किशोर अपराधियों का बहिष्कार", "गंभीर किशोर अपराधों के लिए मृत्युदंड"],
    answer: 0
  },
  {
    question: "किशोर न्याय अधिनियम, 2000 किस उम्र में किसी व्यक्ति को किशोर के रूप में परिभाषित करता है?",
    choices: ["16 वर्ष","18 वर्ष","21 वर्ष","14 वर्ष"],
    answer :1
  },
  {
    question: "किशोर न्याय अधिनियम के तहत किसी किशोर के मामले के निपटान का निर्धारण करते समय प्राथमिक विचार क्या है?",
    choices: ["अपराध की गंभीरता", "किशोर की उम्र", "सार्वजनिक राय", "पिछला आपराधिक रिकॉर्ड"],
    answer :1
  },
  {
    question: "किशोर न्याय अधिनियम, 2000 के तहत, कानून का उल्लंघन करने वाले किशोर के लिए संस्थागत देखभाल की अवधि क्या है?",
    choices: ["किसी संस्थागत देखभाल की अनुमति नहीं है", "अधिकतम 2 वर्ष", "अधिकतम 3 वर्ष", "21 वर्ष की आयु तक"],
    answer: 2
  },
  {
    question: "किशोर न्याय अधिनियम के तहत किशोर अपराधियों के पुनर्वास और सामाजिक पुनर्मिलन के लिए कौन जिम्मेदार है?",
    choices: ["किशोर के माता-पिता", "राज्य सरकार", "राज्य सरकार", "गैर-सरकारी संगठन"],
    answer :1
  },
  {
    question: "किशोर न्याय अधिनियम के अनुसार, किशोर न्याय बोर्ड (जेजेबी) की क्या भूमिका है?",
    choices: ["किशोर अपराधियों का अभियोजन"," किशोर अपराधियों का पुनर्वास"," किशोर अपराधियों से जुड़े मामलों का न्यायनिर्णयन","किशोर अपराधियों के लिए कानूनी प्रतिनिधित्व"],
    answer: 2
  },
  {
    question: "किशोर न्याय अधिनियम, 2000 में किशोर कार्यवाही की गोपनीयता के लिए क्या प्रावधान है?",
    choices: ["खुली अदालत की कार्यवाही","बंद कमरे में सुनवाई","मीडिया कवरेज","गोपनीयता के लिए कोई प्रावधान नहीं"],
    answer: 1
  },
  {
    question: "किशोर न्याय अधिनियम, 2000 के तहत, किशोरों द्वारा किए गए गैर-गंभीर अपराधों से निपटते समय किस पर जोर दिया जाता है?",
    choices: ["पीड़ितों को मुआवजा","शारीरिक दंड","अनुकरणीय दंड","आजीवन कारावास"],
    answer: 0
  },
  {
    question: "किशोर न्याय अधिनियम, 2000 के तहत अवलोकन गृहों के कामकाज की देखरेख कौन करता है?",
    choices: ["पुलिस विभाग","किशोर न्याय बोर्ड",") बाल कल्याण समिति","गृह मंत्रालय"],
    answer: 2
  },
  {
    question: "किशोर न्याय अधिनियमों के तहत बाल कल्याण समिति (सीडब्ल्यूसी) का उद्देश्य क्या है",
    choices: ["किशोरों के लिए कानूनी प्रतिनिधित्व","किशोर अपराधियों का पुनर्वास","किशोर अपराधियों को गोद लेना","संप्रेक्षण गृह के कामकाज की निगरानी"],
    answer: 3
  }
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