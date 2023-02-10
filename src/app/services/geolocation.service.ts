import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedDataService } from './shared-data.service';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  lusoCountries = ['PT','BR','AO','MZ','MO','GW','CV','ST']
  constructor(private http: HttpClient) { }

  async getLocationByIp() {
    return await new Promise((resolve, reject) => {
      this.http.get('https://ipapi.co/json/').subscribe((data: any) => {
        if (this.lusoCountries.includes(data.country)) {
         resolve('pt');
        }
       resolve('en');
      });
    });
  }

}
