import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { SettingsComponent } from '../settings/settings.component';
import { DOCUMENT } from '@angular/common';
import { metaTags } from '../core/metaTags';
import { NeowsService } from '../services/nasa/neows.service';
import { dateTool } from '../core/dateTool';
import { asteroid } from '../nasa/models/asteroid';
import { MarsRoversService } from '../services/nasa/mars-rovers.service';
import { modals } from '../core/modals';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  asteroid!: asteroid;
  asteroidArray: asteroid[] = [];
  marsPhoto: any;
  randomDate: string = '';
  constructor(private settings: SettingsComponent,
    @Inject(DOCUMENT) private doc: any,
    private metaTags: metaTags,
    private asteroidsService: NeowsService,
    private dateService: dateTool,
    private marsRovers: MarsRoversService,
    private modal: modals
  ) { }

  ngOnInit(): void {
    this.marsPhoto = { 'img_src': undefined };
    this.settings.loadPalette();
    this.updateMetatags();
    this.getAsteroids();
    this.getMarsPhoto();
    this.welcomeMessage();
  }

  welcomeMessage() {
    let key: any = localStorage.getItem('firstVisit');
    if (key) {
      localStorage.setItem('firstVisit', JSON.stringify('false'))
    } else {
      this.modal.successModal('You are Welcome! We detected that it is your first visit. You can change the colors and more in settings, if you want to send any suggestion just use the contact channel, and of course, if you liked this tool support us and help the free and oline content on the internet =D. Enjoy our tools!!')
      localStorage.setItem('firstVisit', JSON.stringify('false'))
    }

  }

  updateMetatags() {
    this.metaTags.updateMetatags('CosmosStuff - Home', this.doc.createElement('link'), this.createMetaTagsArray());
  }

  createMetaTagsArray() {
    let metaTags = [
      { name: 'keywords', content: 'nasa, spaceX, starlink, space,cosmos, tech, asteroids, jamesweb' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'CosmosStuff' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0' },
      { name: 'date', content: '' },
      { name: 'description', content: `This project's mission is to bring you to the cosmos using data retrieved directly from the best internet sources available. Here you will find data about asteroids, mars, starlink, ufo and everything related to rocket science. Our team is constantly upgrading this website to provide you with the best experience.` },
    ]
    return metaTags;
  }

  getAsteroids() {
    let yesterday = this.dateService.getYesteday();
    this.asteroidsService.getNeows(yesterday, yesterday).subscribe((response: any) => {
      let asteroids = response.near_earth_objects
      this.bindAsteroids(asteroids)
    }, error => {

    }, () => { })
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
      this.asteroidArray.sort((a: any, b: any) => a.kilometersDistance.localeCompare(b.kilometersDistance))
      //pegando os 5 primeiros
      this.asteroidArray = this.asteroidArray.slice(0, 3);
    }
  }

  getMarsPhoto() {
    this.randomDate = this.dateService.getRandomDate();
    this.marsRovers.getMarsPhotos(this.randomDate, 'curiosity').subscribe((response: any) => {
      this.marsPhoto = response.photos.pop();
    }, error => {
      this.getMarsPhoto();
    })
  }

}
