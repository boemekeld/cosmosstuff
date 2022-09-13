import { Component, Inject, OnInit } from '@angular/core';
import { ApodService } from 'src/app/services/nasa/apod.service';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-apod-nasa',
  templateUrl: './apod-nasa.component.html',
  styleUrls: ['./apod-nasa.component.css']
})
export class ApodNasaComponent implements OnInit {
  apodData:any;
  isVideo:boolean = false;
  constructor(private apod:ApodService,private metaTagService: Meta, private titleService: Title, @Inject(DOCUMENT) private doc: any) { }

  ngOnInit(): void {
    this.getApod()
    this.metatagsImplementation();
  }
  getApod(){
    this.apod.get().subscribe((response:any)=>{
      if(response.url.includes('youtube')){
        this.isVideo = true;
      }
      this.apodData = response;
    },error=>{

    })
  }

  metatagsImplementation() {
    this.titleService.setTitle('CosmosStuff - Apod')
    let today = this.getCurrentDate();
    this.metaTagService.addTags([
      {
        name: 'keywords', content: 'nasa, spaceX, starlink, space,cosmos, tech, asteroids, apod, picture, day,""',
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'CosmosStuff' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0' },
      { name: 'date', content: `${today}`, scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' },
      { httpEquiv: 'Content-Type',content:'text/html; charset=utf-8' },
      { name: 'description',content:`Every day NASA chooses a photo as the photo of the day. this tool shows exactly that photo in full size. It's a spectacle, follow this tool daily and receive amazing photos
      ` },
      { httpEquiv: 'x-dns-prefetch-control',content:'on' },
    ]);

    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.doc.head.appendChild(link);
    link.setAttribute('href', this.doc.URL);
  }

  getCurrentDate():string {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    let date;
    date = mm + '/' + dd + '/' + yyyy;
    return date.toString();
  }
}
