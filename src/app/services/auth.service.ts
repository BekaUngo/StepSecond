import { Injectable } from "@angular/core";


@Injectable({providedIn:'root'})
export class AuthService {


    isLogged:boolean = false;

    login(){
        this.isLogged = true
    }

    logout(){
        this.isLogged = false
    }

    getLoggedStatus(){
        return this.isLogged
    }

}