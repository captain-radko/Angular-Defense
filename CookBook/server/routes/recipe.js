const express = require('express')
const authCheck = require('../middleware/auth-check');
const Recipe = require('../models/Recipe');

const router = new express.Router()

function validateRecipeForm(payload) {
  const errors = {}
  let isFormValid = true
  let message = ''

  if (!payload || typeof payload.image !== 'string') {
    isFormValid = false
    errors.image = 'Provide a valid image'
  }

  if (!payload || typeof payload.title !== 'string') {
    isFormValid = false;
    errors.title = 'Please provide a title';
  }

  if (!payload || typeof payload.ingredients !== 'string') {
    isFormValid = false;
    errors.ingredients = 'Please provide at least one ingredient';
  }

  if (!payload || typeof payload.recipeText !== 'string') {
    isFormValid = false;
    errors.recipeText = 'Recipe cannot be blank';
  }

  if (!isFormValid) {
    message = 'Check the form for errors.'
  }

  return {
    success: isFormValid,
    message,
    errors
  }
}

router.post('/all/add', authCheck, (req, res) => {
  const recipeObj = req.body
  recipeObj.creator = req.user._id
  const validationResult = validateRecipeForm(recipeObj)
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  Recipe.create(recipeObj)
    .then(() => {
      res.status(200).json({
        success: true,
        message: 'Recipe added successfully.',
        data: recipeObj
      })
    }).catch((err) => {
      console.log(err)
      let message = 'Something went wrong :( Check the form for errors.'
      return res.status(200).json({
        success: false,
        message: message
      })
    })
})

router.get('/all/recipes', authCheck, (req, res) => {
  Recipe.find({})
    .then((recipe) => {
      return res.status(200).json(recipe)
    })
})

router.get('/', (req, res) => {
  Recipe.find({})
    .then((recipe) => {
      return res.status(200).json(recipe)
    })
})

router.get('/all/recipes/mine', authCheck, (req, res) => {
  const user = req.user._id

  Recipe.find({ creator: user })
    .then((recipe) => {
      return res.status(200).json(recipe)
    })
})

router.get('/details/:id', (req, res) => {
  const id = req.params.id
  Recipe.findById(id)
    .then((recipe) => {
      if (!recipe) {
        return res.status(404).json({
          success: false,
          message: 'Entry does not exists!'
        })
      }

      let response = {
        id,
        image: recipe.image,
        title: recipe.title,
        ingredients: recipe.ingredients,
        recipeText: recipe.recipeText,
      }
      res.status(200).json(response)
    })
})

module.exports = router
