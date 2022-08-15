import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { credentials } from '../credentials';

@Injectable({
  providedIn: 'root'
})
export class HistoricalService {

  constructor(private http:HttpClient,private credentials:credentials) { }
  getHistoricalData(){
    return this.http.get(this.credentials.getSpaceXCredentials('historical'))
  }
}
