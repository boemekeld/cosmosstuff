import { Component, OnInit } from '@angular/core';
import { RoscosmosService } from 'src/app/services/roscosmos/roscosmos.service';
import { spaceCraft } from '../models/spaceCraft';

@Component({
  selector: 'app-space-crafts',
  templateUrl: './space-crafts.component.html',
  styleUrls: ['./space-crafts.component.css']
})
export class SpaceCraftsComponent implements OnInit {
  spaceCrafts:Array<spaceCraft> = [];
  constructor(private roscosmos:RoscosmosService) { }

  ngOnInit(): void {
    this.getSpacecrafts();
  }

  getSpacecrafts(){
    this.spaceCrafts = this.roscosmos.getSpaceCrafts();
  }

  openInANewTab(img:any){
    window.open(img);
  }

}
