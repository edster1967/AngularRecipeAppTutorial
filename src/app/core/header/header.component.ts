import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
// import { HttpEvent, HttpEventType } from '@angular/common/http';

import { Store } from '@ngrx/store';
import * as fromApp from '../../ngrx/app.reducer';
import * as fromAuth from '../../auth/ngrx/auth.reducer';
import * as AuthActions from '../../auth/ngrx/auth.actions';
import * as RecipeActions from '../../recipes/ngrx/recipe.actions';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{
  authState: Observable<fromAuth.State>;
  
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(){
      this.authState = this.store.select('auth');
  }
  
  onSaveData() {
    this.store.dispatch(new RecipeActions.StoreRecipes());
  }

  onFetchData() {
    this.store.dispatch(new RecipeActions.FetchRecipes());
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }
}
