import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { RoscosmosService } from 'src/app/services/roscosmos/roscosmos.service';
import { spaceTugs } from '../models/spaceTugs';
import { metaTags } from '../../core/metaTags';

@Component({
  selector: 'app-space-tugs',
  templateUrl: './space-tugs.component.html',
  styleUrls: ['./space-tugs.component.css']
})
export class SpaceTugsComponent implements OnInit {

  constructor(private roscosmosService:RoscosmosService,@Inject(DOCUMENT) private doc: any,
  private metaTags:metaTags) { }
  spaceTugs:Array<spaceTugs> = []
  ngOnInit(): void {
    this.updateMetatags();
    this.bindObject();
  }

  updateMetatags(){
    this.metaTags.updateMetatags('CosmosStuff - Roscosmos Space-Tugs',this.doc.createElement('link'),this.createMetaTagsArray());
  }

  createMetaTagsArray(){
    let metaTags = [
      {name:'keywords',content:'Roscosmos, space tug, space tugs, tug, tugs, space, russia, asia,cosmos, tech, asteroids'},
      {name:'robots',content:'index, follow'},
      {name:'author',content:'CosmosStuff'},
      {name:'viewport',content:'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0'},
      {name:'date',content:''},
      {name:'description',content:`This component displays tools that retrieve data directly from the Roscosmos databases. Enjoy the data from the Russia spacial program.`},
    ]
    return metaTags;
  }

  bindObject(){
    this.spaceTugs = this.roscosmosService.getSpacetugs()
  }

  openInANewTab(spaceTugImg?:string){
    window.open(spaceTugImg);
  }

}
