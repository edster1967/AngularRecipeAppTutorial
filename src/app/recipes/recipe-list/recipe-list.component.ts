import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  //@Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes:Recipe[] =  [];
  //new Recipe('A Test Recipe','this is simply a test','https://cdn.pixabay.com/photo/2017/04/08/14/37/kitchen-2213422_960_720.jpg');
  constructor(private recipeService: RecipeService,
              private router: Router,
            private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
  // onRecipeSelected(recipe: Recipe){  
  //   this.recipeWasSelected.emit(recipe);
  // }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
