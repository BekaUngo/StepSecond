import { Component, EventEmitter, Input, Output } from "@angular/core";
import { IDescription } from "src/app/interfaces/sidebar.interface";



@Component({
    selector:'app-side-bar-details',
    templateUrl:'side-bar-details.component.html',
    styleUrls:['side-bar-details.component.scss']
})
export class SideBarDetailsComponent {
    @Input() childData:IDescription
    @Input() name:string
    @Output() product = new EventEmitter<IDescription>()



    buyProduct(){
        this.product.emit(this.childData)
    }
}