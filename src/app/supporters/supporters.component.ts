import { Component, OnInit } from '@angular/core';
import { supportersFactory } from '../core/supportersFactory';
import { supporter } from './models/supporter';

@Component({
  selector: 'app-supporters',
  templateUrl: './supporters.component.html',
  styleUrls: ['./supporters.component.css']
})
export class SupportersComponent implements OnInit {
  supporters:supporter[] = [];  
  constructor(private supporterFactory:supportersFactory) { }

  ngOnInit(): void {
    this.getSupporters();
  }

  getSupporters(){
    debugger;
    this.supporters = this.supporterFactory.createSupporters();
  }

}
