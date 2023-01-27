import { Component, Inject, OnInit } from '@angular/core';
import { ApodService } from 'src/app/services/nasa/apod.service';
import { Pipe, PipeTransform } from '@angular/core';
import { modals } from 'src/app/core/modals';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { metaTags } from '../../core/metaTags';
import { dateTool } from '../../core/dateTool';




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
    private modals: modals,private dateTool:dateTool) { }

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
      { name: 'keywords', content: 'NASA, space exploration, space technology, astronomy, cosmos, satellites, Starlink, SpaceX' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'CosmosStuff' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'date', content: this.dateTool.getCurrentDate() },

      { name: 'description', content: `One of the most widely-visited websites across all federal agencies is NASA's Astronomy Picture of the Day. This website has a massive following and is incredibly popular among visitors. It has a broad appeal that reaches beyond the realm of science enthusiasts and is akin to the appeal of a viral sensation.` }
    ]
    return metaTags;
  }

}
