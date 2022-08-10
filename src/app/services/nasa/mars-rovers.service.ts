import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { credentials } from '../credentials';


@Injectable({
  providedIn: 'root'
})
export class MarsRoversService {

  constructor(private http:HttpClient,private credentials:credentials) { }

  getMarsPhotos(date:string,rover:string){
    return this.http.get(this.credentials.getNasaCredentials('mars-rovers',date,'',rover))
  }
}
