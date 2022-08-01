import { Component, OnInit } from '@angular/core';
import { ApodService } from 'src/app/services/nasa/apod.service';

@Component({
  selector: 'app-apod-nasa',
  templateUrl: './apod-nasa.component.html',
  styleUrls: ['./apod-nasa.component.css']
})
export class ApodNasaComponent implements OnInit {
  apodData:any;
  constructor(private apod:ApodService) { }

  ngOnInit(): void {
    this.getApod()
  }
  getApod(){
    this.apod.get().subscribe(response=>{
      this.apodData = response;
    },error=>{

    })
  }
}
