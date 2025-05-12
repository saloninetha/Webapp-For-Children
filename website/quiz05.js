const questions = [
  {
    question: "भारत में बाल विवाह निरोधक अधिनियम किस वर्ष लागू किया गया था?",
    choices: ["1939","1947","1929","1955"],
    answer: 2
  },
  {
    question: "बाल विवाह निरोधक अधिनियम 1929 का सामान्य नाम क्या है?",
    choices:["किशोर न्याय अधिनियम","सती निवारण अधिनियम","बाल विवाह निषेध अधिनियम","बाल संरक्षण अधिनियम"],
    answer: 2
  },
  {
    question: "अधिनियम के अनुसार, लड़की की शादी के लिए न्यूनतम आयु क्या है?",
    choices: ["16 वर्ष","18 वर्ष","21 वर्ष","14 वर्ष"],
    answer: 1
  },
  {
    question: "बाल विवाह निरोधक अधिनियम के तहत बाल विवाह करने वाले वयस्क पुरुष के लिए क्या दंड निर्धारित है?",
    choices: ["केवल जुर्माना", "केवल कारावास", "जुर्माना और कारावास दोनों", "सामुदायिक सेवा"],
    answer: 2
  },
  {
    question: "अधिनियम के तहत बाल विवाह की रिपोर्ट करने के लिए कौन जिम्मेदार है?",
    choices: ["केवल पुलिस", "केवल पड़ोसी", "विवाह के बारे में जानकारी रखने वाला कोई भी व्यक्ति", "केवल बच्चे के माता-पिता"],
    answer: 2
  },
  {
    question: "अधिनियम के तहत, बाल विवाह को बढ़ावा देने या अनुमति देने के लिए किसे दंडित किया जा सकता है?",
    choices: ["केवल माता-पिता", "केवल धार्मिक नेता", "माता-पिता दोनों और विवाह संपन्न कराने वाला व्यक्ति", "केवल सरकारी अधिकारी"],
    answer: 2
  },
  {
    question: "बाल विवाह करने, संचालित करने या निर्देशित करने पर क्या सज़ा है?",
    choices: ["जुर्माना","कारावास","जुर्माना और कारावास दोनों","मौखिक चेतावनी"],
    answer: 2
  },
  {
    question: "भारतीय दंड संहिता (आईपीसी) की कौन सी धारा बाल विवाह के अपराध से संबंधित है?",
    choices: ["धारा 375","धारा 498ए","धारा 9","धारा 4"],
    answer: 3
  },
  {
    question: "लड़कियों की शादी की कानूनी उम्र 18 साल तक बढ़ाने के लिए बाल विवाह निरोधक अधिनियम में किस वर्ष संशोधन किया गया था?",
    choices: ["1955","1978","2006","2019"],
    answer: 2
  },
 
  {
    question: "अधिनियम के तहत, बाल विवाह निषेध अधिकारियों की क्या भूमिका है?",
    choices: ["विवाह समारोह आयोजित करना"," बाल विवाह को रोकना और अधिनियम का अनुपालन सुनिश्चित करना"," विवाह प्रमाण पत्र जारी करना","बाल विवाह को बढ़ावा देना"],
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