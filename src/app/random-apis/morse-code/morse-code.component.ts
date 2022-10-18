import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { modals } from 'src/app/core/modals';
import { morseCode } from 'src/app/core/morseCode';

@Component({
  selector: 'app-morse-code',
  templateUrl: './morse-code.component.html',
  styleUrls: ['./morse-code.component.css']
})
export class MorseCodeComponent implements OnInit {
  options:any[]=[];
  morseCodeConverted:string = ''
  morseForm = new FormGroup({
    text: new FormControl(null, Validators.required),
    option: new FormControl(null, Validators.required)
  });
  constructor(private modal:modals,private morseCode:morseCode) { }

  ngOnInit(): void {
    this.setOptions();
  }

  setOptions() {
    this.options = [{ name: 'english to morse-code',value:0 }, { name: 'morse-code to english',value:1 }]
  }

  search(){
    if(this.morseForm.valid){
      if(this.morseForm.controls['option'].value == 0){
        this.morseCodeConverted =  this.morseCode.morseCodeAlgoritym(this.morseForm.controls['text'].value,true)
      } else {
        this.morseCodeConverted =  this.morseCode.morseCodeAlgoritym(this.morseForm.controls['text'].value,false)
      }
    } else {
      this.modal.infoModal('Please fill all the blanks')
    }
  }
  
  copy(){
    navigator.clipboard.writeText(this.morseCodeConverted);
    this.modal.successModal('Your text has been copied')
  }


  blink(){

  }
}
