import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './../shopping-list/shopping-list.service';

//we use this to be able to inject a service from a service
@Injectable()
export class RecipeService{

    // recipeSelected = new EventEmitter<Recipe>();

     recipes : Recipe[] = [
        new Recipe('A Test Recipe',
         'This is description', 
         'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/master/pass/Basically-Gojuchang-Chicken-Recipe-Wide.jpg',
         [ new Ingredient('Meat', 1)]),
        new Recipe('A Test Recipe 2', 
        'This is description 2',
         'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/8/6/0/WU2301_Four-Cheese-Pepperoni-Pizzadilla_s4x3.jpg.rend.hgtvcom.826.620.suffix/1565115622965.jpeg',
         [ new Ingredient('Egg', 1)])
      ];

    constructor(private shoppingListService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }  

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}