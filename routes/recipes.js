const express = require('express');

const router = express.Router();

const recipes = [
  {
    name: 'recipeTest',
    ingredients: 'sugar on top please',
  },
];

router.get('/', (req, res) => {
  res.send(recipes);
});

module.exports = router;
