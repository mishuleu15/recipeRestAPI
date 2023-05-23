const express = require('express');
const recipeRoutes = require('./routes/recipes');

const app = express();
const PORT = 5000;

app.use('/recipes', recipeRoutes);

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from server</h1>');
});

app.listen(PORT, () => {
  console.log('App listening on port ' + PORT + '!');
});
