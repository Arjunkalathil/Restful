const express = require('express');
const app = express();

app.use(express.json());

const subjects = 
[
    { id: 1, name: 'maths'},
    { id: 2, name: 'chemistry'},
    { id: 3, name: 'physics'},
    { id: 4, name: 'computer science'},
];

app.get('/', (req, res) => {
    res.send('WELCOME!!!!');
});

app.get('/api/subjects', (req, res) => {
    res.send(subjects);
});

app.post('/api/subjects', (req, res) => {
    const subject = 
    {
      id: subjects.length + 1,
      name: req.body.name
    };
    subjects.push(subject);
    res.send(subject);
});

app.put('/api/subjects/:id', (req, res) => {
    const subject = subjects.find(c => c.id === parseInt(req.params.id));
    if (!subject) res.status(400).send('Invalid input or object invalid.');
    
    subject.name = req.body.name;
    res.status(201).send(subject);
});

app.get('/api/subjects/:id', (req, res) => {
  const subject = subjects.find(c => c.id === parseInt(req.params.id));
  if (!subject) res.status(400).send('Invalid input or object invalid.');
  res.status(201).send(subject);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.group(`listening on port ${port}...`));