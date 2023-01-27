const express = require('express');
const app = express();
const port = 3000;
let tasks = [];
app.use(express.json());
let id = 0;
app.get('/tasks', (req, res) => {
  res.json(tasks);
});
app.get('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const idx =tasks.findIndex(task => task.id === id);
  res.json(tasks[idx]);
});
app.post('/tasks', (req, res) => {
  id += 1;
  const task = req.body;
  tasks.push({ ...task, id, isCompleted: false });
  res.status(201).send(`Added task id:${id}`);
});
app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const idx =tasks.findIndex(task => task.id=== id);
  tasks[idx]['task'] = req.body.task;
  res.send(`Edited task id:${id}`);
});
app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const idx =tasks.findIndex(task => task.id=== id);
  tasks.pop(idx);
  res.send(`Deleted task id:${id}`);
});
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));