const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    image: {
        type: mongoose.Schema.Types.String,
        required: true
    },
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
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;