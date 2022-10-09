import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { credentials } from '../credentials';


@Injectable({
  providedIn: 'root'
})
export class JamesWebbService {

  constructor(private http:HttpClient,private credentials:credentials) { }

  getJamesWebbData(page:string[]){
    let headers = new HttpHeaders().set('X-API-KEY', '0aa0d62c-88e3-48ef-a96c-b802ed3d86f1');
    return this.http.get(this.credentials.getRandomApisCredentials('james-webb',page),{ headers: headers })
  }

}
