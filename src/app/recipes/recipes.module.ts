import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipesComponent } from './recipes.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipesEditComponent } from './recipes-edit/recipes-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipesRoutingModule } from './recipes.routing';

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        RecipeStartComponent,
        RecipesEditComponent
    ],
    //it is a solution to make this module know about routing 
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        RecipesRoutingModule
    ],
    //here we use exports to be able to use any module outside this module, in any module that import this module
    exports: [
        RecipesComponent,
        RecipeListComponent,
        RecipeDetailComponent, 
        RecipeItemComponent,
        RecipeStartComponent,
        RecipesEditComponent
    ]
})
export class RecipesModule {

}