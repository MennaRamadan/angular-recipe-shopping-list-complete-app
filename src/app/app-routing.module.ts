import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';


const appRoutes: Routes = [
    //full mean only redirect here if the full path was empty
    {path: '', redirectTo: '/recipes', pathMatch:'full'},
    {path: 'recipes' , component: RecipesComponent,  children: [
        {path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipesEditComponent},
        {path: ':id', component: RecipeDetailComponent},
        { path: ':id/edit', component: RecipesEditComponent}

    ] },
    {path: 'shopping-list', component: ShoppingListComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})
export class AppRoutingModule{

}