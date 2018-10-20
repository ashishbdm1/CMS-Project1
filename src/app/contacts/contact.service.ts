import { Injectable, EventEmitter } from '@angular/core';
import { MOCKCONTACTS } from './MOCKCONTACTS';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactSelected = new EventEmitter<Contact>();

  private contacts: Contact [] = [];
  getContacts() {
    return this.contacts.slice();
  }
  getContact(id: string){
    // for(let contact of this.contacts){
    //   if(contact === id){
    //     return contact;
    //   }
    // }
    // return null;
  }

  constructor() {
    this.contacts = MOCKCONTACTS;
   }
}
