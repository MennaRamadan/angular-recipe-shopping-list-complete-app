import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';


const appRoutes: Routes = [
    //full mean only redirect here if the full path was empty
    {path: '', redirectTo: '/recipes', pathMatch:'full'},
    //applying lazy loading 
    {path: 'recipes' , loadChildren: './recipes/recipes.module#RecipesModule'},
    {path: 'shopping-list' , loadChildren: './shopping-list/shopping-list-.module#ShoppingListModule'}
    //this is another way
    // {path: 'recipes' , loadChildren: () => import('./recipes/recipes.module').then(
    //     m => m.RecipesModule
    // ) }

]

@NgModule({
    //the second parameter to allow pre lazy loading to pre loading modules if there is time
    imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy : PreloadAllModules} )],
    exports: [RouterModule]
})
export class AppRoutingModule{

}