import * as fromShoppingList from '../shopping-list/ngrx/shopping-list.reducer'
import * as fromAuth from '../auth/ngrx/auth.reducer'
import { ActionReducerMap } from '@ngrx/store';


export interface AppState{
    shoppingList: fromShoppingList.State,
    auth: fromAuth.State

}

export const reducers: ActionReducerMap<AppState> = {
    shoppingList: fromShoppingList.shoppingListReducer,
    auth: fromAuth.authReducer
};
