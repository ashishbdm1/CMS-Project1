import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Document } from '../document.model';
import { Router } from '@angular/router';
import { DocumentsService } from '../documents.service'


@Component({
  selector: 'app-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent implements OnInit {
  
  originalDocument: Document;
  document: Document;
  editMode: boolean = false;


  constructor(private documentService: DocumentsService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params) => {
          console.log(params.id);
          if (!params.id) {
            this.editMode = false;
          } else {
            this.originalDocument = this.documentService.getDocument(params.id);
            console.log(this.originalDocument);
            if (!this.originalDocument) {
              return;
            }

            this.editMode = true;
            this.document = JSON.parse(JSON.stringify(this.originalDocument));
          }
        }
      );
  }
  
  onCancel() {
    this.router.navigate(['documents']);
  }

}
