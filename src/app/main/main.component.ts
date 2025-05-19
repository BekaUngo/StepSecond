import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TestService } from '../services/test.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers:[TestService]
})
export class MainComponent implements OnInit{

  constructor(
    private authService:AuthService,
    private testService:TestService
  ){}

  // mySubcription:Subscription = this.testService.randomObservable.subscribe({
  //   next:(value)=>{
  //     console.log('next', value)
  //   },
  //   error:(err)=>{
  //     alert(err)
  //     console.log('err', err)
  //   },
  //   complete:()=>{
  //     console.log('Completed')
  //   }
  // })
  mySubcription2:Subscription = this.testService.randomObservable2.subscribe({
    next:(value)=>{
      console.log('next', value)
    },
    error:(err)=>{
      alert(err)
      console.log('err', err)
    },
    complete:()=>{
      console.log('Completed')
    }
  })

  ngOnInit(): void {
    this.testService.getProducts().subscribe(value=>{
      console.log(value)
    })
  }

  onLogin(){
    this.authService.login()
    console.log('logged status',this.authService.getLoggedStatus())
  }

  onLogout(){
    this.authService.logout()
    console.log('logged status',this.authService.getLoggedStatus())
  }

  increaseNumber(){
    this.testService.increaseNumber()
    console.log(this.testService.getMyAge())
  }

  decreaseNumber(){
    this.testService.decreaseNumber()
    console.log(this.testService.getMyAge())
  }


}

