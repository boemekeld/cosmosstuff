import { Component, Inject, OnInit } from '@angular/core';
import { ApodService } from 'src/app/services/nasa/apod.service';
import { Pipe, PipeTransform } from '@angular/core';
import { modals } from 'src/app/core/modals';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { metaTags } from '../../core/metaTags';



@Component({
  selector: 'app-apod-nasa',
  templateUrl: './apod-nasa.component.html',
  styleUrls: ['./apod-nasa.component.css']
})
export class ApodNasaComponent implements OnInit {
  apodData: any;
  isVideo: boolean = false;
  constructor(private metaTags: metaTags, private apod: ApodService, private metaTagService: Meta,
    private titleService: Title, @Inject(DOCUMENT) private doc: any,
    private modals: modals) { }

  ngOnInit(): void {
    this.getApod()
    this.updateMetatags();
  }
  getApod() {
    this.apod.get().subscribe((response: any) => {
      if (response.url.includes('youtube')) {
        this.isVideo = true;
      }
      this.apodData = response;
      this.modals.apodModal(this.apodData)
    }, error => {
      this.modals.errorModal('This server is out now, try again later');
    })
  }

  updateMetatags() {
    this.metaTags.updateMetatags('CosmosStuff - Apod', this.doc.createElement('link'), this.createMetaTagsArray());
  }

  createMetaTagsArray() {
    let metaTags = [
      { name: 'keywords', content: 'nasa, spaceX, starlink, space,cosmos, tech, asteroids, jamesweb' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'CosmosStuff' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0' },
      { name: 'date', content: '' },
      { name: 'description', content: `Every day NASA chooses a photo as the photo of the day. this tool shows exactly that photo in full size. It's a spectacle, follow this tool daily and receive amazing photos.` },
    ]
    return metaTags;
  }

}
