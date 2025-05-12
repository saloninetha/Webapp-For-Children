const questions = [
  {
    question: "उस कानून का पूरा नाम क्या है जिसे आमतौर पर विकलांग व्यक्ति अधिनियम 1995 के नाम से जाना जाता है?",
   choices: ["क.विकलांगता भेदभाव अधिनियम", "ख.समान अवसर अधिनियम", "ग.विकलांग अमेरिकी अधिनियम", "घ.विकलांग व्यक्ति अधिनियम 1995"],
    answer: 3
  },
  {
    question: "विकलांग व्यक्ति अधिनियम 1995 किस देश में अधिनियमित किया गया था?",
   choices: ["क.संयुक्त राज्य अमेरिका", "यूनाइटेड किंगडम", "कनाडा", "भारत"],
    answer: 3
  },
  {
    question: "विकलांग व्यक्ति अधिनियम 1995 का प्राथमिक उद्देश्य क्या है?",
   choices: ["क.विकलांगता भेदभाव को बढ़ावा देना","विकलांग व्यक्तियों के लिए समान अवसर और पूर्ण भागीदारी सुनिश्चित करना","विकलांग व्यक्तियों के लिए रोजगार के अवसरों को प्रतिबंधित करना","उपरोक्त में से कोई नहीं"],
    answer: 1
  },
  {
    question: "विकलांग व्यक्ति अधिनियम 1995 के अनुसार, विकलांग व्यक्तियों के लिए सरकारी नौकरियों में कितने प्रतिशत आरक्षण प्रदान किया जाता है?",
   choices: ["क.2%","3%","5%","10%"],
    answer: 2
  },
  {
    question: "question: निम्नलिखित में से किस विकलांगता का विशेष रूप से विकलांग व्यक्ति अधिनियम 1995 में उल्लेख नहीं किया गया है?",
   choices: ["क.अंधापन", "ऑटिज़्म", "हीमोफ़ीलिया", "श्रवण बाधित"],
    answer: 1
  },
  {
    question: "विकलांग व्यक्ति अधिनियम 1995 में किस प्रकार के गैर-भेदभाव पर जोर दिया गया है?",
   choices: ["क.नस्लीय गैर-भेदभाव"," लिंग-आधारित गैर-भेदभाव", "विकलांगता-आधारित गैर-भेदभाव", "धार्मिक गैर-भेदभाव"],
    answer: 2
  },
  {
    question: "भारत में विकलांग व्यक्ति अधिनियम 1995 को लागू करने और निगरानी करने के लिए कौन सी सरकारी एजेंसी जिम्मेदार है?",
   choices: ["क.सामाजिक न्याय और अधिकारिता मंत्रालय", "स्वास्थ्य और परिवार कल्याण मंत्रालय", "वित्त मंत्रालय", "विदेश मंत्रालय"],
    answer: 0
  },
  {
    question: "विकलांग व्यक्ति अधिनियम 1995 के अनुसार, विकलांगता प्रमाणपत्र किस अवधि के लिए वैध हैं?",
   choices: ["क.1 वर्ष", "3 वर्ष", "5 वर्ष", "10 वर्ष"],
    answer: 2
  },
  {
    question: "विकलांग व्यक्ति अधिनियम 1995 सार्वजनिक भवनों में पहुंच के लिए क्या प्रावधान करता है?",
   choices: ["क.पहुंच के लिए कोई प्रावधान नहीं", "स्वैच्छिक पहुंच के उपाय", "अनिवार्य पहुंच के उपाय", "केवल कुछ विकलांगताओं के लिए पहुंच"],
    answer: 2
  },
 
{
  question: "विकलांग व्यक्ति अधिनियम 1995 के तहत विकलांग व्यक्तियों के साथ भेदभाव करने पर क्या दंड है?",
 choices: ["क.जुर्माना","कारावास","ए और बी दोनों","कोई जुर्माना नहीं"],
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