import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
//import { AuthGuard } from './auth/auth-guard.service';
//import { AuthService } from './auth/auth.service';
//import { RecipeService } from './recipes/recipe.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
//import { ShoppingListService } from './shopping-list/shoppinglist.service';
//import { DataStorageService } from 'app/shared/data-storage.service';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
//import { HeaderComponent } from './core/header/header.component';
//import { HomeComponent } from 'app/core/home/home.component';
//mport { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule
  ],
  //providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
