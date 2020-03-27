import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';


const appRoutes: Routes = [
    //full mean only redirect here if the full path was empty
    {path: '', redirectTo: '/recipes', pathMatch:'full'},
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}