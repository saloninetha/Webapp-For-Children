const questions = [
  {
    question: "महिला एवं बाल अधिनियम 1956 का मुख्य उद्देश्य क्या है?",
        choices: ["क.लैंगिक असमानता को बढ़ावा देना", "ख.महिलाओं और बच्चों के अधिकारों की रक्षा करना", "ग.महिलाओं की स्वतंत्रता को प्रतिबंधित करना", "घ.बच्चों के खिलाफ भेदभाव करना"],
        answer: 1
     },
     {
      question: "किस देश ने 1956 का महिला एवं बाल अधिनियम अधिनियमित किया?",
      choices: ["क.संयुक्त राज्य अमेरिका", "ख.यूनाइटेड किंगडम", "ग.भारत", "घ.दक्षिण अफ्रीका"],
      answer: 2
    },
    {
      question: " question: 1956 के महिला एवं बाल अधिनियम का उद्देश्य क्या रोकना है?",
      choices: ["क.महिलाओं के लिए रोजगार के अवसर","ख.बाल श्रम","ग.महिला शिक्षा","घ.बाल विवाह"],
      answer: 3
    },
    {
      question: "महिला एवं बाल अधिनियम के तहत, लड़कियों की शादी के लिए कानूनी न्यूनतम आयु किस उम्र को मानी जाती है?",
      choices: ["क.16 वर्ष","ख.18 वर्ष","ग.21 वर्ष","घ.14 वर्ष"],
      answer :1
    },
    {
      question: "महिला एवं बाल अधिनियम महिलाओं के लिए किन विशिष्ट अधिकारों की रक्षा करता है?",
      choices: ["क.वोट देने का अधिकार", "ख.शिक्षा का अधिकार", "ग.काम करने और समान वेतन पाने का अधिकार", "घ.संपत्ति का मालिक होने का अधिकार"],
      answer: 2
    },
    {
      question: "महिला एवं बाल अधिनियम में कौन सा प्रावधान दहेज के निषेध को संबोधित करता है?",
      choices: ["क.धारा 498ए","ख.धारा 4304बी","ग.धारा 125","घ.धारा 6"],
      answer: 0
    },
    {
      question: "महिला एवं बाल अधिनियम की धारा 125 किससे संबंधित है?",
      choices: ["क.पत्नी, बच्चों और माता-पिता का भरण-पोषण","ख. बाल श्रम का निषेध","ग.महिलाओं को उत्पीड़न से सुरक्षा","घ.दहेज की रोकथाम"],
      answer: 0
    },
    {
      question: "महिला एवं बाल अधिनियम के तहत, घरेलू हिंसा के लिए क्या सज़ा है?",
      choices: ["क.ठीक","ख.सामुदायिक सेवा","ग. कारावास","घ.मौखिक चेतावनी"],
      answer: 2
    },
    {
      question: "महिला एवं बाल अधिनियम के कार्यान्वयन के लिए कौन सा सरकारी निकाय जिम्मेदार है?",
      choices: ["क.शिक्षा मंत्रालय", "ख.स्वास्थ्य मंत्रालय", "ग.महिला एवं बाल विकास मंत्रालय", "घ.महिला एवं बाल वित्त"],
      answer: 2
    },
    {
      question: "महिला एवं बाल अधिनियम के संदर्भ में, संरक्षकता प्रावधान का क्या महत्व है?",
      choices: ["क.यह महिलाओं को वोट देने का अधिकार देता है", "ख.यह बाल संरक्षण अधिकार स्थापित करता है", "ग.यह महिलाओं के रोजगार को नियंत्रित करता है", "घ.यह बाल विवाह को बढ़ावा देता है"],
      answer :1
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