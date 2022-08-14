import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { credentials } from '../credentials';

@Injectable({
  providedIn: 'root'
})
export class LaunchesService {

  constructor(private http:HttpClient,private credentials:credentials) { }

  getLaunches(query:string[]){
    return this.http.get(this.credentials.getRandomApisCredentials('launches',query))
  }
}
