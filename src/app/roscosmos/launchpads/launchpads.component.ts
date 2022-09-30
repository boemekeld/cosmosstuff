import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { RoscosmosService } from 'src/app/services/roscosmos/roscosmos.service';
import { launchPad } from '../models/launchPad';
import { metaTags } from '../../core/metaTags';


@Component({
  selector: 'app-launchpads',
  templateUrl: './launchpads.component.html',
  styleUrls: ['./launchpads.component.css']
})
export class LaunchpadsComponent implements OnInit {

  constructor(private roscosmos:RoscosmosService,@Inject(DOCUMENT) private doc: any,
  private metaTags:metaTags) { }
  lauchPads:Array<launchPad> = [];
  ngOnInit(): void {
    this.updateMetatags();
    this.getLaunchpads();
  }

  updateMetatags(){
    this.metaTags.updateMetatags('CosmosStuff - Launchpads Roscosmos',this.doc.createElement('link'),this.createMetaTagsArray());
  }

  createMetaTagsArray(){
    let metaTags = [
      {name:'keywords',content:'Roscosmos, Launchpads,space, russia, asia,cosmos, tech, asteroids'},
      {name:'robots',content:'index, follow'},
      {name:'author',content:'CosmosStuff'},
      {name:'viewport',content:'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0'},
      {name:'date',content:''},
      {name:'description',content:`This component displays the launchpads from the Roscosmos space program. Enjoy the data from the Russia spacial program.`},
    ]
    return metaTags;
  }

  getLaunchpads(){
    this.lauchPads = this.roscosmos.getlaunchPads();
  }

  openInANewTab(image:any){
    window.open(image)
  }

}
