import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { cssVecna } from '../core/cssVecna';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit, DoCheck {
  choosedPalette: number = 0;
  palette: any[] = []
  playMusic: boolean = true;
  playMusicButton: string = this.playMusic.toString()
  soundEffects: boolean = true;
  soundEffectsButton: string = this.soundEffects.toString()

  settingsForm = new FormGroup({
    palette: new FormControl(this.choosedPalette, Validators.required),
    playMusic: new FormControl(this.playMusic, Validators.required),
    soundEffects: new FormControl(this.soundEffects, Validators.required),
  })
  constructor(private vecna: cssVecna) { }

  ngOnInit(): void {
    this.setPalette();
    this.loadPalette();
  }

  musicSwitch(element: string) {
    if (element == 'playMusic') {
      this.playMusic = !this.playMusic;
      this.playMusicButton = this.playMusic.toString()
      this.saveLocalSotrage(this.playMusic,'playMusic')
    }
    if (element == 'musicEffect') {
      this.soundEffects = !this.soundEffects;
      this.soundEffectsButton = this.soundEffects.toString()
      this.saveLocalSotrage(this.soundEffects,'soundEffects')
    }
  }

  loadPalette() {
    let option: any = localStorage.getItem('palette');
    option = JSON.parse(option);
    this.choosedPalette = Number(option);
    this.setPaletteColours(this.choosedPalette);
  }

  ngDoCheck(): void {
    let value = this.settingsForm.controls['palette'].value
    this.setPaletteColours(value)
    this.saveLocalSotrage(value, 'palette')
  }

  setPalette() {
    this.palette = [
      { id: 1, name: 'Deep Space' },
      { id: 2, name: 'UFO' },
      { id: 3, name: 'Iron' },
      { id: 4, name: 'Vintage' },
      { id: 5, name: 'Sunset' },
      { id: 6, name: 'Fire' },
      { id: 7, name: 'Neon' },
      { id: 8, name: 'Hacker' },
      { id: 9, name: 'Neptune' },
      { id: 10, name: 'Sputinik' }

    ]
  }

  setPaletteColours(value: number) {
    if (value == 1 || value == null) {
      this.vecna.changeColourPalette
        ('#000000', '#150050', '#3F0071', '#610094')
    }
    if (value == 2) {
      this.vecna.changeColourPalette
        ('#000000', '#3E432E', '#616F39', '#A7D129')
    }
    if (value == 3) {
      this.vecna.changeColourPalette('#2C3333', '#395B64', '#A5C9CA', '#E7F6F2')
    }
    if (value == 4) {
      this.vecna.changeColourPalette('#2A0944', '#3FA796', '#FEC260', '#A10035')
    }
    if (value == 5) {
      this.vecna.changeColourPalette('#42032C', '#D36B00', '#E6D2AA', '#F1EFDC')
    }
    if (value == 6) {
      this.vecna.changeColourPalette('#000000', '#3D0000', '#950101', '#FF0000')
    }
    if (value == 7) {
      this.vecna.changeColourPalette('#170055', '#3E00FF', '#AE00FB', '#B5FFD9')
    }
    if (value == 8) {
      this.vecna.changeColourPalette('#0D0208', '#003B00', '#008F11', '#00FF41')
    }
    if (value == 9) {
      this.vecna.changeColourPalette('#002B5B', '#2B4865', '#256D85', '#8FE3CF')
    }
    if (value == 10) {
      this.vecna.changeColourPalette('#313552', '#B8405E', '#2EB086', '#EEE6CE')
    }
  }

  saveLocalSotrage(value: any, element: string) {
    if (element == 'palette') {
      localStorage.setItem('palette', JSON.stringify(value));
    }
    if(element == 'playMusic'){
      localStorage.setItem('playMusic', JSON.stringify(value));
    }
    if(element == 'soundEffects'){
      localStorage.setItem('soundEffects', JSON.stringify(value));
    }
  }

}
