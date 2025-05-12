const questions = [
  {
    question: "बंधुआ श्रम प्रणाली (उन्मूलन) अधिनियम, 1976 का प्राथमिक उद्देश्य क्या है?",
    choices: ["क.बंधुआ श्रम को विनियमित करने के लिए", "ख.बंधुआ श्रम को समाप्त करने के लिए", "ग.बंधुआ श्रम को बढ़ावा देने के लिए", "घ.बंधुआ श्रम के लिए सब्सिडी प्रदान करने के लिए"],
    answer: 1
  },
  {
    question: "अधिनियम के अनुसार, बंधुआ मजदूरी किसे माना जाता है?",
    choices: ["क.स्वैच्छिक रोजगार", "ख.जबरन या बंधुआ मजदूरी", "ग.शिक्षुता कार्यक्रम", "घ.अवैतनिक इंटर्नशिप"],
    answer: 1
  },
  {
    question: "अधिनियम के तहत बंधुआ मजदूरी कराने पर क्या सजा है?",
    choices: ["क.केवल जुर्माना"," ख.केवल कारावास"," ग.जुर्माना और कारावास","घ.चेतावनी और परामर्श"],
    answer: 2
  },
  {
    question: "जिला स्तर पर बंधुआ मजदूरी प्रणाली (उन्मूलन) अधिनियम, 1976 के कार्यान्वयन के लिए कौन जिम्मेदार है?",
    choices: ["क.पुलिस विभाग","ख.जिला मजिस्ट्रेट","ग.नियोक्ता","घ.श्रमिक संघ"],
    answer: 1
  },
  {
    question: "अधिनियम के अनुसार, रिहा किये गये बंधुआ मजदूरों के पुनर्वास के लिए क्या कदम उठाए जा सकते हैं?",
    choices: ["क.वित्तीय मुआवज़ा","ख.व्यावसायिक प्रशिक्षण","ग.ए और बी दोनों","घ.उपरोक्त में से कोई नहीं"],
    answer: 2
  },
  {
    question: "बंधुआ मजदूरों की रिहाई के संबंध में अधिनियम क्या निर्धारित करता है?",
    choices: ["क.तत्काल रिहाई", "ख.चेतावनी के बाद रिहाई", "ग.परीक्षण अवधि के बाद रिहाई", "घ.मुआवजा भुगतान के बाद रिहाई"],
    answer: 0
  },
  {
    question: "क्या अधिनियम के तहत बच्चों से बंधुआ मजदूरी कराई जा सकती है?",
    choices: ["क.हाँ, माता-पिता की सहमति से", "ख.नहीं, किसी भी परिस्थिति में", "ग.हाँ, विशिष्ट उद्योगों में", "घ.हाँ, सरकारी अनुमोदन से"],
    answer: 1
  },
  {
    question: "कौन सा सरकारी निकाय अधिनियम के कार्यान्वयन की समय-समय पर समीक्षा करने के लिए जिम्मेदार है?",
    choices: ["क.वित्त मंत्रालय", "ख.राष्ट्रीय मानवाधिकार आयोग", "ग.अनुसूचित जाति के लिए राष्ट्रीय आयोग", "घ.श्रम और रोजगार मंत्रालय"],
    answer: 1
  },
  {
    question: "बंधुआ श्रम प्रणाली (उन्मूलन) अधिनियम, 1976 के तहत सतर्कता समितियों की क्या भूमिका है?",
    choices: ["क.बंधुआ मजदूरी लागू करें", "ख.अधिनियम के कार्यान्वयन की निगरानी करें", "ग.बंधुआ मजदूरी की वकालत करें", "घ.नियोक्ताओं को कानूनी प्रतिनिधित्व प्रदान करें"],
    answer: 1
  },
  
{
  question: "क्या अधिनियम के प्रावधानों को किसी अन्य कानून या समझौते द्वारा ओवरराइड किया जा सकता है?",
  choices: ["क.हाँ, अंतर्राष्ट्रीय समझौतों द्वारा", "ख.हाँ, राज्य कानूनों द्वारा", "ग.नहीं, अधिनियम लागू होता है", "घ.हाँ, नियोक्ता द्वारा"],
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