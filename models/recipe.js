
const mongoose = require('mongoose')
    
  
const recipeSchema = mongoose.Schema({
  name: String,
  chef: String,
  ingredients: String,
  prepTime: Number,
  rating: Number,
})

module.exports= mongoose.model('Recipe', recipeSchema)



  