const quizData = [
  {
    question: "How do you usually handle problems?",
    answers: [
      { text: "Face them head-on with confidence", chars: ["Rumi","Jinu"] },
      { text: "Find a clever workaround", chars: ["Zoey","Bobby"] },
      { text: "Charm my way through", chars: ["Romance","Baby","Mystery","Abby"] },
      { text: "Quietly analyze before acting", chars: ["Mira", "Celine","Derpy Tiger" ] },
    ]
  },
  {
    question: "Pick a weapon for demon hunting:",
    answers: [
      { text: "Sword", chars: "Rumi" },
      { text: "Whip", chars: "Romance" },
      { text: "Crossbow", chars: "Zoey" },
      { text: "Magic Staff", chars: "Mira" },
      { text: "Dual Daggers", chars: "Jinu" },
      { text: "Healing Spells", chars: "Celine" },
      { text: "Tech Gadgets", chars: "Bobby" }, 
      { text: "Fists and Feet", chars: "Abby" },
      { text: "Claws and Teeth", chars: "Derpy Tiger" } 
    ]
  },
  {
    question: "What’s your battle style?",
    answers: [
      { text: "Aggressive and bold", chars: ["Rumi","Jinu"] },
      { text: "Fast and unpredictable", chars: ["Zoey","Mystery"] },
      { text: "Calculated and precise", chars: ["Mira", "Bobby"] },
      { text: "Playful but effective", chars: ["Romance", "Baby"] },
      { text: "Supportive and strategic", chars: ["Celine", "Healer Han"] },
      { text: "Direct and powerful", chars: ["Abby", "Derpy Tiger"] }
    ]
  },
  {
    question: "Your ideal role in a team?",
    answers: [
      { text: "Leader", chars: "Rumi" },
      { text: "Strategist", chars: "Mira" },
      { text: "Troublemaker (in a fun way)", chars: "Romance" },
      { text: "The wildcard", chars: "Zoey" },
      { text: "The healer", chars: "Celine" },
      { text: "The tech expert", chars: "Bobby" },
      { text: "The fighter", chars: "Abby" }, 
      { text: "The loyal friend", chars: "Derpy Tiger" },
      { text: "The comic relief", chars: "Baby" },
    ]
  },
  {
    question: "How do you handle challenges?",
    answers: [
      { text: "Take charge confidently and lead the way.", chars: ["Rumi", "Jinu"] },
      { text: "Stay calm and think strategically before acting.", chars: ["Mystery", "Mira"] },
      { text: "Face it head-on, no fear.", chars: ["Abby", "Zoey"] },
      { text: "Use charm and wit to navigate through.", chars: ["Romance", "Baby"] },
      { text: "Support others behind the scenes.", chars: ["Bobby", "Celine"] },
      { text: "Help others recover and keep spirits up.", chars: ["Healer Han", "Derpy Tiger"] }
    ]
  },
  {
    question: "What’s your social style?",
    answers: [
      { text: "Charismatic and inspiring; people follow you naturally.", chars: ["Rumi", "Jinu"] },
      { text: "Mysterious and hard to read; you keep a few secrets.", chars: ["Mystery", "Romance"] },
      { text: "Playful and fun; you’re the life of the party.", chars: ["Baby", "Derpy Tiger"] },
      { text: "Straightforward and honest; no time for games.", chars: ["Abby", "Zoey"] },
      { text: "Caring and nurturing; you’re a great listener.", chars: ["Celine", "Healer Han"] },
      { text: "Organized and practical; you help keep things running smoothly.", chars: ["Bobby", "Mira"] }
    ]
  },
  {
    question: "What motivates you most?",
    answers: [
      { text: "Leading others to success and greatness.", chars: ["Rumi", "Jinu"] },
      { text: "Protecting your friends and loved ones.", chars: ["Abby", "Zoey", "Derpy Tiger"] },
      { text: "Solving mysteries and uncovering secrets.", chars: ["Mystery", "Romance"] },
      { text: "Helping others heal and grow.", chars: ["Celine", "Healer Han"] },
      { text: "Having fun and spreading joy.", chars: ["Baby", "Derpy Tiger"] },
      { text: "Achieving perfection in your craft or skill.", chars: ["Mira", "Bobby"] }
    ]
  },
  {
    question: "Which word describes you best?",
    answers: [
      { text: "Confident", chars: ["Rumi", "Jinu"] },
      { text: "Playful", chars: ["Baby", "Derpy Tiger"] },
      { text: "Loyal", chars: ["Abby", "Zoey"] },
      { text: "Mysterious", chars: ["Mystery", "Romance"] },
      { text: "Caring", chars: ["Celine", "Healer Han"] },
      { text: "Practical", chars: ["Bobby", "Mira"] }
    ]
  },
  {
    question: "If you had a superpower, what would it be?",
    answers: [
      { text: "Leadership & inspiration (boost others’ powers).", chars: ["Rumi", "Jinu"] },
      { text: "Stealth & intelligence (master of secrets).", chars: ["Mystery", "Romance"] },
      { text: "Strength & courage (fighter).", chars: ["Abby", "Zoey"] },
      { text: "Healing & protection.", chars: ["Celine", "Healer Han"] },
      { text: "Charm & mischief.", chars: ["Baby", "Derpy Tiger"] },
      { text: "Precision & skill (perfect dancer or fighter).", chars: ["Mira", "Bobby"] }
    ]
  },
  {
    question: "What’s your favorite way to spend free time?",
    answers: [
      { text: "Leading a group project or event.", chars: ["Rumi", "Jinu"] },
      { text: "Practicing a hobby like dancing or singing.", chars: ["Mira", "Bobby"] },
      { text: "Solving puzzles or mysteries.", chars: ["Mystery", "Romance"] },
      { text: "Hanging out with close friends and having fun.", chars: ["Baby", "Derpy Tiger"] },
      { text: "Training or physical activities to stay strong.", chars: ["Abby", "Zoey"] },
      { text: "Helping friends feel better or giving advice.", chars: ["Celine", "Healer Han"] }
    ]
  },
  {
    question: "How do people usually describe you?",
    answers: [
      { text: "Natural leader, confident and inspiring.", chars: ["Rumi", "Jinu"] },
      { text: "Quiet and mysterious, hard to figure out.", chars: ["Mystery", "Romance"] },
      { text: "Energetic and playful, always making people smile.", chars: ["Baby", "Derpy Tiger"] },
      { text: "Tough and dependable, a loyal friend.", chars: ["Abby", "Zoey"] },
      { text: "Wise and caring, someone to turn to for support.", chars: ["Celine", "Healer Han"] },
      { text: "Practical and organized, keeps everything in order.", chars: ["Bobby", "Mira"] }
    ]
  },
  {
    question: "If you were in a band, what would your role be?",
    answers: [
      { text: "Lead vocalist and face of the group.", chars: ["Rumi", "Jinu"] },
      { text: "Main dancer or visual.", chars: ["Mira", "Bobby"] },
      { text: "Rapper or sharp lyricist.", chars: ["Zoey", "Abby"] },
      { text: "The mysterious member who keeps fans guessing.", chars: ["Mystery", "Romance"] },
      { text: "The playful, charming one who lightens the mood.", chars: ["Baby", "Derpy Tiger"] },
      { text: "The supportive mentor or behind-the-scenes helper.", chars: ["Celine", "Healer Han"] }
    ]
  },
  {
    question: "What drives you to succeed?",
    answers: [
      { text: "Passion to be the best and inspire others.", chars: ["Rumi", "Jinu"] },
      { text: "Curiosity and desire to uncover truth.", chars: ["Mystery", "Romance"] },
      { text: "Protecting those you care about.", chars: ["Abby", "Zoey", "Derpy Tiger"] },
      { text: "Bringing happiness and fun to others.", chars: ["Baby", "Derpy Tiger"] },
      { text: "Helping others grow and heal.", chars: ["Celine", "Healer Han"] },
      { text: "Mastery of skills and precision.", chars: ["Mira", "Bobby"] }
    ]
  },
  {
    question: "What’s your conflict style?",
    answers: [
      { text: "Take charge and solve it head-on.", chars: ["Rumi", "Jinu"] },
      { text: "Observe and plan a strategic move.", chars: ["Mystery", "Romance"] },
      { text: "Stand firm and defend what you believe.", chars: ["Abby", "Zoey"] },
      { text: "Defuse with humor and charm.", chars: ["Baby", "Derpy Tiger"] },
      { text: "Mediate and support emotional healing.", chars: ["Celine", "Healer Han"] },
      { text: "Organize and structure a solution.", chars: ["Bobby", "Mira"] }
    ]
  },
  {
    question: "Your ideal vacation?",
    answers: [
      { text: "Leading a cultural or adventurous trip.", chars: ["Rumi", "Jinu"] },
      { text: "A peaceful retreat for self-reflection.", chars: ["Mystery", "Romance"] },
      { text: "An active trip full of hiking and sports.", chars: ["Abby", "Zoey"] },
      { text: "A fun, lively place with music and parties.", chars: ["Baby", "Derpy Tiger"] },
      { text: "A spa or wellness retreat.", chars: ["Celine", "Healer Han"] },
      { text: "A dance or performance workshop.", chars: ["Mira", "Bobby"] }
    ]
  },
  {
    question: "How do you recharge after a long day?",
    answers: [
      { text: "Spend time with close friends or team.", chars: ["Rumi", "Jinu"] },
      { text: "Alone time to think and relax.", chars: ["Mystery", "Romance"] },
      { text: "Physical exercise or training.", chars: ["Abby", "Zoey"] },
      { text: "Play games or have fun with others.", chars: ["Baby", "Derpy Tiger"] },
      { text: "Helping or caring for others.", chars: ["Celine", "Healer Han"] },
      { text: "Practicing your craft or hobby.", chars: ["Mira", "Bobby"] }
    ]
  },
  {
    question: "Pick a color that represents you best.",
    answers: [
      { text: "Red — passion and leadership.", chars: ["Rumi", "Jinu"] },
      { text: "Black — mystery and depth.", chars: ["Mystery", "Romance"] },
      { text: "Blue — calm and loyal.", chars: ["Mira", "Bobby", "Celine"] },
      { text: "Yellow — playful and cheerful.", chars: ["Baby", "Derpy Tiger"] },
      { text: "Green — healing and growth.", chars: ["Healer Han", "Celine"] },
      { text: "Orange — energetic and brave.", chars: ["Abby", "Zoey"] }
    ]
  },
  {
    question: "What’s your relationship with rules?",
    answers: [
      { text: "I set the rules and expect others to follow.", chars: ["Rumi", "Jinu"] },
      { text: "I bend rules when needed to get things done.", chars: ["Mystery", "Romance"] },
      { text: "I follow rules but stand up when unfair.", chars: ["Abby", "Zoey"] },
      { text: "I like to challenge rules with humor.", chars: ["Baby", "Derpy Tiger"] },
      { text: "I respect rules that help people.", chars: ["Celine", "Healer Han"] },
      { text: "I organize rules to make things efficient.", chars: ["Bobby", "Mira"] }
    ]
  },
  {
    question: "Choose a symbol that resonates with you.",
    answers: [
      { text: "Crown — leadership and responsibility.", chars: ["Rumi", "Jinu"] },
      { text: "Mask — mystery and secrets.", chars: ["Mystery", "Romance"] },
      { text: "Sword — bravery and strength.", chars: ["Abby", "Zoey"] },
      { text: "Heart — playfulness and love.", chars: ["Baby", "Derpy Tiger"] },
      { text: "Hands — healing and support.", chars: ["Celine", "Healer Han"] },
      { text: "Star — precision and excellence.", chars: ["Mira", "Bobby"] }
    ]
  }
  // You can continue adding up to all 15 questions here
];

