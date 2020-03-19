import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from './../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent implements OnInit {

  id: number;
  editMode = false;
  recipeForm: FormGroup;
  recipe: Recipe;
  
  constructor(private router: ActivatedRoute, 
              private recipeService: RecipeService,
              private route: Router) { }

  ngOnInit() {
    this.router.params.subscribe((param :Params) => {
      this.id = +param['id'];
      this.editMode = param['id'] != null;
      this.initForm();
    })
  }

  private initForm(){
    let recipeIngredients  = new FormArray([]);

    if(this.editMode){
       this.recipe = this.recipeService.getRecipe(this.id);
       if(this.recipe.ingredients.length){
         for(let ingredient of this.recipe.ingredients)
         {
           recipeIngredients.push(
             new FormGroup({
               'name' : new FormControl(ingredient.name, Validators.required),
               'amount': new FormControl(ingredient.amount, [Validators.pattern(/'^[1-9]+[0-9]*$'/), Validators.required])
             })
           ); 
         }
       }
    }

    this.recipeForm = new FormGroup({
      'name' : this.editMode ? new FormControl(this.recipe.name, Validators.required)   : new FormControl('', Validators.required), 
      'imagePath' : this.editMode ? new FormControl(this.recipe.imagePath, Validators.required) : new FormControl('', Validators.required),
      'description': this.editMode ? new FormControl(this.recipe.description, Validators.required) : new FormControl('', Validators.required),
      'ingredients' : recipeIngredients
    })
  }

  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.pattern(/'^[1-9]+[0-9]*$'/), Validators.required])
      })
    )
  }

  onSubmit(){
    // const newRecipe = new Recipe(this.recipeForm.value['name'],
    //                       this.recipeForm.value['description'],
    //                       this.recipeForm.value['imagePath'], 
    //                       this.recipeForm.value['ingredients']);
    if(this.editMode){
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    }
    else{
      this.recipeService.addRecipes(this.recipeForm.value);
    }

    this.onCancel();
  }

  onDeleteIngredient(index: number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  } 

  onCancel(){
    this.route.navigate(['../'], {relativeTo: this.router});
  }

}
