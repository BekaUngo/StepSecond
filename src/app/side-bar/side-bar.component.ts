import { Component } from "@angular/core";



@Component({
    selector:'app-side-bar',
    templateUrl:'side-bar.component.html',
    styleUrls:['side-bar.component.scss']
})
export class SideBarComponent {

    myName:string = "Saba";
    lastName:string = "Archvadze";
    youtubeUrl:string = "http://youtube.com";
    userText:string = ''
    myAge:number

    returnMyName(){
        return this.myName
    }

    calculateMyAge(data:number){
        const randomNumber = Math.floor(Math.random()*(100 - 50) + 50)
        this.myAge = data - randomNumber
    }


}


//Binding Types:

//Event Binding

// Property Binding - +
// One Way binding - String Interpolation +
// Two Way Binding
