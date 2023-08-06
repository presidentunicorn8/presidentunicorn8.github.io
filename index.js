const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path'); // Import the 'path' module

app.use(bodyParser.json());

const tasks = [];

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const task = req.body.task;
  tasks.push(task);
  res.sendStatus(201);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
