import { Component, EventEmitter, Output } from "@angular/core";
import { Template } from "@angular/compiler/src/render3/r3_ast";

//decorator which enhances your class
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class headerComponent {
   @Output() menuSelected = new EventEmitter<string>();
   
    onSelect(headerMenu: string){
        this.menuSelected.emit(headerMenu);
    }
    
}