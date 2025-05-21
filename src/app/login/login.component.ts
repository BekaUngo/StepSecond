import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  showLogin:boolean = false

  constructor(
    private loginService:LoginService
  ){}

  ngOnInit(): void {
    // this.loginService.getLoginStatus().subscribe(value=>{
    //   console.log(value)
    //   this.showLogin = value
    // })
  }
}