const chars = {
  Rumi: {
    name: "Rumi",
    description: "Confident leader, charismatic, driven, creative, loyal.",
    image: "./ressources/rumi.jpg"
  },
  Romance: {
    name: "Romance",
    description: "Charming, mysterious, a bit mischievous, persuasive.",
    image: "./ressources/romance.jpg"
  },
  Zoey: {
    name: "Zoey",
    description: "Bold, witty, sharp-tongued, independent, loyal friend.",
    image: "./ressources/zoey.jpg"
  },
  Mira: {
    name: "Mira",
    description: "Quiet thinker, wise, mystical, gentle but powerful.",
    image: "./ressources/mira.jpg"
  },
  Jinu: {
    name:"Jinu",
    description: "Brooding leader, complex emotions, responsible, conflicted.",
    image: "./ressources/jinu.jpg"
  },
  Mystery: {
    name: "Mystery",
    description: "Enigmatic, secretive, strategic, intelligent.",
    image: "./ressources/mystery.jpg"
  },
  Abby: {
    name: "Abby",
    description: "Tough, direct, competitive, brave.",
    image:"./ressources/abby.jpg"
  },
  Baby: {
    name: "Baby",
    description: "Playful, innocent-seeming but clever, uses charm.",
    image: "./ressources/baby.jpg"
  },
  Bobby: {
    name: "Bobby",
    description: "Practical, organized, supportive, protective.",
    image: "./ressources/bobby.jpg"
  },
  Celine: {
    name: "Celine",
    description: "Wise mentor, nurturing, experienced, supportive.",
    image: "./ressources/celine.jpg"  
  },
  HealerHan: {
    name: "Healer Han",
    description: "Caring, eccentric, quirky, comic relief.",
    image: "./ressources/han.jpg"
  },
  DerpyTiger: {
    name: "Derpy Tiger",
    description: "Loyal, quirky, dependable, fun-loving.",
    image: "./ressources/tiger.jpg"
  }
};

