import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[appDropDown]'
})

export class DropDownDirective {
    //to bind the new value to element 
    @HostBinding('class.open') isOpen = false;

    //to listen to click event
    @HostListener('click') toggleDropDown(){
        this.isOpen = !this.isOpen;
    }
}