import { Injectable, EventEmitter } from '@angular/core';
import { MOCKCONTACTS } from './MOCKCONTACTS';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactSelected = new EventEmitter<Contact>();

  private contacts: Contact [] = [];
  
  constructor() {
    this.contacts = MOCKCONTACTS;
   }
  getContacts() {
    return this.contacts.slice();
  }
  getContact(id: string): Contact{
    for(const contact of this.contacts){
      if(contact.id === id){
        return contact;
      }
    }
  }

  
}
