const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' }
];

// Endpoint para obter todos os usuários
app.get('/users', (req, res) => {
  res.json(users);
});

// Endpoint para obter um usuário por ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Endpoint para adicionar um novo usuário
app.post('/users', (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);

  res.status(201).json(newUser);
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});