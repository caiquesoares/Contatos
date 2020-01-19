import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {EditComponent} from "./edit/edit.component";
import {NewComponent} from "./new/new.component";
import {Contact} from "../shared/classes/contact";
import {ContactsService} from "../shared/services/contacts.service";


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.less']
})
export class ContactsComponent implements OnInit {
  contacts: any[];
  constructor(
    public dialog: MatDialog,
    private _contactsService: ContactsService
  ) { }

  ngOnInit() {
    let date = new Date();
    this.contacts = [
      {
        id: 1,
        name: 'Caique',
        birth: date,
        email: 'caiquefsoares@gmail.com',
        cellphone: '11983008156',
        phone: '1127535861',
        address: 'Rua Cachoeira Branca, 68'
      },
      {
        id: 2,
        name: 'Michely',
        birth: date,
        email: 'michelysdiniz@gmail.com',
        cellphone: '11951428137',
        phone: '1143802498',
        address: 'Rua Tocantins, 98'
      }
    ]
  }

  openModalEdit(obj) {
    const dialogRef = this.dialog.open(EditComponent, {
      width: '500px',
      data: obj
    });
  }
  openModalNew(){
    const dialogRef = this.dialog.open(NewComponent, {
      width: '500px',
      data: this.contacts
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  consultService() {
    this._contactsService.serviceCommunicating();
  }
}
