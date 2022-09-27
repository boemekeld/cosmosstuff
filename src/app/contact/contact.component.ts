import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { dateTool } from '../core/dateTool';
import { metaTags } from '../core/metaTags';
import { modals } from '../core/modals';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private modal: modals,private dateTool:dateTool) { }
  countChar:string = '';
  ngOnInit(): void {
    emailjs.init(`ZmAgMTHNU7a2RRbIQ`)
    this.modal.infoModal('To avoid bot activities you can send just one email per day.')
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    let check = this.validateForm()
    debugger;
    let hacker = this.checkHackerBehaviour()
    if (check && !hacker){
      emailjs.sendForm('service_h2gv0jl', 'template_jwpttth', e.target as HTMLFormElement, 'ZmAgMTHNU7a2RRbIQ')
        .then((result: EmailJSResponseStatus) => {
          this.modal.successModal(`Your email has been sent`)
        }, (error) => {
          this.modal.errorModal(`We are having troubles to send this email, try again later`)
        });
    } else {
      if(hacker){
        this.modal.infoModal(`To avoid bots you can send just one email per day`)  
      }
      this.modal.infoModal(`Please, fill all the blanks or write a shorter message (limit 800 char)`)
    }
  }

  validateForm(){
    let name:any = document.getElementById('name')
    let email:any = document.getElementById('email')
    let message:any = document.getElementById('message')
    if(name.value && email.value && message.value){
      return true;
    }
    if(message.value.length > 800){
      return false;
    }
    return false;
  }

  checkHackerBehaviour(){
    let currentDate = this.dateTool.getCurrentDate();
    let savedDate:any = localStorage.getItem('savedDate');
    savedDate = JSON.parse(savedDate);
    if(savedDate){
      if(currentDate == savedDate){
        return true;
      }
    }
    localStorage.setItem('savedDate',JSON.stringify(currentDate));
    return false;
  }
}
