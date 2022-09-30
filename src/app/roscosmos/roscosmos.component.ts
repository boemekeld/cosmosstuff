import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { metaTags } from '../core/metaTags';

@Component({
  selector: 'app-roscosmos',
  templateUrl: './roscosmos.component.html',
  styleUrls: ['./roscosmos.component.css']
})
export class RoscosmosComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private doc: any,
  private metaTags:metaTags) { }

  ngOnInit(): void {
    this.updateMetatags();
  }

  updateMetatags(){
    this.metaTags.updateMetatags('CosmosStuff - Roscosmos',this.doc.createElement('link'),this.createMetaTagsArray());
  }

  createMetaTagsArray(){
    let metaTags = [
      {name:'keywords',content:'Roscosmos, space, russia, asia,cosmos, tech, asteroids'},
      {name:'robots',content:'index, follow'},
      {name:'author',content:'CosmosStuff'},
      {name:'viewport',content:'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0'},
      {name:'date',content:''},
      {name:'description',content:`This component displays tools that retrieve data directly from the Roscosmos databases. Enjoy the data from the Russia spacial program.`},
    ]
    return metaTags;
  }
}
