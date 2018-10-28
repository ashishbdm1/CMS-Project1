import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';
import { MessageListService } from './message-list.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[];    

  constructor(private messageListService: MessageListService) { }

  ngOnInit() {
    this.messages = this.messageListService.getMessages();
    this.messageListService.messageChanged
    .subscribe(
      (messages: Message[]) =>{
        this.messages = messages;
      }
    );
  }
}
