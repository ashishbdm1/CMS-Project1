import { Injectable, EventEmitter } from '@angular/core';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import { Document } from './document.model';
import { Subject } from 'rxjs/Subject';
// import { Subscription } from 'rxjs/Subscription';
import { HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
  documentSelected = new EventEmitter<Document>();
  documentChangedEvent = new EventEmitter<Document[]>();

  documentListChangedEvent = new Subject<Document[]>();

  private documents: Document[] = [];
  maxId: any;
  maxDocumentId: number;
  // subscription: Subscription;

  addDocument(newDoc: Document){
    if (newDoc) {
      newDoc.id = `${this.maxId++}`;
      this.documents.push(newDoc);
      let documentsClone = this.documents.slice();
      //this.documentListChangedEvent.next(documentsClone);
      this.storeDocuments();
    }
  }
  storeDocuments(): any {
    throw new Error("Method not implemented.");
  }

  getMaxId(): number {
    let maxId = 0;
    this.documents.forEach(document => {
      if (+document.id > maxId) maxId = +document.id;
    });
    return maxId + 1;
  }

  updateDocument(originalDoc: Document, newDoc: Document){
    if (originalDoc && newDoc) {
      console.log(this.documents);

      let realOrDoc = this.documents.find(doc => {
        return doc.id === originalDoc.id;
      });
      let pos = this.documents.indexOf(realOrDoc);
      if (realOrDoc) {
        newDoc.id = originalDoc.id;
        this.documents[pos] = newDoc;

        // let documentsClone = this.documents.slice();
        this.storeDocuments();
      }
    }
  }
  deleteDocument(document: Document){
    if (!document || !this.documents.includes(document)) {
      return;
    }
    
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
    this.maxDocumentId = this.getMaxId();
   }
}
