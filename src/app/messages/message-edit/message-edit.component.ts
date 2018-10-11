import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Message } from '../message.model';
import { Subject } from 'rxjs';
import { EventManager } from '@angular/platform-browser';
import { send } from 'q';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  @ViewChild('subject') subjectRef: ElementRef;
  @ViewChild('msgText') msgTextRef: ElementRef;
  @Output() addMessageEvent = new EventEmitter<Message>();
  currentSender = 'Serah';

  constructor() { }

  ngOnInit() {
  }
  onSendMessage(){
    
    const subject = this.subjectRef.nativeElement.value;
    const message = this.msgTextRef.nativeElement.value;
    const newMessage = new Message(23, 'serah', message, subject);
    this.addMessageEvent.emit(newMessage);
  }

  }
