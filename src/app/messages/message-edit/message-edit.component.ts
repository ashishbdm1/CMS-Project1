import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Message } from '../message.model';
import { MessageListService } from '../message-list/message-list.service';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  @ViewChild('subject') subjectRef: ElementRef;
  @ViewChild('msgText') msgTextRef: ElementRef;
  @Output() addMessageEvent = new EventEmitter<Message>();
  currentSender = '1';

  constructor(private mesageListService: MessageListService) { }

  ngOnInit() {
  }
  onSendMessage(){
    
    const subject = this.subjectRef.nativeElement.value;
    const message = this.msgTextRef.nativeElement.value;
    const newMessage = new Message(23, subject, message, this.currentSender);
    this.mesageListService.addMessage(newMessage);
  }

  }
