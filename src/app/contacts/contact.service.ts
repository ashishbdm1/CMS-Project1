import { Injectable, EventEmitter } from '@angular/core';
import { MOCKCONTACTS } from './MOCKCONTACTS';
import { Contact } from './contact.model';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactSelected = new EventEmitter<Contact[]>();
  contactChangedEvent = new EventEmitter<Contact[]>();

  contactListChangedEvent = new Subject<Contact[]>();

  private contacts: Contact [] = [];
  
  deleteContact(contact: Contact) {
      if (contact === null){
        return;
      }
      const pos = this.contacts.indexOf(contact);
      if (pos < 0){
        return;
      }
      this.contacts.slice(pos, 1);
      this.contactChangedEvent.emit(this.contacts.slice());
  }

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
