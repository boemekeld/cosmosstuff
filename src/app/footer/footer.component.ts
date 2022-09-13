import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit,DoCheck {
  playMusic: boolean = true;
  player:any;
  url: string = '../../assets/songs/bot-'
  constructor() { }

  ngOnInit(): void {
    this.getAudioSettings()
  }

  ngDoCheck(): void {
    this.getAudioSettings();
  }

  stopMusic(){
    let player: any = document.querySelector('.music');
    player.pause()
  }

  getAudioSettings() {
    let check: any = localStorage.getItem('playMusic')
    check == null ? check = true : check = false;
    this.playMusic = Boolean(JSON.parse(check));
    if (this.playMusic) {
      this.playIt();
    } else {
      this.stopMusic();
    }

  }
  playIt() {
    this.url = this.url + `${this.randomIntFromInterval(1, 3)}.mp4`
    let player: any = document.querySelector('.music');
    // document.body.addEventListener("mousemove", function () {
    //   player.play();
    // })
    // document.body.addEventListener("scroll", function () {
    //   player.play();
    // })
  }

  randomIntFromInterval(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

}
