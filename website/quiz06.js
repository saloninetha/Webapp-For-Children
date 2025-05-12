const questions = [
  {
    question: "कौन सा अंतर्राष्ट्रीय दस्तावेज़ स्वास्थ्य के अधिकार को मौलिक मानव अधिकार के रूप में मान्यता देता है?",
    choices: ["क्योटो प्रोटोकॉल","जिनेवा कन्वेंशन","पेरिस एग्रीमेन","मानव अधिकारों की सार्वभौम घोषणा"],
    answer: 3
  },
  {
    question: "किस वर्ष में स्वास्थ्य के अधिकार को अंतर्राष्ट्रीय समुदाय द्वारा एक बाध्यकारी संधि में स्पष्ट रूप से मान्यता दी गई थी?",
    choices: ["1945","1976","1996","2005"],
    answer: 1
  },
  {
    question: "स्वास्थ्य के अधिकार में स्वास्थ्य देखभाल के किन आवश्यक घटकों तक पहुंच शामिल है?",
    choices: ["केवल आपातकालीन सेवाएं", "निवारक, उपचारात्मक और पुनर्वास सेवाएं", "कॉस्मेटिक प्रक्रियाएं", "प्रायोगिक"],
    answer: 1
  },
  {
    question: "कौन सी संयुक्त राष्ट्र एजेंसी विश्व स्तर पर स्वास्थ्य के अधिकार को बढ़ावा देने और उसकी रक्षा करने के लिए मुख्य रूप से जिम्मेदार है?",
    choices: ["यूनेस्को","डब्ल्यूएचओ","यूनिसेफ","आईएलओ"],
    answer: 1
  },
  {
    question: "*5. question: इस सिद्धांत के लिए शब्द क्या है कि स्वास्थ्य के अधिकार का आनंद किसी भी प्रकार के भेदभाव के बिना लिया जाना चाहिए?",
    choices: ["गैर-हस्तक्षेप", "सार्वभौमिक क्षेत्राधिकार", "गैर-भेदभाव", "संप्रभुता"],
    answer:2
  },
  {
    question: "निम्नलिखित में से कौन सा स्वास्थ्य का सामाजिक निर्धारक नहीं माना जाता है जो स्वास्थ्य के अधिकार की प्राप्ति को प्रभावित करता है?",
    choices: ["शिक्षा","आय","लिंग","पसंदीदा रंग"],
    answer: 3
  },
  {
    question: "स्वास्थ्य का अधिकार एक समावेशी अधिकार है, अर्थात यह निम्नलिखित में से किस समूह पर लागू होता है?",
    choices: ["केवल वयस्क", "केवल नागरिक", "हर कोई, बिना किसी भेदभाव के", "केवल स्वास्थ्य देखभाल पेशेवर"],
    answer:2
  },
  {
    question: "किस देश के संविधान में सबसे पहले स्वास्थ्य के अधिकार को मौलिक अधिकार के रूप में स्पष्ट रूप से शामिल किया गया?",
    choices: ["संयुक्त राज्य अमेरिका", "दक्षिण अफ्रीका", "स्वीडन", "भारत"],
    answer: 1
  },
  {
    question: "उस प्रक्रिया को क्या कहा जाता है जिसके द्वारा लोग उन्हें प्रभावित करने वाली स्वास्थ्य नीतियों के विकास और कार्यान्वयन में अपनी बात कह सकते हैं?",
    choices: ["निरंकुशता","सार्वजनिक भागीदारी","कुलीनतंत्र","बहिष्करण"],
    answer: 1
  },
  {
    question: "स्वास्थ्य का अधिकार अक्सर अन्य किन मानवाधिकारों से जुड़ा होता है?",
    choices: ["हथियार रखने का अधिकार"," निजता का अधिकार"," बोलने की स्वतंत्रता का अधिकार"," भोजन और आवास का अधिकार"],
    answer: 3
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