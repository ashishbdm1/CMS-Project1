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
  contact: Contact;

  constructor(private contactService: ContactService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
      
     }
  

  ngOnInit() {
    this.activatedRoute.params
    .subscribe(
      (params: Params) =>{
      const id = params['id'];
        this.contact = this.contactService.getContact(id);
     
      }
    )
  }
  onDelete(){
    this.contactService.deleteContact(this.contact); 
    this.router.navigate(['/contact'], { relativeTo: this.activatedRoute });
  }

}
