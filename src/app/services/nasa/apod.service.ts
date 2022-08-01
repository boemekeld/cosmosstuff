import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApodService {
  key:string = '7oCa6Pb04FodgOPT6YKZvlGQnh2SYcmKPlJcm9XC'
  url:string = ' https://api.nasa.gov/planetary/apod?api_key='
  constructor(private http:HttpClient) { }
  
  get(){
    return this.http.get(this.url + this.key)
  }
}
