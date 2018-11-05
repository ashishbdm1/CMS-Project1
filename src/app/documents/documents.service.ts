import { Injectable, EventEmitter } from '@angular/core';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import { Document } from './document.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
  documentSelected = new EventEmitter<Document>();
  documentChangedEvent = new EventEmitter<Document[]>();

  documents: Document[] = [];

  deleteDocument(document: Document){
    if (document === null){
      return;
    }
    const pos = this.documents.indexOf(document);
    if (pos < 0){
      return;
    }
    this.documents.slice(pos, 1);
    this.documentChangedEvent.emit(this.documents.slice());
  }

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
