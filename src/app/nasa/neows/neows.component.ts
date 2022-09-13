import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { exportToExcel } from 'src/app/core/exportExcel';
import { NeowsService } from 'src/app/services/nasa/neows.service';
import { asteroid } from '../models/asteroid';
import * as moment from 'moment';
import { modals } from 'src/app/core/modals';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-neows',
  templateUrl: './neows.component.html',
  styleUrls: ['./neows.component.css']
})
export class NeowsComponent implements OnInit {

  newosForm = new FormGroup({
    startDate: new FormControl(null, Validators.required),
    endDate: new FormControl(null, Validators.required),
  });

  constructor(private service: NeowsService
    , private exportXlsx: exportToExcel
    ,private modal:modals,private metaTagService: Meta, private titleService: Title, @Inject(DOCUMENT) private doc: any) { }
  isLoading: boolean = false;
  asteroid!: asteroid;
  asteroidArray: asteroid[] = [];

  ngOnInit(): void {
    this.metatagsImplementation();
  }

  search() {
    let check = this.verifyDateRange()
    if (check) {
      this.requestNeos()
    } else {
      this.modal.errorModal('The maximum days in this search are seven')
    }
  }

  verifyDateRange(): boolean {
    let startDate = this.newosForm.controls['startDate'].value
    let endDate = this.newosForm.controls['endDate'].value
    const diffInDate = moment(endDate).diff(moment(startDate), 'days');
    let check:boolean;
    diffInDate <= 7 ? check = true : check = false;
    return check;
  }

  requestNeos() {
    this.isLoading = true;
    this.service.getNeows(this.newosForm.controls['startDate'].value, this.newosForm.controls['endDate'].value)
      .subscribe((response: any) => {
        let asteroids = response.near_earth_objects
        this.bindAsteroids(asteroids)
      }, error => {

      })
  }

  bindAsteroids(asteroids: any) {
    //Primeira interação para buscar a data
    for (let data of Object.entries(asteroids)) {
      //segunda interação
      let newData: any = data[1]
      for (let array of newData) {
        this.asteroid = new asteroid()
        this.asteroid.date = data[0]
        this.asteroid.absoluteMagnitudeH = array.absolute_magnitude_h;
        this.asteroid.isPotentiallyHazardousAsteroid = array.is_potentially_hazardous_asteroid;
        this.asteroid.name = array.name;
        this.asteroid.nasaLink = array.nasa_jpl_url
        //interação de close_approach_data
        this.asteroid.closeApproachDate = array.close_approach_data[0].close_approach_date
        //size
        //feet
        this.asteroid.estimatedDiameterMaxFeet = array.estimated_diameter.feet.estimated_diameter_max
        this.asteroid.estimatedDiameterMinFeet = array.estimated_diameter.feet.estimated_diameter_min
        //Km
        this.asteroid.estimatedDiameterMaxKm = array.estimated_diameter.kilometers.estimated_diameter_max
        this.asteroid.estimatedDiameterMinKm = array.estimated_diameter.kilometers.estimated_diameter_min
        //Meters
        this.asteroid.estimatedDiameterMaxMeters = array.estimated_diameter.meters.estimated_diameter_max
        this.asteroid.estimatedDiameterMinMeters = array.estimated_diameter.meters.estimated_diameter_min
        //Miles
        this.asteroid.estimatedDiameterMaxMiles = array.estimated_diameter.miles.estimated_diameter_max
        this.asteroid.estimatedDiameterMinMiles = array.estimated_diameter.miles.estimated_diameter_min
        //distance
        //astronomical
        this.asteroid.astronomicalDistance = array.close_approach_data[0].miss_distance.astronomical
        this.asteroid.kilometersDistance = array.close_approach_data[0].miss_distance.kilometers
        this.asteroid.lunarDistance = array.close_approach_data[0].miss_distance.lunar
        this.asteroid.milesDistance = array.close_approach_data[0].miss_distance.miles
        //push asteroid to array
        this.asteroidArray.push(this.asteroid)
      }
      this.asteroidArray.sort((a: any, b: any) => a.date.localeCompare(b.date))
      this.isLoading = false;
    }
  }

  changeFlag() {
    this.isLoading = false;
    this.asteroidArray = []
  }

  exportToExcel() {
    this.exportXlsx.exportToExcel(`neowsSearchBetween${this.newosForm.controls['startDate'].value}and${this.newosForm.controls['endDate'].value}`)
    this.modal.successModal('Your file was successfully exported')
  }

  metatagsImplementation() {
    this.titleService.setTitle('CosmosStuff - Neows')
    let today = this.getCurrentDate();
    this.metaTagService.addTags([
      {
        name: 'keywords', content: 'nasa, spaceX, starlink, space,cosmos, tech, asteroids, jamesweb',
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'CosmosStuff' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0' },
      { name: 'date', content: `${today}`, scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' },
      { httpEquiv: 'Content-Type',content:'text/html; charset=utf-8' },
      { name: 'description',content:`Explore in detail the asteroids that have passed close to our planet and those that will pass.
      Learn about length, distance and more in this amazing tool.` },
      { httpEquiv: 'x-dns-prefetch-control',content:'on' },
    ]);

    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.doc.head.appendChild(link);
    link.setAttribute('href', this.doc.URL);
  }

  getCurrentDate():string {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    let date;
    date = mm + '/' + dd + '/' + yyyy;
    return date.toString();
  }


}
