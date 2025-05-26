import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit{

  myForm:FormGroup;

  get lessonList()  {
    return (this.myForm.get('lessons') as FormArray).controls
  }

  ngOnInit(): void {
    this.initiliseForm()
    this.myForm.get('userData').valueChanges.subscribe(value=>{
      console.log(value)
    })
  }

  initiliseForm(){
    this.myForm = new FormGroup({
      'userData':new FormGroup({
        'userName': new FormControl(null,Validators.required),
        'lastName': new FormControl(null,Validators.required),
      }),
      'userEmail': new FormControl(null,[Validators.required,Validators.email]),
      'lessons':new FormArray([])
    })
  }

  addInput(){
    const control = new FormControl(null);
    (this.myForm.get('lessons') as FormArray).push(control)
  }

  onFormSubmit(){
    console.log(this.myForm.get('lessons') as FormArray)
    this.myForm.reset()
  }
}
