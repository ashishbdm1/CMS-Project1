import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
@Output() documentWasSelected = new EventEmitter<Document>();

  documents: Document[] = [
    new Document(
      1,
      "Bro. Jackson",
      "He is fulltime",
      "https://web.byui.edu/Directory/Employee/jacksonk.jpg"),

      new Document(
        2,
      "Bro. Barzee",
      "he is part time",
      "https://web.byui.edu/Directory/Employee/jacksonk.jpg"),

      new Document(
        3,
        "Brother Hill",
        "Adjucnct faculty",
        "https://web.byui.edu/Directory/Employee/jacksonk.jpg"),
    ];

  constructor() { }

  ngOnInit() {
  }
  onDocumentSelected(document: Document){
    this.documentWasSelected.emit(document);
  }

}
