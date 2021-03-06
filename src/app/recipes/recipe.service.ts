//import { ADD_INGREDIENTS, AddIngredients } from './../shopping-list/ngrx/shopping-list.actions';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
//import { ShoppingListService } from '../shopping-list/shopping-list.service';
import * as ShoppingListActions from '../shopping-list/ngrx/shopping-list.actions';


@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

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

  constructor(private store: Store<{shoppingList: {ingredients: Ingredient[]}}>) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    //this.slService.addIngredients(ingredients);
    this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}