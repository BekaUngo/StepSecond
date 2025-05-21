import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({providedIn:'root'})
export class LoginService {

    private loginStatus = new BehaviorSubject<boolean>(false)

    constructor(
        private http:HttpClient
    ){}

    getProducts(){
        return this.http.get('https://restaurant.stepprojects.ge/api/Products/GetAll')
    }

    login(){
        this.loginStatus.next(true)
    }

    logout(){
        this.loginStatus.next(false)
    }

    getLoginStatus(){
        return this.loginStatus.asObservable()
    }

}