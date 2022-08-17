import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { credentials } from '../credentials';


@Injectable({
  providedIn: 'root'
})
export class DragonsService {

  constructor(private http:HttpClient,private credentials:credentials) { }

  getDragons(){
    return this.http.get(this.credentials.getSpaceXCredentials('dragons'))
  }
}
