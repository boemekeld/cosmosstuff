import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NeowsService {
  url:string = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-08-03&end_date=2022-08-03&api_key='
  key:string = '7oCa6Pb04FodgOPT6YKZvlGQnh2SYcmKPlJcm9XC'
  constructor(private http:HttpClient) { }
  getNeows(){
    return this.http.get(this.url + this.key)
  }
}
