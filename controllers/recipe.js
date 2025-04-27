const express = require('express');
const router = express.Router();
const recipes = require('../models/recipe')

router.get("/", (req,res)=>{
    res.json(recipes)
});

router.post('/', async (req, res) => {
    const { name, chef, ingredients, prepTime, rating } = req.body;
  
    const recipe = new Recipe({
      name,
      chef,
      ingredients,
      prepTime,
      rating
    });
  
    try {
      const savedRecipe = await recipe.save();
      res.status(201).json(savedRecipe);
    } catch (error) {
      res.status(400).json({ error: 'Failed to save recipe', details: error.message });
    }
  });
module.exports = router