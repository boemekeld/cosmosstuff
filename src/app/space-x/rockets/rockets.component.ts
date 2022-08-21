import { Component, OnInit } from '@angular/core';
import { RocketsService } from 'src/app/services/spaceX/rockets.service';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.css']
})
export class RocketsComponent implements OnInit {

  constructor(private rockets:RocketsService) { }

  ngOnInit(): void {
    this.callRocketsApi()
  }

  callRocketsApi(){
    this.rockets.getRockets().subscribe(response=>{
      this.bindObject(response)
    },error=>{

    })
  }

  bindObject(rockets:any){

  }
}
