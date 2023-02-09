import { Component, OnInit } from '@angular/core';
import { supportersFactory } from '../core/supportersFactory';
import { supporter } from './models/supporter';
import { TranslateService } from "@ngx-translate/core";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-supporters',
  templateUrl: './supporters.component.html',
  styleUrls: ['./supporters.component.css']
})
export class SupportersComponent implements OnInit {
  supporters:supporter[] = [];  
  subscription: Subscription | undefined;
  message = 'Initial message';
  constructor(private supporterFactory:supportersFactory,private translate: TranslateService) { }

  ngOnInit(): void {
    
  }

  ngOnDestroy() {
    if(this.subscription){this.subscription.unsubscribe();}
  }

  visitProfile(url:any){
    window.open(url)
  }

}
