import { Recipe } from './../recipe.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, EventEmitter, Output, OnDestroy} from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit, OnDestroy {
  //@Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes:Recipe[] =  [];
  subscripton: Subscription;
  
  //new Recipe('A Test Recipe','this is simply a test','https://cdn.pixabay.com/photo/2017/04/08/14/37/kitchen-2213422_960_720.jpg');
  constructor(private recipeService: RecipeService,
              private router: Router,
            private route: ActivatedRoute) { }

  ngOnInit() {
   this.subscripton =  this.recipeService.recipesChanged.subscribe(
        (recipes1: Recipe[]) => {
          this.recipes = recipes1;
        }
    );
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy(){
      this.subscripton.unsubscribe();
  }

  // onRecipeSelected(recipe: Recipe){  
  //   this.recipeWasSelected.emit(recipe);
  // }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
