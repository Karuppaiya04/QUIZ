// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sample questions list
const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    id: 2,
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  },
  {
    id: 3,
    question: "Who is national bird?",
    options: ["peacock", "crow", "pigeon", "eagle"],
    answer: "peacock"
  },
  // Add more questions as needed
];

// Endpoint to get questions
app.get('/questions', (req, res) => {
  // For a simple demo, returning all questions
  res.json(questions);
});

// Endpoint to submit quiz answers
app.post('/submit', (req, res) => {
  const { answers } = req.body; // expects an object like { "1": "Paris", "2": "4" }
  let score = 0;
  questions.forEach(q => {
    if (answers[q.id] && answers[q.id] === q.answer) {
      score++;
    }
  });
  res.json({ score, total: questions.length });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
