import { Injectable, EventEmitter } from '@angular/core';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS'
import { Document } from './document.model'

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
  documentSelected = new EventEmitter<Document>();
  documentChangedEvent = new EventEmitter<Document>();

  documents: Document[] = [];

  getDocuments(){
    return this.documents.slice();
  }
  getDocument(index: number){
    return this.documents[index];
  }
  constructor() {
    this.documents = MOCKDOCUMENTS;
   }
}
