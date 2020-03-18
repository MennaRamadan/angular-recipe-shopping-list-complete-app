import { Subject } from 'rxjs';

import { Ingredient } from './../shared/ingredient.model';


export class ShoppingListService {

    ingredients : Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomatoes', 10)
      ];

    // ingredientChanged = new EventEmitter<Ingredient[]>();
    ingredientChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

      
    getIngredients(){
        return this.ingredients.slice();
    }  

    getIngredient(index: number){
        return this.ingredients[index];
    }

    updateingredient(index: number, newIngredient : Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientChanged.next(this.ingredients.slice());
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        // this.ingredientChanged.emit(this.ingredients.slice());
        this.ingredientChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        // for(let ing of ingredients){
        //     this.addIngredient(ing);
        // }
        this.ingredients.push(...ingredients);
        // this.ingredientChanged.emit(this.ingredients.slice());
        this.ingredientChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index : number){
        this.ingredients.splice(index, 1);
        this.ingredientChanged.next(this.ingredients.slice());
    }
}