export interface IRecipe {
    _id: string;
    image: string;
    title: string;
    ingredients: [string];
    recipeText: string;
    date: string;
    creator: string;
};