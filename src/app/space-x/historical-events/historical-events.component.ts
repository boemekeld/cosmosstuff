import { Component, Inject, OnInit } from '@angular/core';
import { exportToExcel } from 'src/app/core/exportExcel';
import { modals } from 'src/app/core/modals';
import { HistoricalService } from 'src/app/services/spaceX/historical.service';
import { historical } from '../models/historical';
import { metaTags } from '../../core/metaTags';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-historical-events',
  templateUrl: './historical-events.component.html',
  styleUrls: ['./historical-events.component.css']
})
export class HistoricalEventsComponent implements OnInit {
  isLoading:boolean = false;
  historical:historical = new historical()
  historicalArr:historical[] = [];
  constructor(
    private exportXlsx: exportToExcel
    ,private modal:modals
    ,private spaceXService:HistoricalService
    ,private metaTags:metaTags
    ,@Inject(DOCUMENT) private doc: any) { }

  ngOnInit(): void {
    this.updateMetatags()
    this.callHistoricalApi();
  }

  callHistoricalApi(){
    this.isLoading = true;
    this.spaceXService.getHistoricalData().subscribe(response=>{
      this.bindObject(response)
    },error=>{
      this.modal.errorModal('This server is out, try again later')
    })
  }

  bindObject(historicalData:any){
    for(let h of historicalData){
      this.historical = new historical();
      this.historical.details = h.details
      this.historical.eventDateUtc = h.event_date_utc
      this.historical.flightNumber = h.flight_number
      this.historical.id = h.id
      this.historical.wikipedia = h.links.wikipedia
      this.historical.article = h.links.article
      this.historicalArr.push(this.historical)
    }
    this.isLoading = false
  }

  exportToExcel(){
    this.exportXlsx.exportToExcel('spaceXHistorical')
  }

  updateMetatags(){
    this.metaTags.updateMetatags('CosmosStuff - SpaceX Historical',this.doc.createElement('link'),this.createMetaTagsArray());
  }

  createMetaTagsArray(){
    let metaTags = [
      {name:'keywords',content:'nasa, spaceX, starlink, space,cosmos, tech, asteroids, jamesweb'},
      {name:'robots',content:'index, follow'},
      {name:'author',content:'CosmosStuff'},
      {name:'viewport',content:'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0'},
      {name:'date',content:''},
      {name:'description',content:`Discovery the spaceX historical events.`},
    ]
    return metaTags;
  }
}
