import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TestService } from '../services/test.service';
import { BehaviorSubject, Observable, ReplaySubject, Subject, Subscription } from 'rxjs';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers:[TestService]
})
export class MainComponent implements OnInit{

  constructor(
    private authService:AuthService,
    private testService:TestService,
    public loginService:LoginService
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
  // mySubcription2:Subscription = this.testService.randomObservable2.subscribe({
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

  mySubject = new Subject()
  randomArr:any[] = []
  intialNumber = 20

  randomNumber = Math.floor(Math.random() * (100 - 20)+20)

  myObservable = new Observable(observer=>{
    const randomNumber = Math.floor(Math.random() * (100 - 20)+20)
    observer.next(this.randomNumber)
  })

  ngOnInit(): void {
    this.mySubject.subscribe(value=>{
      console.log('Subject 1',value)
    })
    this.mySubject.subscribe(value=>{
      console.log('Subject 2',value)
    })
    this.mySubject.next(this.randomNumber)
    this.myObservable.subscribe(value=>{
      console.log('Obser 1', value)
    })
    this.myObservable.subscribe(value=>{
      console.log('Obser 2', value)
    })
    this.loginService.getProducts().subscribe((value:any)=>{
      console.log(value)
      this.randomArr = value
      // this.randomArr = value
    })
  }
  
  emitData(){
    setTimeout(()=>{
      this.mySubject.next(1)
    }, 1000)
    setTimeout(()=>{
      this.mySubject.next(2)
    },1500)
    setTimeout(()=>{
      this.mySubject.next(3)
    },3000)
    setTimeout(()=>{
      this.mySubject.next(4)
    },4500)
    setTimeout(()=>{
      this.mySubject.next(5)
    },6000)
  }
  
  getData(){
    this.mySubject.subscribe((value:number)=>{
      console.log(value)
      this.randomArr.push(value)
    })
  }
  
  
    onLogin(){
      // this.authService.login()
      // console.log('logged status',this.authService.getLoggedStatus())
      this.loginService.login()
      console.log('emitted true value')
    }
  
    onLogout(){
      // this.authService.logout()
      // console.log('logged status',this.authService.getLoggedStatus())
      this.loginService.logout()
      console.log('emitted false value')
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

