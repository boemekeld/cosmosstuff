import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { credentials } from './credentials';

@Injectable({
  providedIn: 'root'
})
export class ApodService {
  constructor(private http:HttpClient,private credentials:credentials) { }
  
  get(){
    return this.http.get(this.credentials.getCredentials('apod'))
  }
}
