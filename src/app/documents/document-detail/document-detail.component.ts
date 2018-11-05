import { Component, OnInit, Input } from '@angular/core';
import { Document } from '../document.model';
import { DocumentsService } from '../documents.service';
import { ActivatedRoute, Params } from '@angular/router';
import { WindRefService } from 'src/app/wind-ref.service';

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent implements OnInit {
  nativeWindow: any;
  document: Document;
  id: number;
  
  constructor(private documentService: DocumentsService,
              private windRefService: WindRefService,
              private route: ActivatedRoute) { 
                this.nativeWindow = windRefService.getNativeWindow();
              }
  onView(){
    if (this.document.url) {
      this.nativeWindow.open(this.document.url)
    }
  }
  
  onDelete(){
    this.documentService.deleteDocument(this.document.url); 
  }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.document = this.documentService.getDocument(this.id);
      }
    );
  }

}
