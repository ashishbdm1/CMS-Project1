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
      "CIT 260 - Object Oriented Programming",
      "He is fulltime",
      "https://web.byui.edu/Directory/Employee/jacksonk.jpg"),

      new Document(
        2,
      "CIT 366 - Full Stack Web Development",
      "he is part time",
      "https://web.byui.edu/Directory/Employee/jacksonk.jpg"),

      new Document(
        3,
        "CIT 425 - Data Wearhousing",
        "Adjucnct faculty",
        "https://web.byui.edu/Directory/Employee/jacksonk.jpg"),

        new Document(
          4,
          "CIT 460 - Enterprise Development",
          "Adjucnct faculty",
          "https://web.byui.edu/Directory/Employee/jacksonk.jpg"),

          new Document(
            5,
            "CIT 495 - Senior Practicum",
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
