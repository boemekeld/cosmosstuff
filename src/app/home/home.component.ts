import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { SettingsComponent } from '../settings/settings.component';
import { DOCUMENT } from '@angular/common';
import { metaTags } from '../core/metaTags';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private settings: SettingsComponent, 
    @Inject(DOCUMENT) private doc: any,
    private metaTags:metaTags
    ) {}

  ngOnInit(): void {
    this.settings.loadPalette();
    this.updateMetatags();
  }

  updateMetatags(){
    this.metaTags.updateMetatags('CosmosStuff - Home',this.doc.createElement('link'),this.createMetaTagsArray());
  }

  createMetaTagsArray(){
    let metaTags = [
      {name:'keywords',content:'nasa, spaceX, starlink, space,cosmos, tech, asteroids, jamesweb'},
      {name:'robots',content:'index, follow'},
      {name:'author',content:'CosmosStuff'},
      {name:'viewport',content:'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0'},
      {name:'date',content:''},
      {name:'description',content:`This project's mission is to bring you to the cosmos using data retrieved directly from the best internet sources available. Here you will find data about asteroids, mars, starlink, ufo and everything related to rocket science. Our team is constantly upgrading this website to provide you with the best experience.`},
    ]
    return metaTags;
  }

}
