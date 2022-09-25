import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { modals } from '../core/modals';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private modal: modals) { }
  emailJs: any;
  ngOnInit(): void {
    emailjs.init(`ZmAgMTHNU7a2RRbIQ`)
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    let check = this.validateForm()
    if (check){
      emailjs.sendForm('service_h2gv0jl', 'template_jwpttth', e.target as HTMLFormElement, 'ZmAgMTHNU7a2RRbIQ')
        .then((result: EmailJSResponseStatus) => {
          this.modal.successModal(`Your email has been sent`)
        }, (error) => {
          this.modal.errorModal(`We are having troubles to send this email, try again later`)
        });
    } else {
      this.modal.infoModal(`Please, fill all this form's fields`)
    }
  }

  validateForm(){
    let name:any = document.getElementById('name')
    let email:any = document.getElementById('email')
    let message:any = document.getElementById('message')
    if(name.value && email.value && message.value){
      return true;
    }
    return false;
  }
}
