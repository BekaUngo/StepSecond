import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, OnInit } from "@angular/core";
import { interval, map } from "rxjs";
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmationFormComponent } from "./confirmation-form/confirmation-form.component";

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
  styleUrls:['app.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  someText:string = "Change Detection in Angular"
  nikolozi:string = 'niko'
  isChild:boolean = false
  inputTxt:string

  customForm:FormGroup;
  animal:string

  constructor(
    private destroyRef:DestroyRef,
    public dialog: MatDialog
  ){
    console.log('Parent Constructor')
  }

  ngOnInit(): void {
    console.log('Parent OnInIt')
    this.customForm = new FormGroup({
      'date': new FormControl(null)
    })
  }

    openDialog(): void {

      const dialogRef = this.dialog.open(ConfirmationFormComponent, {
        width: '600px',
        data: { animal: this.animal},
      });

  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.animal = result;
      });
  }

  onSubmit(){
    console.log(this.customForm.value)
  }
  
  onClick(){
    this.isChild = !this.isChild
  }

  myObservable$ = interval(1000).pipe(
    map(value=>{
     return new Date().toLocaleTimeString()
    }),
    takeUntilDestroyed(this.destroyRef)
  ).subscribe(value=>{
    
  })

  myFullName:string = 'beka ungiadze'
  myAge:number = 29.78912321
  today = Date.now()
  salary:number = 5000

  
}