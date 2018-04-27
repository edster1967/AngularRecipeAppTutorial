import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
// import { HttpEvent, HttpEventType } from '@angular/common/http';

import { DataStorageService } from '../../shared/data-storage.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../../ngrx/app.reducer';
import * as fromAuth from '../../auth/ngrx/auth.reducer';
import * as AuthActions from '../../auth/ngrx/auth.actions';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{
  authState: Observable<fromAuth.State>;
  
  constructor(private dataStorageService: DataStorageService,
              
            private store: Store<fromApp.AppState>) {
  }

  ngOnInit(){
      this.authState = this.store.select('auth');
  }
  
  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }
}
