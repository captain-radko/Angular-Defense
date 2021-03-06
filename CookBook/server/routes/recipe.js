const express = require("express");
const authCheck = require("../middleware/auth-check");
const Recipe = require("../models/Recipe");

const router = new express.Router();

function validateRecipeForm(payload) {
  const errors = {};
  let isFormValid = true;
  let message = "";

  if (!payload || typeof payload.image !== "string") {
    isFormValid = false;
    errors.image = "Please provide a valid image";
  }

  if (!payload || typeof payload.title !== "string") {
    isFormValid = false;
    errors.title = "Please provide a title";
  }

  if (!payload || typeof payload.ingredients !== "string") {
    isFormValid = false;
    errors.ingredients = "Please provide at least one ingredient";
  }

  if (!payload || typeof payload.recipeText !== "string") {
    isFormValid = false;
    errors.recipeText = "Recipe cannot be blank";
  }

  if (!isFormValid) {
    message = "All fields are required";
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}

router.post("/all/add", authCheck, (req, res) => {
  const recipeObj = req.body;
  recipeObj.creator = req.user._id;
  const validationResult = validateRecipeForm(recipeObj);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });
  }

  Recipe.create(recipeObj)
    .then(() => {
      res.status(200).json({
        success: true,
        message: "Recipe added successfully.",
        data: recipeObj
      });
    })
    .catch(err => {
      console.log(err);
      let message = "Something went wrong :( Check the form for errors.";
      return res.status(200).json({
        success: false,
        message: message
      });
    });
});

router.get("/all/recipes", (req, res) => {
  Recipe.find({}).then(recipe => {
    return res.status(200).json(recipe);
  });
});

router.get("/", (req, res) => {
  Recipe.find({}).then(recipe => {
    return res.status(200).json(recipe);
  });
});

router.get("/all/recipes/mine", authCheck, (req, res) => {
  const user = req.user._id;

  Recipe.find({ creator: user }).then(recipe => {
    return res.status(200).json(recipe);
  });
});

router.get("/details/:id", (req, res) => {
  const id = req.params.id;
  Recipe.findById(id).then(recipe => {
    if (!recipe) {
      return res.status(404).json({
        success: false,
        message: "Entry does not exists!"
      });
    }

    let response = {
      id,
      image: recipe.image,
      title: recipe.title,
      ingredients: recipe.ingredients,
      recipeText: recipe.recipeText,
      date: recipe.date,
      creator: recipe.creator
    };
    res.status(200).json(response);
  });
});

router.delete("/delete/:id", authCheck, (req, res) => {
  const id = req.params.id;
  const user = req.user._id;

  Recipe.findById(id).then(recipe => {
    if (!recipe) {
      return res.status(200).json({
        success: false,
        message: "Recipe does not exists!"
      });
    }

    if (
      recipe.creator.toString() != user &&
      !req.user.roles.includes("Admin")
    ) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized!"
      });
    }

    Recipe.findByIdAndDelete(id).then(() => {
      return res.status(200).json({
        success: true,
        message: "Recipe deleted successfully!"
      });
    });
  });
});

router.put("/all/edit/:id", authCheck, (req, res) => {
  const id = req.params.id;
  const recipe = req.body;

  if (!recipe) {
    return res.status(404).json({
      success: false,
      message: "Recipe does not exists!"
    });
  }

  const validationResult = validateRecipeForm(recipe);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });
  }

  Recipe.findByIdAndUpdate(id, recipe).then(() => {
    return res.status(200).json({
      success: true,
      message: "Recipe edited successfully!"
    });
  });
});

module.exports = router;
