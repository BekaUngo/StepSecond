import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  providers:[TestService]
})
export class AboutUsComponent implements OnInit, AfterViewChecked{

  constructor(
    private route:ActivatedRoute,
    private testService:TestService
  ){}

  fragmentName:string;
  @ViewChild('myDiv') _myDiv:ElementRef;

  ngAfterViewChecked(): void {
    // this._myDiv.nativeElement.scrollIntoView({behavior:'smooth'})
  }

  ngOnInit(): void {
    // this.fragmentName = this.route.snapshot.fragment
  }

  scrollDown(section:HTMLDivElement){
    section.scrollIntoView({behavior:'smooth'})

    // document.getElementById(section).scrollIntoView({behavior:'smooth'})
  }

  showNumber(){
    console.log(    this.testService.getMyAge())

  }

}
