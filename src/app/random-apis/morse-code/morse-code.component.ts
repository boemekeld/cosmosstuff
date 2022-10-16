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
  morseForm = new FormGroup({
    text: new FormControl(null, Validators.required),
    option: new FormControl(null, Validators.required)
  });
  constructor(private modal:modals,private morseCode:morseCode) { }

  ngOnInit(): void {
    this.setOptions();
  }

  setOptions() {
    this.options = [{ name: 'morse-code to english',value:0 }, { name: 'english to morse-code',value:1 }]
  }

  search(){
    if(this.morseForm.valid){
      if(this.morseForm.controls['option'].value == 0){
        this.morseCode.englishToMorseCode(this.morseForm.controls['text'].value)
      } else {

      }
    } else {
      this.modal.infoModal('Please fill all the blanks')
    }
  }
  

}
