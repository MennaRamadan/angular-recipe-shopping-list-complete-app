import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListRouting } from "./shopping-list.routing";
import { SharedModule } from './../shared/shared.module';


@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    imports:[
        //common module is now commented as we import shared Module which already use it
    //CommonModule,
        ReactiveFormsModule,
        RouterModule,
        FormsModule,
        ShoppingListRouting,
        SharedModule
    ],
    exports: [
        ShoppingListComponent,
        ShoppingEditComponent
    ]
})
export class ShoppingListModule{

}