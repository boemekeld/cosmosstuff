import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lang } from 'moment';
import { AppComponent } from '../app.component';
import { SharedDataService } from '../services/shared-data.service';
import { ActivatedRoute } from "@angular/router";
import { SupportersComponent } from '../supporters/supporters.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  language:any
  langForm = new FormGroup({
    language: new FormControl('', Validators.required),
  });
  display: any[] = []
  constructor(private router: Router, private appComponent: AppComponent,private sharedData:SharedDataService) { }

  ngOnInit(): void {
    this.setDisplay();
    this.listenToLanguage();
    this.setLanguage();
  }

  async setLanguage(){
    this.language = await this.sharedData.getSharedLanguage();
    this.langForm.controls['language'].setValue(this.language);  
  }

  setDisplay() {
    this.display = [{ name: 'english', flag: 'en' }, { name: 'português', flag: 'pt' }]
  }

  navigate(option: number) {
    switch (option) {
      case 1:
        this.router.navigate(['']);
        break;
      case 2:
        this.router.navigate(['settings']);
        break;
      case 3:
        this.router.navigate(['contact']);
        break;
      case 4:
        this.router.navigate(['supporters']);
        break;
    }
  }

  listenToLanguage(){
    this.langForm.controls['language'].valueChanges.subscribe(val => {
      this.changeLanguage(val)
    });
  }
  changeLanguage(language: string) {
    this.appComponent.changeLanguage(language);
  }
}
