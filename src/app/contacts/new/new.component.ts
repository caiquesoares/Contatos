import {Component, Inject, OnInit} from '@angular/core';
import {Contact} from "../../shared/classes/contact";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.less']
})
export class NewComponent implements OnInit {
  contact: Contact;
  constructor(
    public dialogRef: MatDialogRef<NewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

  }

  ngOnInit() {
    console.log(this.data)
    this.contact = {
      id: 0,
      name: '',
      email: '',
      address: '',
      birth: '',
      phone: '',
      cellphone: ''
    };
  }

  newContact(contact){
    this.data.push(contact);
    this.dialogRef.close();
  }

}
