import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { timer } from 'rxjs';
import { modals } from 'src/app/core/modals';
import { morseCode } from 'src/app/core/morseCode';
import { metaTags } from '../../core/metaTags';

@Component({
  selector: 'app-morse-code',
  templateUrl: './morse-code.component.html',
  styleUrls: ['./morse-code.component.css']
})
export class MorseCodeComponent implements OnInit {
  options: any[] = [];
  morseCodeConverted: string = ''
  morseForm = new FormGroup({
    text: new FormControl(null, Validators.required),
    option: new FormControl(null, Validators.required)
  });
  constructor(private modal: modals, private morseCode: morseCode, @Inject(DOCUMENT) private doc: any,
    private metaTags: metaTags) { }

  ngOnInit(): void {
    this.setOptions();
  }

  setOptions() {
    this.options = [{ name: 'english to morse-code', value: 0 }, { name: 'morse-code to english', value: 1 }]
  }

  search() {
    if (this.morseForm.valid) {
      if (this.morseForm.controls['option'].value == 0) {
        this.morseCodeConverted = this.morseCode.morseCodeAlgoritym(this.morseForm.controls['text'].value, true)
      } else {
        this.morseCodeConverted = this.morseCode.morseCodeAlgoritym(this.morseForm.controls['text'].value, false)
      }
    } else {
      this.modal.infoModal('Please fill all the blanks')
    }
  }

  copy() {
    navigator.clipboard.writeText(this.morseCodeConverted);
    this.modal.successModal('Your text has been copied')
  }

  updateMetatags() {
    this.metaTags.updateMetatags('CosmosStuff - Exoplanets', this.doc.createElement('link'), this.createMetaTagsArray());
  }

  createMetaTagsArray() {
    let metaTags = [
      { name: 'keywords', content: 'morse, code, morsecode, space,cosmos, tech, asteroids, communication' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'CosmosStuff' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0' },
      { name: 'date', content: '' },
      { name: 'description', content: `Check it out our morse-code tool.` },
    ]
    return metaTags;
  }

  clear(){
    this.morseCodeConverted = '';
  }

  info(){
    this.modal.infoModal(`English to Morse code -> Do not use numbers or special characters.
    Morse code to English -> Use . for dot, - for slash, / / for space and / to finish the phrase`)
  }
}


