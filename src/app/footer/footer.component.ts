import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  playMusic:boolean = true;
  url:string = '../../assets/songs/bot-'
  constructor() { }

  ngOnInit(): void {
    this.getAudioSettings()
  }

  getAudioSettings(){
    debugger;
    let check:any = localStorage.getItem('playMusic')
    let play:boolean = Boolean(JSON.parse(check));
    if(play){
      this.playIt();
    }

  }
  playIt(){
    this.url = this.url + `${this.randomIntFromInterval(1,3)}.mp4`
    let player:any = document.querySelector('.music');
    player.play();
  }

  randomIntFromInterval(min:number, max:number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

}
