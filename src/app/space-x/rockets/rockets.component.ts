import { Component, Inject, OnInit } from '@angular/core';
import { modals } from 'src/app/core/modals';
import { RocketsService } from 'src/app/services/spaceX/rockets.service';
import { rocket } from '../models/rocket';
import { metaTags } from '../../core/metaTags';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.css']
})
export class RocketsComponent implements OnInit {
  rocketObj: rocket = new rocket();
  rockertObjArray: rocket[] = []
  isLoading: boolean = false;
  constructor(private rockets: RocketsService, private modal: modals,private metaTags:metaTags,@Inject(DOCUMENT) private doc: any,) { }

  ngOnInit(): void {
    this.updateMetatags()
    this.callRocketsApi()
  }

  callRocketsApi() {
    this.isLoading = true;
    this.rockets.getRockets().subscribe(response => {
      this.bindObject(response)
    }, error => {
      this.modal.errorModal('The server does not answer, try again later...')
    })
  }

  bindObject(rockets: any) {
    for (let r of rockets) {
      this.rocketObj = new rocket();
      this.rocketObj.active = r.active;
      this.rocketObj.boosters = r.boosters;
      this.rocketObj.costPerLunch = r.cost_per_launch
      this.rocketObj.country = r.country;
      this.rocketObj.description = r.description;
      this.rocketObj.diameter = r.diameter;
      this.rocketObj.engines = r.engines;
      this.rocketObj.firstFlight = r.first_flight;
      this.rocketObj.firstStage = r.first_stage;
      this.rocketObj.flickrImages = r.flickr_images;
      this.rocketObj.height = r.height;
      this.rocketObj.mass = r.mass;
      this.rocketObj.payloadWeights = r.payload_weights;
      this.rocketObj.rocketId = r.rocket_id;
      this.rocketObj.rocketName = r.rocket_name;
      this.rocketObj.rocketType = r.rocket_type;
      this.rocketObj.secondStage = r.second_stage;
      this.rocketObj.thrust = r.thrust;
      this.rocketObj.stages = r.stages;
      this.rocketObj.successRatePct = r.success_rate_pct;
      this.rocketObj.wikipedia = r.wikipedia;
      this.rockertObjArray.push(this.rocketObj);
    }
    this.isLoading = false;
  }

  openInANewTab(url: any) {
    for (let rocket of url) {
      window.open(rocket)
    }
  }

  updateMetatags(){
    this.metaTags.updateMetatags('CosmosStuff - Rockets',this.doc.createElement('link'),this.createMetaTagsArray());
  }

  createMetaTagsArray(){
    let metaTags = [
      {name:'keywords',content:'nasa, spaceX, starlink, space,cosmos, tech, asteroids, jamesweb'},
      {name:'robots',content:'index, follow'},
      {name:'author',content:'CosmosStuff'},
      {name:'viewport',content:'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0'},
      {name:'date',content:''},
      {name:'description',content:`This tool shows the SpaceX rockets in detail, take a look at how this machine works, what are their purpose and more.`},
    ]
    return metaTags;
  }
}
