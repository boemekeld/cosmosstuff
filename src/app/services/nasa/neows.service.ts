import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { credentials } from '../credentials';

@Injectable({
  providedIn: 'root'
})
export class NeowsService {
  constructor(private http:HttpClient,private credentials:credentials) { }
  getNeows(startDate:string,endDate:string){
    return this.http.get(this.credentials.getNasaCredentials('neows',startDate,endDate))
  }
}
