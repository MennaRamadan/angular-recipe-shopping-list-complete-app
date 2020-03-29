import { NgModule } from "@angular/core";
import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';

//you will not make this if we use provideIn root in case of creating service
@NgModule({
    providers: [
        RecipeService,
        ShoppingListService
    ]
})
export class CoreModule {}