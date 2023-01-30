import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeolocationService } from './geolocation.service';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor(private http: HttpClient) { 
    
  }

  async getGeoLocation() {
    return new Promise((resolve, reject) => {
      this.http.get('https://ipapi.co/json/').subscribe((data: any) => {
        if (data.country == 'BR') {
          resolve('pt');
        }
        resolve('en');
      }, error => {
        reject(error);
      });
    });
  }

  async getSharedLanguage(){
    return await this.getGeoLocation();
  }
}
