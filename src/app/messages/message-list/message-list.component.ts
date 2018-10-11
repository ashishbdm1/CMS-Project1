import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [
    new Message(34, 'Subject', 'I am Ashish', 'Seranh'),
    new Message(34, 'Subject', 'I am Ashish', 'Seranh'),
    new Message(34, 'Subject', 'I am Ashish', 'Seranh'),
];    

  constructor() { }

  ngOnInit() {
  }
  onAddMessage(message: Message){
    this.messages.push(message);
  }
}
