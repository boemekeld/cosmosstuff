import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { modals } from 'src/app/core/modals';
import { LaunchesService } from 'src/app/services/random-apis/launches.service';
import { launch } from '../models/launch';
import { metaTags } from '../../core/metaTags';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {
  launchesForm = new FormGroup({
    limit: new FormControl(null, Validators.required),
    offset: new FormControl(10, Validators.required),
    display: new FormControl(null, Validators.required)
  });

  limitInput: string = '';
  offsetInput: string = ''
  displayInput:boolean = false;
  launcheArr:Array<launch> = new Array<launch>();
  launchObj?:launch;
  isLoading?:boolean = false;
  display:any[] = []

  constructor(private modal: modals, private launchService: LaunchesService, @Inject(DOCUMENT) private doc: any,
  private metaTags:metaTags) { }

  ngOnInit(): void {
    this.setDisplay();
    this.updateMetatags();
  }
  setDisplay(){
    this.display = [{ name: 'Basic' }, { name: 'Complete' }]
  }
  attBindForm() {
    this.limitInput = this.launchesForm.controls['limit'].value
    this.offsetInput = this.launchesForm.controls['offset'].value

    this.launchesForm.controls['display'].value == null || this.launchesForm.controls['display'].value == 'Basic' ? 
    this.displayInput = false : this.displayInput = true;
  }

  search() {
    let check = this.verifyForm()
    if (check) {
      this.isLoading = true;
      this.callApi();
    } else {
      this.modal.errorModal('Please fill all the blanks')
    }
  }

  verifyForm(): boolean {
    this.attBindForm()
    if (this.limitInput && this.offsetInput) {
      return true;
    } else {
      return false
    }
  }

  callApi() {
    let stringArray = [this.limitInput, this.offsetInput]
    this.launchService.getLaunches(stringArray).subscribe((response:any) => {
      let launches = response.results
      this.bindObjects(launches)
    }, error => {
      this.isLoading = false;
      this.modal.errorModal('The server did not answer. Try again later.')
    })
  }

  bindObjects(launches:any){
    for(let lh of launches){
      this.launchObj = new launch();
      this.launchObj = {
        id:lh?.id,
        failReason:lh?.failreason,
        hashtag:lh?.hashtag,
        holdReason:lh?.holdreason,
        image:lh?.image,
        infoGraphic:lh?.infographic,
        lastUpdated:lh?.last_updated,
        name:lh?.name,
        net:lh?.net,
        probability:lh?.probability,
        program:lh?.program,
        slug:lh?.slug,
        windowEnd:lh?.window_end,
        windowStart:lh?.window_start,
      }
      this.launchObj.launchServiceProvider = {
        name:lh.launch_service_provider?.name,
        type:lh.launch_service_provider?.type,
      }
      this.launchObj.mission = {
        description:lh.mission?.description,
        id:lh.mission?.id,
        launchDesignator:lh.mission?.launch_designator,
        name:lh.mission?.name,
      }
      this.launchObj.mission.orbit = {
        id:lh.mission?.orbit.id,
        name:lh.mission?.orbit.name,
        abbrev:lh.mission?.orbit.abbrev
      }
      this.launchObj.pad = {
        agencyId:lh.pad?.agency_id,
        id:lh.pad?.id,
        infoUrl:lh.pad?.info_url,
        latitude:lh.pad?.latitude,
        longitude:lh.pad?.longitude,
        mapImage:lh.pad?.map_image,
        mapUrl:lh.pad?.map_url,
        name:lh.pad?.name,
        totalLaunchCount:lh.pad?.total_launch_count,
        wikiUrl:lh.pad?.wiki_url
      }
      this.launchObj.pad.location = {
        id:lh.pad.loication?.id,
        countryCode:lh.pad.loication?.country_code,
        mapImage:lh.pad.location?.map_image,
        name:lh.pad.loication?.name,
        totalLandingCount:lh.pad.loication?.total_landing_count,
        totalLaunchCount:lh.pad.loication?.total_launch_count,
      }
      this.launchObj.rocket = {
        id:lh.rocket?.id
      }
      this.launchObj.rocket.configuration = {
        family:lh.rocket.configuration?.family,
        fullName:lh.rocket.configuration?.full_name,
        id:lh.rocket.configuration?.id,
        name:lh.rocket.configuration?.name,
        variant:lh.rocket.configuration?.variant
      }
      this.launchObj.status = {
        abbrev:lh.status?.abbrev,
        description:lh.status?.description,
        id:lh.status?.id,
        name:lh.status?.name
      }
      this.launcheArr.push(this.launchObj)
    }
    this.isLoading = false;
  }

  changeFlag(){
    this.launcheArr = [];
  }
  openInANewTab(img:any){
    window.open(img)
  }

  
  updateMetatags(){
    this.metaTags.updateMetatags('CosmosStuff - Launches',this.doc.createElement('link'),this.createMetaTagsArray());
  }

  createMetaTagsArray(){
    let metaTags = [
      {name:'keywords',content:'nasa, spaceX, starlink, space,cosmos, tech, asteroids, jamesweb'},
      {name:'robots',content:'index, follow'},
      {name:'author',content:'CosmosStuff'},
      {name:'viewport',content:'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0'},
      {name:'date',content:''},
      {name:'description',content:`Get information about the SpaceX launches.`},
    ]
    return metaTags;
  }
}
