import { Component, HostListener, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{


@HostListener('window:resize', ['$event'])
sizeChange(event) {
  if(event.target.innerWidth < 651){
    this.showBurgerMenu = true
  } else {
    this.showBurgerMenu = false
  }
  console.log('size changed.', event);
}

  showBurgerMenu:boolean = false

}
