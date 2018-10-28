import { Injectable, EventEmitter } from '@angular/core';
import { Message } from '../message.model';
import { MOCKCONTACTS } from 'src/app/contacts/MOCKCONTACTS';
import { MOCKMESSAGES } from '../MOCKMESSAGES';

@Injectable({
  providedIn: 'root'
})
export class MessageListService {
  messageChanged = new EventEmitter<Message[]>();

  private messages: Message[] = [];

  getMessages(){
    return this.messages.slice();
  }
  addMessage(message: Message){
    this.messages.push(message);
    this.messageChanged.emit(this.messages.slice());
  }
  constructor() { 
    this.messages = MOCKMESSAGES;
  }
}
