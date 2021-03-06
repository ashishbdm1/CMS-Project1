import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Document } from '../document.model';
import { DocumentsService } from '../documents.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
@Output() documentChangedEvent = new EventEmitter<Document[]>();
// id: string;

  private documents: Document[] = [];
  subscription: Subscription;

  constructor(private documentService: DocumentsService) {
    this.documentService.getDocuments();
   }

   ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.documentService.documentListChangedEvent
    .subscribe(
      (documents: Document[]) => {
        this.documents = documents;
      }
    );
  }

}
