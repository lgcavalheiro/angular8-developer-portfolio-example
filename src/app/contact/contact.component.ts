import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(4)]],
      email: [null, [Validators.required, Validators.email]],
      subject: [null, [Validators.required, Validators.minLength(4)]],
      message: [null, [Validators.required, Validators.minLength(16)]]
    });
  }

  onSubmit() {
    this.contactForm.markAllAsTouched()
    if (this.contactForm.valid) {
      const email = this.contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/mwkrwgpk',
        { name: email.name, replyto: email.email, subject: email.subject, message: email.message },
        { 'headers': headers }).subscribe(
          response => {
            console.log(response);
          }
        );
    }
  }

  printForm() {
    console.log(this.contactForm);
  }

  checkValidTouched(field: any){
    return !this.contactForm.get(field).valid && this.contactForm.get(field).touched;
  }

  applyCssError(field: any){
    return {
      'has-error': this.checkValidTouched(field),
      'has-feedback': this.checkValidTouched(field)
    }
  }

}
