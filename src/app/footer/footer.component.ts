import { Component, HostListener, OnInit } from '@angular/core';
import { midiaController } from '../core/midiaController';
import { modals } from '../core/modals';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  timeleft: number = 10
  playMusic: boolean = false;
  constructor(private midiaController: midiaController, private modal: modals) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  checkMidiaStatus() {
    this.playMusic = this.midiaController.getMusicFlag();
    if (this.playMusic) {
      this.play();
    }
  }

  play() {
    this.midiaController.playMusic();
  }

  openInsta(){
    window.open('https://www.instagram.com/cosmossstuff/?igshid=YmMyMTA2M2Y%3D')
  }
}
