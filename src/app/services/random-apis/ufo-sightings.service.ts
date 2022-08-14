import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { credentials } from '../credentials';

@Injectable({
  providedIn: 'root'
})
export class UfoSightingsService {

  constructor(private http:HttpClient,private credentials:credentials) { }

  getUffoSightings(query:string[]){
    return this.http.get(this.credentials.getRandomApisCredentials('ufo-sightings',query))
  }
}
