import { Component, OnInit } from '@angular/core';
import { Document } from './document.model';
import { DocumentsService } from './documents.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  selectedDocument: Document;
  constructor(private documentServeice: DocumentsService) { }

  ngOnInit() {
    this.documentServeice.documentSelected
    .subscribe(
      (document: Document) => {
        this.selectedDocument = document;
      }
    )
  }

}


