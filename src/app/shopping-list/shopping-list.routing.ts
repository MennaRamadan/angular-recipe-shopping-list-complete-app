import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";

import { ShoppingListComponent } from './shopping-list.component';

const router : Routes =[
    //this before lazy loading
    // {path: 'shopping-list', component: ShoppingListComponent}
    //this after applying lazy loading 
    {path: '', component: ShoppingListComponent}
];

@NgModule({
    imports:[RouterModule.forChild(router)],
    exports: [RouterModule]
})
export class ShoppingListRouting{}