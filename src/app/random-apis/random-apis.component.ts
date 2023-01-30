import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { metaTags } from '../core/metaTags';

@Component({
  selector: 'app-random-apis',
  templateUrl: './random-apis.component.html',
  styleUrls: ['./random-apis.component.css']
})
export class RandomApisComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private doc: any,
  private metaTags:metaTags) { }

  ngOnInit(): void {
    this.updateMetatags();
  }

  updateMetatags(){
    this.metaTags.updateMetatags('CosmosStuff - Nasa',this.doc.createElement('link'),this.createMetaTagsArray());
  }

  createMetaTagsArray(){
    let metaTags = [
      {name:'keywords',content:'nasa, spaceX, starlink, space,cosmos, tech, asteroids, jamesweb'},
      {name:'robots',content:'index, follow'},
      {name:'author',content:'CosmosStuff'},
      {name:'viewport',content:'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0'},
      {name:'date',content:''},
      {name:'description',content:`The ability to make data available for free over the internet is a game-changer for developers and businesses alike. With the right tools and resources, it's now possible to share information and resources with a global audience in real-time, which can greatly enhance communication, collaboration, and innovation.
      One of the most significant benefits of this functionality is the ability to create powerful and engaging web applications that can reach a vast number of users. These applications can be used to share information, connect communities, and provide valuable resources and services.
      Additionally, making data available for free over the internet can also greatly benefit businesses. By providing easy access to information and resources, businesses can improve customer engagement, increase brand awareness, and ultimately boost revenue.
      Furthermore, this functionality also enables organizations to share data and collaborate with other organizations, which can lead to the development of new products, services, and technologies. This can ultimately drive innovation, improve efficiency, and enhance overall productivity.
      In conclusion, the ability to make data available for free over the internet is a powerful tool that can greatly benefit developers, businesses, and organizations. It enables the sharing of resources, improves communication and collaboration, and drives innovation.
      `},
    ]
    return metaTags;
  }


}
