const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
const questionStore = [
  {
    question: "What is the formula for calculating the area of a circle?",
    subject: "Mathematics",
    topic: "Geometry",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    subject: "Literature",
    topic: "Drama",
    difficulty: "Medium",
    marks: 5,
  },
  {
    question: "What is the capital of Japan?",
    subject: "Geography",
    topic: "World Capitals",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "In which year did the World War II end?",
    subject: "History",
    topic: "World War II",
    difficulty: "Medium",
    marks: 5,
  },
  {
    question: "Define photosynthesis.",
    subject: "Biology",
    topic: "Plant Biology",
    difficulty: "Hard",
    marks: 5,
  },
  {
    question: "Name the scientist who formulated the laws of motion.",
    subject: "Physics",
    topic: "Classical Mechanics",
    difficulty: "Medium",
    marks: 5,
  },
  {
    question:
      "What is the purpose of the ozone layer in the Earth's atmosphere?",
    subject: "Environmental Science",
    topic: "Atmosphere",
    difficulty: "Hard",
    marks: 5,
  },
  {
    question: "Who is known as the 'Father of Computer Science'?",
    subject: "Computer Science",
    topic: "History of Computing",
    difficulty: "Medium",
    marks: 5,
  },
  {
    question: "What is the significance of the Magna Carta in history?",
    subject: "Law",
    topic: "Legal History",
    difficulty: "Hard",
    marks: 5,
  },
  {
    question: "Solve the equation: 2x + 5 = 15",
    subject: "Mathematics",
    topic: "Algebra",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "What is the formula for calculating the area of a rectangle?",
    subject: "Mathematics",
    topic: "Geometry",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Who wrote the novel 'To Kill a Mockingbird'?",
    subject: "Literature",
    topic: "Modern Classics",
    difficulty: "Medium",
    marks: 5,
  },
  {
    question: "What is the capital of Australia?",
    subject: "Geography",
    topic: "World Capitals",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "In which year did the French Revolution begin?",
    subject: "History",
    topic: "French Revolution",
    difficulty: "Medium",
    marks: 5,
  },
  {
    question: "Define mitosis in cellular biology.",
    subject: "Biology",
    topic: "Cell Division",
    difficulty: "Hard",
    marks: 5,
  },
  {
    question: "Name the laws of thermodynamics.",
    subject: "Physics",
    topic: "Thermodynamics",
    difficulty: "Medium",
    marks: 5,
  },
  {
    question: "Explain the greenhouse effect and its impact on climate change.",
    subject: "Environmental Science",
    topic: "Climate Science",
    difficulty: "Hard",
    marks: 5,
  },
  {
    question: "Who is the creator of the Python programming language?",
    subject: "Computer Science",
    topic: "Programming Languages",
    difficulty: "Medium",
    marks: 5,
  },
  {
    question: "What is the principle of judicial review?",
    subject: "Law",
    topic: "Constitutional Law",
    difficulty: "Hard",
    marks: 5,
  },
  {
    question: "Solve the quadratic equation: x^2 - 4x + 4 = 0",
    subject: "Mathematics",
    topic: "Algebra",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Who discovered penicillin?",
    subject: "Medicine",
    topic: "Medical History",
    difficulty: "Medium",
    marks: 5,
  },
  {
    question: "What is the concept of supply and demand in economics?",
    subject: "Economics",
    topic: "Microeconomics",
    difficulty: "Medium",
    marks: 5,
  },
  {
    question: "Name the planets in our solar system in order from the sun.",
    subject: "Astronomy",
    topic: "Solar System",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Who painted the Mona Lisa?",
    subject: "Art",
    topic: "Renaissance Art",
    difficulty: "Medium",
    marks: 5,
  },
  {
    question: "Define the concept of entropy in chemistry.",
    subject: "Chemistry",
    topic: "Thermodynamics",
    difficulty: "Hard",
    marks: 5,
  },
  {
    question: "What is the purpose of the United Nations?",
    subject: "International Relations",
    topic: "Global Organizations",
    difficulty: "Medium",
    marks: 5,
  },
  {
    question: "Who is credited with the theory of relativity?",
    subject: "Physics",
    topic: "Relativity",
    difficulty: "Hard",
    marks: 5,
  },
  {
    question: "What is the difference between a plant cell and an animal cell?",
    subject: "Biology",
    topic: "Cell Biology",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Explain the concept of artificial intelligence.",
    subject: "Computer Science",
    topic: "Artificial Intelligence",
    difficulty: "Medium",
    marks: 5,
  },
  {
    question: "Discuss the impact of globalization on culture.",
    subject: "Sociology",
    topic: "Globalization",
    difficulty: "Hard",
    marks: 5,
  },
  {
    question: "What is the chemical symbol for gold?",
    subject: "Chemistry",
    topic: "Periodic Table",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Who wrote '1984'?",
    subject: "Literature",
    topic: "Dystopian Fiction",
    difficulty: "Medium",
    marks: 5,
  },
  {
    question: "What is the currency of Brazil?",
    subject: "Economics",
    topic: "World Currencies",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "In which year did the Berlin Wall fall?",
    subject: "History",
    topic: "Cold War",
    difficulty: "Medium",
    marks: 5,
  },
  {
    question: "Explain the process of cellular respiration.",
    subject: "Biology",
    topic: "Cell Metabolism",
    difficulty: "Hard",
    marks: 5,
  },
  {
    question: "Name the three laws of robotics proposed by Isaac Asimov.",
    subject: "Computer Science",
    topic: "Robotics",
    difficulty: "Medium",
    marks: 5,
  },
  {
    question: "Define sustainable development in environmental science.",
    subject: "Environmental Science",
    topic: "Sustainability",
    difficulty: "Hard",
    marks: 5,
  },
  {
    question: "Who is considered the 'Father of the Internet'?",
    subject: "Computer Science",
    topic: "Internet History",
    difficulty: "Medium",
    marks: 5,
  },
  {
    question: "Discuss the concept of judicial activism.",
    subject: "Law",
    topic: "Judicial Process",
    difficulty: "Hard",
    marks: 5,
  },
  {
    question: "Solve the trigonometric equation: sin(x) = 0.5",
    subject: "Mathematics",
    topic: "Trigonometry",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Who won the Nobel Prize in Physics in 2020?",
    subject: "Physics",
    topic: "Nobel Laureates",
    difficulty: "Medium",
    marks: 5,
  },
  {
    question: "Define the concept of elasticity in economics.",
    subject: "Economics",
    topic: "Microeconomics",
    difficulty: "Medium",
    marks: 5,
  },
  {
    question: "Name the largest moon of Jupiter.",
    subject: "Astronomy",
    topic: "Solar System",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Who painted 'Starry Night'?",
    subject: "Art",
    topic: "Post-Impressionism",
    difficulty: "Medium",
    marks: 5,
  },
  {
    question: "What is Avogadro's number?",
    subject: "Chemistry",
    topic: "Mole Concept",
    difficulty: "Hard",
    marks: 5,
  },
  {
    question: "Discuss the concept of human rights in international law.",
    subject: "Law",
    topic: "Human Rights",
    difficulty: "Medium",
    marks: 5,
  },
  {
    question: "What is the significance of the Hubble Space Telescope?",
    subject: "Astronomy",
    topic: "Space Exploration",
    difficulty: "Hard",
    marks: 5,
  },
  {
    question: "Compare and contrast meiosis and mitosis.",
    subject: "Biology",
    topic: "Cell Division",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Explain the concept of Big Data in computer science.",
    subject: "Computer Science",
    topic: "Big Data",
    difficulty: "Medium",
    marks: 5,
  },
  {
    question: "Discuss the impact of social media on society.",
    subject: "Sociology",
    topic: "Social Media",
    difficulty: "Hard",
    marks: 5,
  },
];

