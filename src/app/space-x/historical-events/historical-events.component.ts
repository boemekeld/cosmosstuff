import { Component, OnInit } from '@angular/core';
import { exportToExcel } from 'src/app/core/exportExcel';
import { modals } from 'src/app/core/modals';
import { HistoricalService } from 'src/app/services/spaceX/historical.service';
import { historical } from '../models/historical';

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
    ,private spaceXService:HistoricalService) { }

  ngOnInit(): void {
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
}
