import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, ContentChild, DestroyRef, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @Input()inputTxt
  
  
  constructor(
  ){
    console.log('Child Constructor')
  }

  @ContentChild('cont')_text
  @ViewChild('child')_child

  counter:number = 0;
  intervalVariable:any;

  ngOnInit(): void {
    console.log('Child OnInIt', this._text,  this._child)
    this.intervalVariable = setInterval(()=>{
      this.counter = this.counter + 1
    },1000)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Child Changes', this._text,  this._child)
  }

  ngDoCheck(): void {
    console.log('Child doCheck')
  }

  ngAfterContentInit(): void {
    console.log('Child AfterContentInit', this._text)
  }

  ngAfterContentChecked(): void {
    console.log('Child AfterContentChecked', this._text)
  }

  ngAfterViewInit(): void {
    console.log('Child AfterViewInIt', this._child)

  }

  ngAfterViewChecked(): void {
    console.log('Child AfterViewChecked', this._child)

  }

  ngOnDestroy(): void {
    clearInterval(this.intervalVariable)
    console.log('Child Destroyed')
  }
}
