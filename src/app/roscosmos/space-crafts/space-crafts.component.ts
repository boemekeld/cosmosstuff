import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { RoscosmosService } from 'src/app/services/roscosmos/roscosmos.service';
import { spaceCraft } from '../models/spaceCraft';
import { metaTags } from '../../core/metaTags';

@Component({
  selector: 'app-space-crafts',
  templateUrl: './space-crafts.component.html',
  styleUrls: ['./space-crafts.component.css']
})
export class SpaceCraftsComponent implements OnInit {
  spaceCrafts:Array<spaceCraft> = [];
  constructor(private roscosmos:RoscosmosService,@Inject(DOCUMENT) private doc: any,
  private metaTags:metaTags) { }

  ngOnInit(): void {
    this.updateMetatags();
    this.getSpacecrafts();
  }

  updateMetatags(){
    this.metaTags.updateMetatags('CosmosStuff - Roscosmos Space-Crafts',this.doc.createElement('link'),this.createMetaTagsArray());
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

  getSpacecrafts(){
    this.spaceCrafts = this.roscosmos.getSpaceCrafts();
  }

  openInANewTab(img:any){
    window.open(img);
  }

}