// quiz.js

const quizContainer = document.getElementById("quiz-container");
const questionEl = document.getElementById("quiz-question");
const answersEl = document.getElementById("quiz-answers");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");

const resultSection = document.getElementById("quiz-result");
const resultName = document.getElementById("result-name");
const resultDescription = document.getElementById("result-description");
const resultImage = document.getElementById("result-image");

let currentQuestionIndex = 0;
const userSelections = []; // will store selected answer index per question

// For scoring
const scores = {};

// Initialize scores for all chars in quizData
Object.keys(chars).forEach(char => {
  scores[char] = 0;
});

// Show question and answers
function showQuestion(index) {
  const questionData = quizData[index];
  questionEl.textContent = questionData.question;

  // Clear previous answers
  answersEl.innerHTML = "";

  // Create buttons for each answer
  questionData.answers.forEach((answer, i) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = answer.text;
    btn.type = "button";

    btn.addEventListener("click", () => {
      selectAnswer(index, i);
    });

    answersEl.appendChild(btn);
  });

  // Manage buttons visibility
  prevBtn.disabled = index === 0;
  nextBtn.style.display = "none"; // hide Next button, we'll auto-move
  submitBtn.style.display = index === quizData.length - 1 ? "inline-block" : "none";
}

// When user picks an answer
function selectAnswer(questionIndex, answerIndex) {
  userSelections[questionIndex] = answerIndex;

  // Add scores for chosen answer
  const answerChars = quizData[questionIndex].answers[answerIndex].chars;
  if (Array.isArray(answerChars)) {
    answerChars.forEach(char => {
      if (scores[char] !== undefined) scores[char]++;
    });
  } else {
    if (scores[answerChars] !== undefined) scores[answerChars]++;
  }

  // Move to next question or show result
  if (questionIndex < quizData.length - 1) {
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
  } else {
    showResult();
  }
}

function showResult() {
  quizContainer.style.display = "none";
  resultSection.style.display = "block";

  // Find highest scoring char
  let maxScore = -1;
  let topChar = null;
  for (const char in scores) {
    if (scores[char] > maxScore) {
      maxScore = scores[char];
      topChar = char;
    }
  }

  const charData = chars[topChar];

  resultName.textContent = charData.name;
  resultDescription.textContent = charData.description || "";
  if (charData.image) {
    resultImage.src = charData.image;
    resultImage.style.display = "flex";
  } else {
    resultImage.style.display = "none";
  }
}

// Restart quiz on button click
document.getElementById("restart-btn").addEventListener("click", () => {
  // Reset everything
  currentQuestionIndex = 0;
  userSelections.length = 0;
  Object.keys(scores).forEach(char => (scores[char] = 0));

  resultSection.style.display = "none";
  quizContainer.style.display = "block";
  showQuestion(currentQuestionIndex);
});

// Initially show first question
showQuestion(currentQuestionIndex);