import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  @Output() contactWasSelected = new EventEmitter<Contact>();                                                                                                                                                                                                                                                                             

  contacts: Contact[] = [];

  //This is how we inject the ContactsService to constructor function
  constructor(private contactsService: ContactService) {

  }

  ngOnInit() {
    //call the getContacts() function in the ContactsService and assign the array of contacts
    //returned from the function to the contacts class variable in the
    //ContactListComponent.
    this.contacts = this.contactsService.getContacts();
  }
}
