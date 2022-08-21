import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { credentials } from '../credentials';


@Injectable({
  providedIn: 'root'
})
export class RocketsService {

  constructor(private http:HttpClient,private credentials:credentials) { }

  getRockets(){
    return this.http.get(this.credentials.getSpaceXCredentials('rockets'))
  }
}
