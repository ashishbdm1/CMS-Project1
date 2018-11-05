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

  constructor(private contactsService: ContactService) {

  }

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }
}
