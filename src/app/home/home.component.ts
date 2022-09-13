import { Component, Inject, OnInit } from '@angular/core';
import { SettingsComponent } from '../settings/settings.component';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private settings: SettingsComponent, private metaTagService: Meta, private titleService: Title, @Inject(DOCUMENT) private doc: any) { }

  ngOnInit(): void {
    this.settings.loadPalette();
    this.metatagsImplementation();
  }

  metatagsImplementation() {
    this.titleService.setTitle('CosmosStuff - Home')
    let today = this.getCurrentDate();
    this.metaTagService.addTags([
      {
        name: 'keywords', content: 'nasa, spaceX, starlink, space,cosmos, tech, asteroids, jamesweb',
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'CosmosStuff' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0' },
      { name: 'date', content: `${today}`, scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' },
      { httpEquiv: 'Content-Type',content:'text/html; charset=utf-8' },
      { name: 'description',content:`This project's mission is to bring you to the cosmos using data retrieved directly 
      from the best internet sources available. Here you will find data about asteroids, mars, starlink, ufo and everything related to  
      rocket science. Our team is constantly upgrading this website to provide you with the best experience.` },
      { httpEquiv: 'x-dns-prefetch-control',content:'on' },
    ]);

    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.doc.head.appendChild(link);
    link.setAttribute('href', this.doc.URL);
  }

  getCurrentDate():string {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    let date;
    date = mm + '/' + dd + '/' + yyyy;
    return date.toString();
  }

}
