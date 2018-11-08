import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  @Input() contact: Contact;
  id: string;

  constructor(private contactService: ContactService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
      
     }
    //  navigate(){
    //   if (this. contact.url) {
    //     this.navigate.open(this.document.url)
    //   }
    // }

  onDelete(){
    this.contactService.deleteContact(this.contact); 
    this.router.navigate(['contats']);
  }

  ngOnInit() {
    this.contactService.contactSelected
    .subscribe(
      (params: Params) =>{
      this.id = params['id'];
        this.contact = this.contactService.getContact(this.id);
     
      }
    )
  }

}
