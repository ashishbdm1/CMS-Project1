//import allows to import other modules into our module

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WindRefService } from './wind-ref.service'

import { AppComponent } from './app.component';
import { headerComponent } from './header/header.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactItemComponent } from './contacts/contact-item/contact-item.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentListComponent } from './documents/document-list/document-list.component';
import { DocumentItemComponent } from './documents/document-item/document-item.component';
import { DocumentDetailComponent } from './documents/document-detail/document-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageItemComponent } from './messages/message-item/message-item.component';
import { MessageEditComponent } from './messages/message-edit/message-edit.component';
import { MessageListComponent } from './messages/message-list/message-list.component';
import { DropDownDirectives } from 'src/Shared/dropdown.directives';
import { MessageListService } from './messages/message-list/message-list.service';
import { AppRoutingModule } from './app-routing';
import { DocumentViewComponent } from './documents/document-view/document-view.component';
import { DocumentEditComponent } from './documents/document-edit/document-edit.component';
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';
import { FormsModule } from '@angular/forms';
import { DndModule } from 'ng2-dnd'
@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    ContactsComponent,
    ContactListComponent,
    ContactDetailComponent,
    ContactItemComponent,
    DocumentsComponent,
    DocumentListComponent,
    DocumentItemComponent,
    DocumentDetailComponent,
    MessagesComponent,
    MessageItemComponent,
    MessageEditComponent,
    MessageListComponent,
    DropDownDirectives,
    DocumentViewComponent,
    DocumentEditComponent,
    ContactEditComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DndModule.forRoot()
  ],
  providers: [MessageListService, WindRefService, ContactDetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
