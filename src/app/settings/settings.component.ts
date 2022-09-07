import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { cssVecna } from '../core/cssVecna';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit,DoCheck {
  palette: any[] = []
  paletteForm = new FormGroup({
    palette: new FormControl(this.palette[0], Validators.required)
  })
  constructor(private vecna:cssVecna) { }

  ngOnInit(): void {
    this.setPalette();
  }

  ngDoCheck(): void {
    this.setPaletteColours(this.paletteForm.controls['palette'].value)
  }

  setPalette(){
    this.palette = [
      { name: 'Standard' }, 
      { name: 'UFO' },
      { name: 'Cold' }, 
      { name: 'Vintage' }, 
      { name: 'Light' },
      { name: 'Fire' },
      { name: 'Neon' },
      { name: 'Hacker' }
    ]
  }

  setPaletteColours(value:string){
    if(value == 'Standard' || value == null){
      this.vecna.changeColourPalette('#000000','#150050','#3F0071','#610094')
    }
    if(value == 'UFO'){
      this.vecna.changeColourPalette('#000000','#3E432E','#616F39','#A7D129')
    }
    if(value == 'Cold'){
      this.vecna.changeColourPalette('#2C3333','#395B64','#A5C9CA','#E7F6F2')
    }
    if(value == 'Vintage'){
      this.vecna.changeColourPalette('#2A0944','#3FA796','#FEC260','#A10035')
    }
    if(value == 'Light'){
      this.vecna.changeColourPalette('#F7ECDE','#E9DAC1','#9ED2C6','#54BAB9')
    }
    if(value == 'Fire'){
      this.vecna.changeColourPalette('#000000','#3D0000','#950101','#FF0000')
    }
    if(value == 'Neon'){
      this.vecna.changeColourPalette('#170055','#3E00FF','#AE00FB','#B5FFD9')
    }
    if(value == 'Hacker'){
      this.vecna.changeColourPalette('#0D0208','#003B00','#008F11','#00FF41')
    }
  }

}
