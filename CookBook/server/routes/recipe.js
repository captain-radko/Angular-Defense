const express = require('express');

const router = new express.Router();

function createFormValidator(payload) {
    const errors = {}
    let isFormValid = true
    let message = ''

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
        message = 'Check the form for errors';
    }

    return {
        success: isFormValid,
        message,
        errors
    }
}

module.exports = router;