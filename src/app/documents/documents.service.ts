import { Injectable, EventEmitter } from '@angular/core';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS'
import { Document } from './document.model'

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
  documentSelected = new EventEmitter<Document>();

  documents: Document[] = [];
  getDocuments(){
    return this.documents.slice();
  }
  getDocument(id: string){

  }
  constructor() {
    this.documents = MOCKDOCUMENTS;
   }
}
