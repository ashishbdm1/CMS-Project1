import { Injectable } from '@angular/core';
import { MOCKMESSAGES } from './MOCKMESSAGES';
import { Message } from './message.model'

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  [x: string]: any;
  messages: Message[] = [];

  addMessage(message: Message){
    this.messages.push(message);
  }
  
  getMessages(){
    return this.messages.slice();
  }
  getMessage(id: string, name: string){

  }

  constructor() { 
    this.messages = MOCKMESSAGES;
  }
}
