import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { GeolocationService } from './services/geolocation.service';
import { SharedDataService } from './services/shared-data.service';

declare const gtag: Function; // <------------Important: the declartion for gtag is required!

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'cosmosstuff';
  currentLanguage='';
  constructor(private router: Router, private translate: TranslateService, private sharedData:SharedDataService) {
    translate.setDefaultLang('en');
    translate.use('en');
    /** START : Code to Track Page View using gtag.js */
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      gtag('event', 'page_view', {
        page_path: event.urlAfterRedirects
      })
    })
    /** END : Code to Track Page View  using gtag.js */
  }
  
  ngOnInit() {
    window.scrollTo(0, 0);
    this.getIp()
  }
  changeLanguage(countryCode: any) {
    this.translate.use(countryCode);
  }
  async getIp() {
    let geoLocation = await this.sharedData.getGeoLocation();
    await this.changeLanguage(geoLocation);
  }
  
  
  
  
}


