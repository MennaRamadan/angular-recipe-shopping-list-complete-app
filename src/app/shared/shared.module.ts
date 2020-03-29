import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';


import { DropDownDirective } from "./dropdown.directive";

@NgModule({
    declarations: [
        DropDownDirective
        //adding here any other modules or directived in shared if exists
    ],
    imports: [
        CommonModule
    ],
    exports: [
        DropDownDirective,
        CommonModule
    ]
})
export class SharedModule{

}