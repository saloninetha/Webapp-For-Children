const questions = [
  {
    question: "पॉस्को अधिनियम 2012 में पॉस्को का क्या अर्थ है?",
    choices: ["यौन अपराध संरक्षण अधिनियम","यौन अपराध निवारण अधिनियम","यौन अपराधियों के लिए दंड अधिनियम","यौन अपराध और अपराध निवारण अधिनियम"],
    answer: 1
  },
  {
    question: ". कौन सी सरकारी संस्था भारत में पोस्को अधिनियम के कार्यान्वयन की देखरेख करती है?",
    choices: ["महिला एवं बाल विकास मंत्रालय"," राष्ट्रीय मानवाधिकार आयोग"," राष्ट्रीय महिला आयोग"," राष्ट्रीय अपराध रिकॉर्ड ब्यूरो"],
    answer: 0
  },
  {
    question: "नाबालिग के यौन उत्पीड़न के लिए पोस्को अधिनियम के तहत अपराधी के लिए न्यूनतम कारावास की अवधि क्या है?",
    choices: ["3 वर्ष"," 5 वर्ष"," 7 वर्ष"," 10 वर्ष"],
    answer: 1
  },
  {
    question: "पॉस्को अधिनियम का मुख्य उद्देश्य किस आयु वर्ग की रक्षा करना है?",
    choices: ["12 वर्ष से कम", "14 वर्ष से कम", "16 वर्ष से कम", "18 वर्ष से कम"],
    answer: 3
  },
  {
    question: "किस प्रकार के यौन अपराध पोस्को अधिनियम के अंतर्गत आते हैं?",
    choices: ["केवल बलात्कार", "बलात्कार और वयस्कों के खिलाफ अन्य यौन अपराध", "केवल नाबालिगों के खिलाफ यौन अपराध", "कार्यस्थल में यौन उत्पीड़न"],
    answer: 2
  },
  {
    question: "पॉस्को अधिनियम के तहत किसे बच्चा माना जाता है?*",
    choices: ["14 वर्ष से कम का व्यक्ति", "16 वर्ष से कम का व्यक्ति", "18 वर्ष से कम का व्यक्ति", "12 वर्ष से कम का व्यक्ति"],
    answer: 2
  },
  {
    question: "क्या पॉस्को अधिनियम पूर्वप्रभावी रूप से लागू किया जा सकता है?",
    choices: ["हां, कुछ मामलों में","नहीं, यह केवल संभावित रूप से लागू होता है","हां, बिना किसी सीमा के","नहीं, यह संवैधानिक रूप से निषिद्ध है"],
    answer: 0
  },
  {
    question: "नाबालिग पीड़िता की ओर से पोस्को अधिनियम के तहत शिकायत कौन दर्ज कर सकता है?",
    choices: ["केवल पीड़ित के माता-पिता", "कोई भी जिम्मेदार व्यक्ति", "केवल पीड़ित", "पुलिस अधिकारी"],
    answer: 1
  },
  {
    question: "पॉस्को अधिनियम के तहत बाल यौन शोषण के मामले की रिपोर्ट न करने पर क्या सज़ा है?",
    choices: ["50,000 रुपये का जुर्माना", "6 महीने तक की कैद", "जुर्माना और कारावास दोनों", "3 महीने के लिए सामुदायिक सेवा"],
    answer: 2
  },

  {
    question: "क्या पॉस्को अधिनियम के तहत यौन अपराध की पीड़िता की पहचान सुरक्षित है?",
    choices: ["नहीं, यह सार्वजनिक जानकारी है", "हां, इसे हमेशा गोपनीय रखा जाता है", "केवल कुछ मामलों में", "केवल पीड़ित द्वारा अनुरोध किए जाने पर"],
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