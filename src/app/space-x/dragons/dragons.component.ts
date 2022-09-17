import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { modals } from 'src/app/core/modals';
import { DragonsService } from 'src/app/services/spaceX/dragons.service';
import { dragon } from '../models/dragon';
import { metaTags } from '../../core/metaTags';

@Component({
  selector: 'app-dragons',
  templateUrl: './dragons.component.html',
  styleUrls: ['./dragons.component.css']
})
export class DragonsComponent implements OnInit {
  isLoading:boolean = false;
  dragonArray:dragon[] = [];
  constructor(private dragonsService:DragonsService,private modal:modals,private metaTags:metaTags
    ,@Inject(DOCUMENT) private doc: any) { }

  ngOnInit(): void {
    this.callDragonsApi();
    this.updateMetatags();
  }

  callDragonsApi(){
    this.dragonsService.getDragons().subscribe(response=>{
      this.bindObject(response);
    },error=>{
      this.modal.errorModal('this service is unavailable, try again later')
    })
  }

  bindObject(dragons:any){
    for(let dApi of dragons){
      let d:dragon = new dragon()
      d.active = dApi.active
      d.crewCapacity = dApi.crew_capacity
      d.description = dApi.description
      d.diameter = dApi.diameter
      d.diameterFeet = dApi.diameter.feet
      d.diameterMeters = dApi.diameter.meters
      d.dryMassKg = dApi.dry_mass_kg
      d.dryMassLb = dApi.dry_mass_lb
      d.firstFlight = dApi.first_flight
      d.flickrImages = dApi.flickr_images
      d.heatShieldDevPartner = dApi.heat_shield.dev_partner
      d.heatShieldMaterial = dApi.heat_shield.material
      d.heatShieldSizeMeters = dApi.heat_shield.size_meters
      d.heatShieldTempDegress = dApi.heat_shield.temp_degrees
      d.heightWTruckFeet = dApi.height_w_trunk.feet
      d.heightWTruckMeters = dApi.height_w_trunk.meters
      d.id = dApi.id
      d.launchPayloadLb = dApi.launch_payload_mass.lb
      d.launchPayloadMass = dApi.launch_payload_mass
      d.launchPayloadVolCubicFeet = dApi.launch_payload_vol.cubic_feet
      d.launchPayloadVolCubicMeters = dApi.launch_payload_vol.cubic_meters
      d.name = dApi.name
      d.orbitDurationYr = dApi.orbit_duration_yr
      d.pressurizedCapsulePayloadVolumeCubicFeet = dApi.pressurized_capsule.payload_volume.cubic_feet
      d.pressurizedCapsulePayloadVolumeCubicMeters = dApi.pressurized_capsule.payload_volume.cubic_meters
      d.returbPayloadVolCubicFeet = dApi.return_payload_vol.cubic_feet
      d.returnPayloadVolCubicMeters = dApi.return_payload_vol.cubic_meters
      d.sideWallAngleDeg = dApi.sidewall_angle_deg
      d.trunkCargoSolarArray = dApi.trunk.cargo.solar_array
      d.trunkCargoUnpressurizedCargo = dApi.trunk.cargo.unpressurized_cargo
      d.trunkVolumeCubicFeet = dApi.trunk.trunk_volume.cubic_feet
      d.trunkVolumeCubicMeters = dApi.trunk.trunk_volume.cubic_meters
      d.type = dApi.type
      d.wikipedia = dApi.wikipedia
      this.dragonArray.push(d)
    }
    this.isLoading = false;
  }

  openInANewTab(imgs:any){
    for(let i of imgs){
      window.open(i)
    }
  }

  
  updateMetatags(){
    this.metaTags.updateMetatags('CosmosStuff - SpaceX Dragons',this.doc.createElement('link'),this.createMetaTagsArray());
  }

  createMetaTagsArray(){
    let metaTags = [
      {name:'keywords',content:'nasa, spaceX, starlink, space,cosmos, tech, asteroids, jamesweb'},
      {name:'robots',content:'index, follow'},
      {name:'author',content:'CosmosStuff'},
      {name:'viewport',content:'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0'},
      {name:'date',content:''},
      {name:'description',content:`Check it out the SpaceX dragons rovers and all the information about it.`},
    ]
    return metaTags;
  }

}
