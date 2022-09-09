import { Component, OnInit } from '@angular/core';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private settings:SettingsComponent) { }

  ngOnInit(): void {
    this.settings.loadPalette();
  }

}