function generateQuestionPaper(totalMarks, difficultyDistribution) {
  const questionPaper = [];
  const selectedQuestions = new Set();


  function getRandomQuestion(difficulty) {
    const filteredQuestions = questionStore.filter(q => q.difficulty === difficulty && !selectedQuestions.has(q));
    if (filteredQuestions.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
    const selectedQuestion = filteredQuestions[randomIndex];
    selectedQuestions.add(selectedQuestion);
    return selectedQuestion;
  }
  const difficultyLevels = Object.keys(difficultyDistribution);
  for (const difficulty of difficultyLevels) {
    const marksForDifficulty = totalMarks * difficultyDistribution[difficulty];
    let remainingMarks = marksForDifficulty;

    while (remainingMarks > 0) {
      const question = getRandomQuestion(difficulty);
      if (question) {
        const allocatedMarks = Math.min(remainingMarks, question.marks);
        questionPaper.push({ ...question, allocatedMarks });
        remainingMarks -= allocatedMarks;
      } else {
        break; 
      }
    }
  }

  return questionPaper;
}

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", (req, res) => {
  console.log(questionStore);
  res.render("index",{questionStore});
});

app.post("/processForm", (req, res) => {
  const formData = req.body;
  // if((formData.easy + formData.medium+formData.hard)>100){
  //   res.render("error");
  // }
  const difficultyDist = { Easy: (formData.easy)/100, Medium: (formData.medium)/100, Hard: (formData.hard)/100};
  const questionPaper = generateQuestionPaper(formData.marks, difficultyDist);
  res.render("display",{questionPaper});
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
