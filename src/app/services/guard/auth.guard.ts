import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../auth.service";
import { Injectable } from "@angular/core";


@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate {

    constructor(
        private authService:AuthService,
        private route:Router
    ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const loggedIn = this.authService.getLoggedStatus()
        if(loggedIn){
            return true
        } else {
            this.route.navigate(['login'])
            return false
        }
        
    }
}