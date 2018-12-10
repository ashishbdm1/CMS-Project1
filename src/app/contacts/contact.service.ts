import { Injectable, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ContactService {
  contactListChangedEvent = new Subject<Contact[]>();
  private contacts: Contact[] = [];
  maxContactId: number;

  constructor(private http: HttpClient) { 
    this.maxContactId = this.getMaxId();
  }

  getContacts() {
    this.http.get<Contact[]>('https://pokcms-b88ac.firebaseio.com/contacts.json')
      .subscribe(
        (contacts: Contact[]) => {
          console.log(contacts, 'contacts in getContacts');
          this.contacts = contacts;
          this.maxContactId = this.getMaxId();
          this.contacts.sort((a, b) => (a.name > b.name) ? 1: ((b.name > a.name) ? -1: 0));
          this.contactListChangedEvent.next(this.contacts.slice());
        });
  }

  storeContacts(contacts: Contact[]){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    this.http.put('https://pokcms-b88ac.firebaseio.com/contacts.json', contacts, {headers: headers})
      .subscribe(
        (response: Response) => {
          this.contactListChangedEvent.next(contacts.slice())
        }
      );
  }

  getContact(id: string): Contact {
    if(this.contacts.length > 0){
      for(let contact of this.contacts){
        if(contact.id === id){
          return contact
        }
      }
    }
    return null;
  }

  getMaxId(): number {
    let maxId = 0;
    for (let contact of this.contacts) {
      let currentId = parseInt(contact.id, 10);
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }

  deleteContact(contact: Contact){
    if(contact === null){
      return;
    }

    const pos = this.contacts.indexOf(contact);
      if(pos < 0){
        return;
      }
    this.contacts.splice(pos, 1);
    this.storeContacts(this.contacts);
  }

  addContact(newContact: Contact) {
    if(!newContact){
      return;
    }

    this.maxContactId++;
    newContact.id = String(this.maxContactId);
    this.contacts.push(newContact);
    this.storeContacts(this.contacts);
  }

  updateContact(originalContact: Contact, newContact: Contact) {
    if(!originalContact || !newContact ){
      return;
    }
    const pos = this.contacts.indexOf(originalContact);

    console.log(this.contacts.indexOf(originalContact));
    if(pos < 0) {
      return;
    }
    newContact.id = originalContact.id;
    this.contacts[pos] = newContact;
    const contactsListClone = this.contacts.slice();
    this.storeContacts(this.contacts);
  }

}