import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { credentials } from '../credentials';


@Injectable({
  providedIn: 'root'
})
export class JamesWebbService {

  constructor(private http:HttpClient,private credentials:credentials) { }

  getJamesWebbData(page:string[]){
    return this.http.get(this.credentials.getRandomApisCredentials('james-webb',page))
  }

}
