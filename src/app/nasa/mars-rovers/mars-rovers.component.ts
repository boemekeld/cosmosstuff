import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { exportToExcel } from 'src/app/core/exportExcel';
import { modals } from 'src/app/core/modals';
import { MarsRoversService } from 'src/app/services/nasa/mars-rovers.service';
import { roverPhoto } from '../models/roverPhoto';
import { metaTags } from '../../core/metaTags';

@Component({
  selector: 'app-mars-rovers',
  templateUrl: './mars-rovers.component.html',
  styleUrls: ['./mars-rovers.component.css']
})
export class MarsRoversComponent implements OnInit {
  rovers: any[] = []
  display:any[] = []
  displayOption:boolean = false;
  roversForm = new FormGroup({
    date: new FormControl(null, Validators.required),
    rover: new FormControl(null, Validators.required),
    display: new FormControl(null, Validators.required)
  });
  
  roverPhotos: roverPhoto = new roverPhoto();
  roverPhotosArray: roverPhoto[] = [];
  isLoading: boolean = false;
  constructor(private metaTags:metaTags,private modals: modals, private roverService: MarsRoversService,private xlsx:exportToExcel,
    private metaTagService: Meta, 
    private titleService: Title, 
    @Inject(DOCUMENT) private doc: any) { }

  ngOnInit(): void {
    this.updateMetatags();
    this.setRovers()
    this.setDisplay()
  }

  setRovers() {
    this.rovers = [{ name: 'Curiosity' }, { name: 'Opportunity' }, { name: 'Spirit' }]
  }

  setDisplay(){
    this.display = [{ name: 'Cards' }, { name: 'Table' }]
  }

  search() {
    let check = this.verifyFields()
    if (check) {
      this.callMarsApi()
    } else {
      this.modals.errorModal('Please fill all the blanks')
    }
  }
  verifyFields(): boolean {
    let date = this.roversForm.controls['date'].value
    let rover = this.roversForm.controls['rover'].value
    let display = this.roversForm.controls['display'].value
    if (date && rover && display) {
      return true;
    } else {
      return false;
    }
  }

  callMarsApi() {
    this.isLoading = true;
    let date = this.roversForm.controls['date'].value
    let rover = this.roversForm.controls['rover'].value
    this.roverService.getMarsPhotos(date, rover).subscribe((response: any) => {
      let photosObj = response.photos;
      if (photosObj.length > 0) {
        this.bindObject(photosObj)
      } else {
        this.modals.infoModal(`This rover didn't took any photo on ${date}. You may change the date or the rover`)
        this.isLoading = false;
      }
    }, error => {

    })
  }

  bindObject(photosObj: any) {
    for (let obj of photosObj) {
      this.roverPhotos = new roverPhoto()
      this.roverPhotos.date = obj.earth_date;
      this.roverPhotos.fullCameraName = obj.camera.full_name;
      this.roverPhotos.imgSrc = obj.img_src;
      this.roverPhotos.landingDate = obj.rover.landing_date;
      this.roverPhotos.launchDate = obj.rover.launch_date;
      this.roverPhotos.roverName = obj.rover.name;
      this.roverPhotos.sol = obj.sol;
      this.roverPhotos.status = obj.rover.status;
      this.roverPhotosArray.push(this.roverPhotos);
    }
    this.isLoading = false;
    let display = this.roversForm.controls['display'].value
    display == 'Cards' ? this.displayOption = false : this.displayOption = true;
  }

  openInANewTab(url: any) {
    window.open(url)
  }

  exportToExcel(){
    let date = this.roversForm.controls['date'].value
    let rover = this.roversForm.controls['rover'].value
    this.xlsx.exportToExcel(`${rover}${date}`)
    this.modals.successModal('Your file was successfully exported')
  }

  changeFlag(){
    this.roverPhotosArray = []  
    this.displayOption == false
  }

  updateMetatags(){
    this.metaTags.updateMetatags('CosmosStuff - Apod',this.doc.createElement('link'),this.createMetaTagsArray());
  }

  createMetaTagsArray(){
    let metaTags = [
      {name:'keywords',content:'nasa, spaceX, starlink, space,cosmos, tech, asteroids, jamesweb'},
      {name:'robots',content:'index, follow'},
      {name:'author',content:'CosmosStuff'},
      {name:'viewport',content:'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0'},
      {name:'date',content:''},
      {name:'description',content:`Have you ever thought about visiting the red planet? Did you know that with this tool you are now able to? See as if you were on Mars the most exclusive photos from the Curiosity, Opportunity, and Spirit.`},
    ]
    return metaTags;
  }

}
