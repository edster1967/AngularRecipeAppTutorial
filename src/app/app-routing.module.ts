import { AuthGuard } from './auth/auth-guard.service';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
//import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    //{ path:'', redirectTo: '/recipes', pathMatch: 'full' },
    { path:'', component: HomeComponent },
    { path:'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
    { path:'shoppingList', component: ShoppingListComponent },
    
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}