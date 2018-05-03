import { Ingredient } from './../../shared/ingredient.model';
import { Recipe } from './../recipe.model';
import * as RecipeActions from './recipe.actions';
import * as fromApp from '../../ngrx/app.reducer';

export interface FeatureState extends fromApp.AppState{
    recipes: State
}

export interface State{
    recipes: Recipe[];
}

const initialState = {
     recipes: [
        new Recipe('Tasty Schnitzel',
            'A super-tasty schntizel - awesome',
            'https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 10)
            ]),
        new Recipe('A Test Recipe2', 'What another great recipe', 'https://static.pexels.com/photos/461198/pexels-photo-461198.jpeg', [
            new Ingredient('Sauce', 2),
            new Ingredient('pasta', 10)
        ]),
        new Recipe('A Test Recipe3', 'This is a wonderful thanksgiving', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Aloo_chat_Recipe.JPG/1280px-Aloo_chat_Recipe.JPG', [
            new Ingredient('turkey', 1),
            new Ingredient('green beans', 110)
        ])
    ]
};



export function recipeReducer (state=initialState ,action: RecipeActions.RecipeActions) {
    switch(action.type){
        case (RecipeActions.SET_RECIPES):
        return {
            ...state,
            recipes: [...action.payload]
        };
        case(RecipeActions.ADD_RECIPE):
        return{
            ...state,
            recipes: [...state.recipes, action.payload]
        };

        case(RecipeActions.UPDATE_RECIPE):
            const recipe = state.recipes[action.payload.index];
            const updatedRecipe = {
                ...recipe,
                ...action.payload.updatedRecipe
            };
            const recipes = [...state.recipes];
            recipes[action.payload.index] = updatedRecipe;
        return{
            ...state,
            recipes: recipes
        };

        case(RecipeActions.DELETE_RECIPE):
        const oldRecipes = [...state.recipes];
        oldRecipes.splice(action.payload, 1);
        return{
            ...state,
            recipes: oldRecipes
        };
    
    default:
    return state;
    }

}