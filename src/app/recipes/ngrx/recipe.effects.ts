import { Store } from '@ngrx/store';
import { SET_RECIPES } from './recipe.actions';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Effect, Actions } from "@ngrx/effects";
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/withLatestFrom'
import * as RecipeActions from '../ngrx/recipe.actions';
import { Recipe } from '../recipe.model';
import * as fromRecipe from '../ngrx/recipe.reducer';

@Injectable()
export class RecipeEffects {

    constructor(private actions$: Actions, private httpClient: HttpClient,
        private store: Store<fromRecipe.FeatureState>) { }

    @Effect()
    recipeFetch = this.actions$
        .ofType(RecipeActions.FETCH_RECIPES)
        .switchMap((action: RecipeActions.FetchRecipes) => {
            return this.httpClient.get<Recipe[]>('https://ares-recipe-book.firebaseio.com/recipes.json?',
                {
                    observe: 'body',
                    responseType: 'json'
                })
                .map(
                    (recipes) => {
                        console.log(recipes);
                        for (let recipe of recipes) {
                            if (!recipe['ingredients']) {
                                recipe['ingredients'] = [];
                            }
                        }
                        return {
                            type: RecipeActions.SET_RECIPES,
                            payload: recipes
                        };
                    }
                )

        });


    @Effect({dispatch: false})
    recipeStore = this.actions$
    .ofType(RecipeActions.STORE_RECIPES)
    .withLatestFrom(this.store.select('recipes'))
    .switchMap(([action, state])=>{
        const req = new HttpRequest('PUT', 'https://ares-recipe-book.firebaseio.com/recipes.json?'
        , state.recipes, {reportProgress: true});
        return this.httpClient.request(req);
    });
 
}