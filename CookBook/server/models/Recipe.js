const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    ingredients: [{
        type: mongoose.Schema.Types.String,
        required: true
    }],
    recipeText: {
        type: mongoose.Schema.Types.String,
        required: true
    },
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;