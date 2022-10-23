import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { exportToExcel } from 'src/app/core/exportExcel';
import { modals } from 'src/app/core/modals';
import { SunsetService } from 'src/app/services/random-apis/sunset.service';
import { sunset } from '../models/sunset';
import { metaTags } from '../../core/metaTags';

@Component({
  selector: 'app-sunrise-sunset',
  templateUrl: './sunrise-sunset.component.html',
  styleUrls: ['./sunrise-sunset.component.css']
})
export class SunriseSunsetComponent implements OnInit {
  sunForm = new FormGroup({
    latitude: new FormControl(null, Validators.required),
    longitude: new FormControl(null, Validators.required),
    date: new FormControl(null, Validators.required),
  });
  isLoading: boolean = false;
  sun:sunset = new sunset();
  constructor(private sunsetService: SunsetService, private modal: modals,private xlsx:exportToExcel,@Inject(DOCUMENT) private doc: any,
  private metaTags:metaTags) { }

  ngOnInit(): void {
    this.updateMetatags();
  }

  updateMetatags(){
    this.metaTags.updateMetatags('CosmosStuff - Nasa',this.doc.createElement('link'),this.createMetaTagsArray());
  }

  createMetaTagsArray(){
    let metaTags = [
      {name:'keywords',content:'nasa, sunset, sunrise, summer,winter, spring, latitude, longitude'},
      {name:'robots',content:'index, follow'},
      {name:'author',content:'CosmosStuff'},
      {name:'viewport',content:'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0'},
      {name:'date',content:''},
      {name:'description',content:`Explore in detail the asteroids that have passed close to our planet and those that will pass.
      Learn about length, distance and more in this amazing tool.`},
    ]
    return metaTags;
  }

  search() {
    this.isLoading = true;
    let isValid = this.checkForm()
    if (isValid) {
      let queryArray = []
      queryArray.push(this.sunForm.controls['latitude'].value)
      queryArray.push(this.sunForm.controls['longitude'].value)
      queryArray.push(this.sunForm.controls['date'].value)
      this.callApi(queryArray);
    } else {
      this.modal.errorModal('Please, fill all the blanks')
      this.isLoading = false;
    }

  }

  callApi(query:string[]){
    this.sunsetService.getSunset(query).subscribe((response:any) => {
      this.bindObjects(response.results)
    },(error:any) => {
      this.isLoading = false;
      this.modal.errorModal('The service is not avaiable at moment, try again later...')
    },()=>{})
  }

  bindObjects(sun:any){
    this.sun = {
      astronomicalTwilightBegin:sun.astronomical_twilight_begin,
      astronomicalTwilightEnd:sun.astronomical_twilight_end,
      civilTwilightBegin:sun.civil_twilight_begin,
      civilTwilightEnd:sun.civil_twilight_end,
      solarNoon:sun.solar_noon,
      sunrise:sun.sunrise,
      sunset:sun.sunset
    }
    this.isLoading = false;
    console.log(this.sun)
  }

  checkForm() {
    if (this.sunForm.invalid) {
      return false;
    }
    return true;
  }

  changeFlag(){
    this.sun = {};
  }

  exportToExcel(){
    this.xlsx.exportToExcel('sunrise-sunset-tool')
  }

}
