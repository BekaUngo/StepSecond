import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-form',
  templateUrl: './confirmation-form.component.html',
  styleUrls: ['./confirmation-form.component.scss']
})
export class ConfirmationFormComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {name: string, animal:string}) { }

  onNoClick(){
    return false
  }
}
