import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppinglist.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();


    private recipes: Recipe[] = [
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
    ];

    constructor(private slService: ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id:number){
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
       this.slService.addIngredients(ingredients);
    }

}