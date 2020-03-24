import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

import { Recipe } from './../recipe.model';
import { RecipeService } from "../recipe.service";

@Injectable({providedIn: 'root'})
export class RecipesResolverService implements Resolve<Recipe[]>{


    constructor(private recipeService: RecipeService){}


    //here is to gaurd accessing recipe details through URL
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const recipes = this.recipeService.getRecipes();

        if(recipes.length > 0){
            return this.recipeService.fetchRecipes(); 
        }
        else{
            return recipes; 
        }
    }
}