import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";

import { ShoppingListComponent } from './shopping-list.component';

const router : Routes =[
    {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(router)],
    exports: [RouterModule]
})
export class ShoppingListRouting{}