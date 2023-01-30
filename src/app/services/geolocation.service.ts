import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedDataService } from './shared-data.service';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor(private http: HttpClient) { }

  async getLocationByIp() {
    return await new Promise((resolve, reject) => {
      this.http.get('https://ipapi.co/json/').subscribe((data: any) => {
        debugger;
        if (data.country == 'BR') {
         resolve('pt');
        }
       resolve('en');
      });
    });
  }

}
