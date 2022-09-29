import { Component, OnInit } from '@angular/core';
import { RoscosmosService } from 'src/app/services/roscosmos/roscosmos.service';
import { spaceTugs } from '../models/spaceTugs';

@Component({
  selector: 'app-space-tugs',
  templateUrl: './space-tugs.component.html',
  styleUrls: ['./space-tugs.component.css']
})
export class SpaceTugsComponent implements OnInit {

  constructor(private roscosmosService:RoscosmosService) { }
  spaceTugs:Array<spaceTugs> = []
  ngOnInit(): void {
    this.bindObject()
  }

  bindObject(){
    this.spaceTugs = this.roscosmosService.getSpacetugs()
  }

  openInANewTab(spaceTugImg?:string){
    window.open(spaceTugImg);
  }

}
