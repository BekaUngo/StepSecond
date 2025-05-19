import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ){}

  persons = {
    2:'beka'
  }

  userId:number;
  userName:string;
  queryName:string;

  ngOnInit(): void {
    // this.userId = this.route.snapshot.params['id']
    // this.userName = this.route.snapshot.params['name']
    // this.queryName = this.route.snapshot.queryParams['name']
    this.route.params.subscribe(value=>{
      this.userId = value['id']
      this.userName = value['name']
    })
    this.route.queryParams.subscribe(value=>{
      this.queryName = value['name']
    })
  }

  changeDetails(){
    this.router.navigate(['users', 5, 'Mariam'],{
      queryParams:{
        name:'Sandro'
      }
    })
  }

}
