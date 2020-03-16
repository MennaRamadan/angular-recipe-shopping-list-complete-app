import { Component, OnInit, Input, Output } from '@angular/core';
import { Recipe } from './../../recipe.model';
import { EventEmitter } from '@angular/core';



@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe :Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(){
      this.recipeSelected.emit();
  }

}
