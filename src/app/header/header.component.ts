import { Component } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {

    constructor(private recipeService: RecipeService){};


    onSaveData(){
        this.recipeService.storeRecipes();
    }
    onDataFetch(){
        this.recipeService.fetchRecipes().subscribe();
    }
}