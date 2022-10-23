import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { cssVecna } from '../core/cssVecna';
import { midiaController } from '../core/midiaController';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit, DoCheck {
  choosedPalette: number = 0;
  palette: any[] = []
  playMusic: boolean = false;
  soundEffects: boolean = true;

  settingsForm = new FormGroup({
    palette: new FormControl(this.choosedPalette, Validators.required),
    playMusic: new FormControl(this.playMusic, Validators.required),
    soundEffects: new FormControl(this.soundEffects, Validators.required),
  })
  constructor(private vecna: cssVecna, private midiaController: midiaController) { }

  ngOnInit(): void {
    this.setPalette();
    this.loadPalette();
    this.getMusicStatus()
    this.getSoundEffectStatus()
  }

  getMusicStatus() {
    let musicStatus = this.midiaController.getMusicFlag()
    if (typeof musicStatus == 'boolean') {
      this.playMusic = musicStatus
    }
  }

  getSoundEffectStatus() {
    let soundEffectsStatus = this.midiaController.getMusicFlag()
    if (typeof soundEffectsStatus == 'boolean') {
      this.soundEffects = soundEffectsStatus
    }
  }

  settingsSwitch(element: any) {
    if (element == 'playMusic') {
      this.playMusic = !this.playMusic;
      this.midiaController.setMusicFlag(this.playMusic)
      if(this.playMusic ){
        this.midiaController.playMusic();
      }
    }
    if (element == 'soundEffects') {
      this.soundEffects = !this.soundEffects;
      this.midiaController.setSoundEffectFlag(this.soundEffects);
    }
    if (element == 'restore') {
      localStorage.clear()
      location.reload()
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
      { id: 6, name: 'Mercurius' },
      { id: 7, name: 'Neon' },
      { id: 8, name: 'Hacker' },
      { id: 9, name: 'Neptune' },
      { id: 10, name: 'Sputinik' },
      { id: 11, name: 'Asteroid' },
      { id: 12, name: 'Light' },
      { id: 13, name: 'Galaxy' },
      { id: 14, name: 'Aqua' },
      { id: 15, name: 'Apollo' },
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
      this.vecna.changeColourPalette('#151515', '#301B3F', '#3C415C', '#B4A5A5')
    }
    if (value == 11) {
      this.vecna.changeColourPalette('#472D2D', '#553939', '#704F4F', '#A77979')
    }
    if (value == 12) {
      this.vecna.changeColourPalette('#F3F1F5', '#F0D9FF', '#BFA2DB', '#7F7C82')
    }
    if (value == 13) {
      this.vecna.changeColourPalette('#000000', '#5800FF', '#E900FF', '#FFC600')
    }
    if (value == 14) {
      this.vecna.changeColourPalette('#5800FF', '#0096FF', '#00D7FF', '#72FFFF')
    }
    if (value == 15) {
      this.vecna.changeColourPalette('#222831', '#393E46', '#EEEEEE', '#00ADB5')
    }
  }

  saveLocalSotrage(value: any, element: string) {
    if (element == 'palette') {
      localStorage.setItem('palette', JSON.stringify(value));
    }
    if (element == 'playMusic') {
      localStorage.setItem('playMusic', JSON.stringify(value));
    }
    if (element == 'soundEffects') {
      localStorage.setItem('soundEffects', JSON.stringify(value));
    }
  }

}
