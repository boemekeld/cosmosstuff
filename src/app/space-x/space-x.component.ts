import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-space-x',
  templateUrl: './space-x.component.html',
  styleUrls: ['./space-x.component.css']
})
export class SpaceXComponent implements OnInit {

  constructor(private metaTagService: Meta, private titleService: Title, @Inject(DOCUMENT) private doc: any) { }

  ngOnInit(): void {
    this.metatagsImplementation()
  }
  
  metatagsImplementation() {
    this.titleService.setTitle('CosmosStuff - SpaceX')
    let today = this.getCurrentDate();
    this.metaTagService.addTags([
      {
        name: 'keywords', content: 'nasa, spaceX, starlink, space, cosmos, tech, asteroids, elon, musk, elonmusk',
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'CosmosStuff' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0' },
      { name: 'date', content: `${today}`, scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' },
      { httpEquiv: 'Content-Type',content:'text/html; charset=utf-8' },
      { name: 'description',content:'This tool displays data from SpaceX databases. Enjoy the best photos and data from this big company.' },
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
