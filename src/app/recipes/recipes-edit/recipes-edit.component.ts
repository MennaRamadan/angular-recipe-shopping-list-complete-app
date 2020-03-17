import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent implements OnInit {

  id: number;
  editMode = false;
  
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe((param :Params) => {
      this.id = +param['id'];
      this.editMode = param['id'] != null;
    })
  }

}
