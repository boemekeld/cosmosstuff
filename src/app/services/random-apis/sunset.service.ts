import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { credentials } from '../credentials';

@Injectable({
  providedIn: 'root'
})
export class SunsetService {

  constructor(private http:HttpClient,private credentials:credentials) { }

  getSunset(query:string[]){
    return this.http.get(this.credentials.getRandomApisCredentials('sunset',query))
  }
}
