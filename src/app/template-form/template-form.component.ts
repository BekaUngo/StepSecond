import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent {

  @ViewChild('f') _myForm:NgForm
  userData = {
    userName:null,
    userLastName:null,
    userEmail:null
  }

  checkData(data){
  }

  onSubmitForm(){
    this.userData.userName = this._myForm.controls['userName'].value,
    this.userData.userLastName = this._myForm.controls['userLastName'].value,
    this.userData.userEmail = this._myForm.controls['userEmail'].value,


    this._myForm.reset()
    console.log(this.userData)
  }

  fillForm(){
    this._myForm.setValue(
      {
        userName:'Saba',
        userLastName:'Archvadze',
        userEmail:'s@gmail.com'
      }
    )
  }
}


//შევქმნათ ლოგინ კომპონენტი
//გამოვიძახოთ ჰედერიდან და გამოვიდეს მთავარ გვერდზე (Subject-ების დახმარებით)
//ფორმა (სახელი, გვარი, იმელი) გავაკეთოთ Template Driven Form-ით 
// დავადოთ ვალიდაცია required და მესიჯი რომ აუცილებელი ველია, მაშინ როდესაც იუზერი შეეხება ინფუთს და არ შეავსებს არაფერს.
// სანამ ფორმა არ არის ვალიდური Submit ღილაკი იყოს disabled
// submit-ზე ცალკე ობიექტში ამოვიღოთ ეს მონაცემები და გავაგზავნოთ post-ის დახმარებით რაიმე ლინკზე.