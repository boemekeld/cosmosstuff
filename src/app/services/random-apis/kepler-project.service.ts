import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { credentials } from '../credentials';


@Injectable({
  providedIn: 'root'
})
export class KeplerProjectService {

  constructor(private http:HttpClient,private credentials:credentials) { }

  getExoPlanets(keplerQuery:string[]){
    return this.http.get(this.credentials.getRandomApisCredentials('kepler-project',keplerQuery)) 
  }
}
