const questions = [
  {
    question: "अनैतिक व्यापार (रोकथाम) अधिनियम, 1956 का प्राथमिक उद्देश्य क्या है?",
    choices: ["राजमार्गों पर यातायात को विनियमित करने के लिए", "व्यावसायिक शोषण के लिए व्यक्तियों की अनैतिक तस्करी को रोकने के लिए", "मादक पदार्थों की तस्करी को नियंत्रित करने के लिए", "पर्यटन को बढ़ावा देने के लिए"],
    answer: 1
  },
  {
    question: "अनैतिक व्यापार (रोकथाम) अधिनियम, 1956 के तहत, वेश्यालय रखने या परिसर को वेश्यालय के रूप में उपयोग करने की अनुमति देने पर क्या सजा है?",
    choices: ["केवल जुर्माना", "3 वर्ष तक कारावास", "7 वर्ष तक कारावास", "आजीवन कारावास"],
    answer: 2
  },
  {
    question: "व्यक्तियों की तस्करी की रोकथाम के संबंध में अनैतिक तस्करी (रोकथाम) अधिनियम, 1956 के तहत किस आयु वर्ग को संरक्षित किया गया है?",
    choices: ["केवल बच्चे", "केवल वयस्क", "बच्चे और वयस्क दोनों", "केवल वरिष्ठ नागरिक"],
    answer: 2
  },
  {
    question: "अनैतिक व्यापार (रोकथाम) अधिनियम, 1956 के अनुसार, वेश्यावृत्ति की कमाई पर जीवन यापन करने पर क्या सज़ा है?",
    choices: ["केवल जुर्माना", "3 वर्ष तक कारावास", "5 वर्ष तक कारावास", "10 वर्ष तक कारावास"],
    answer: 3
  },
  {
    question: "अनैतिक तस्करी (रोकथाम) अधिनियम, 1956 के तहत तलाशी वारंट जारी करने की शक्ति किसके पास है?",
    choices: ["भारत के मुख्य न्यायाधीश"," प्रधान मंत्री"," जिला मजिस्ट्रेट या मेट्रोपॉलिटन मजिस्ट्रेट","पुलिस प्रमुख"],
    answer: 2
  },
  {
    question: "अनैतिक तस्करी (रोकथाम) अधिनियम, 1956 के तहत वेश्यावृत्ति में शामिल होने के लिए सहमति की कानूनी उम्र क्या है?",
    choices: ["16 वर्ष", "18 वर्ष", "21 वर्ष", "कोई निर्दिष्ट आयु नहीं है"],
    answer: 1
  },
  {
    question: "अनैतिक तस्करी (रोकथाम) अधिनियम, 1956 के तहत, वेश्यावृत्ति के उद्देश्य से सार्वजनिक स्थान पर आग्रह करने पर क्या सजा है?",
    choices: ["केवल जुर्माना", "3 महीने तक की कैद", "6 महीने तक की कैद", "1 वर्ष तक की कैद"],
    answer: 2
  },
  {
    question: "अनैतिक व्यापार (रोकथाम) अधिनियम, 1956 वेश्यावृत्ति को क्या परिभाषित करता है?",
    choices: [" सहमति देने वाले वयस्कों के बीच कोई भी यौन गतिविधि", "पैसे के लिए यौन सेवाओं का आदान-प्रदान", "वैवाहिक संबंध", "आकस्मिक यौन मुठभेड़"],
    answer: 1
  },
  {
    question: "अनैतिक तस्करी (रोकथाम) अधिनियम, 1956 के तहत, जब वेश्यावृत्ति के उद्देश्य से तस्करी की बात आती है तो किसे नाबालिग माना जाता है?" ,
    choices: ["12 वर्ष से कम"," 16 वर्ष से कम"," 18 वर्ष से कम"," 21 वर्ष से कम"],
    answer: 2
  },
  {
    question: "अनैतिक व्यापार (रोकथाम) अधिनियम, 1956 के तहत एक संरक्षण अधिकारी की क्या भूमिका है?",
    choices: ["यातायात को विनियमित करने के लिए", "गवाहों और पीड़ितों को सुरक्षा प्रदान करने के लिए", "अपराधियों पर मुकदमा चलाने के लिए", "खोज वारंट जारी करने के लिए"],
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