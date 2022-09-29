import { Component, OnInit } from '@angular/core';
import { RoscosmosService } from 'src/app/services/roscosmos/roscosmos.service';
import { launchPad } from '../models/launchPad';

@Component({
  selector: 'app-launchpads',
  templateUrl: './launchpads.component.html',
  styleUrls: ['./launchpads.component.css']
})
export class LaunchpadsComponent implements OnInit {

  constructor(private roscosmos:RoscosmosService) { }
  lauchPads:Array<launchPad> = [];
  ngOnInit(): void {
    this.getLaunchpads()
  }

  getLaunchpads(){
    this.lauchPads = this.roscosmos.getlaunchPads();
  }

  openInANewTab(image:any){
    window.open(image)
  }

}
