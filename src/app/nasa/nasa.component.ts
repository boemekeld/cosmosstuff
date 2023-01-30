import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { metaTags } from '../core/metaTags';
import { dateTool } from '../core/dateTool';


@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css']
})
export class NasaComponent implements OnInit {
  componentDescription = `Our cutting-edge tool brings the latest discoveries and advancements in space exploration right to your
  website. By connecting to NASA's APIs, our tool retrieves data from NASA's databases, providing access to
  a wide range of information and imagery. Whether you're looking for satellite imagery, information about
  planets and stars, or real-time updates about space missions, our tool has you covered.
  With our tool, you can easily add valuable content to your website and keep your audience engaged with the
  latest updates from NASA. It's perfect for researchers, educators, and space enthusiasts alike. You can
  easily integrate the data and imagery into your website, making it an excellent resource for students and
  researchers.
  Our tool also offers a user-friendly interface that allows you to easily search and filter data based on
  your specific needs. It also allows you to customize the data and imagery according to your website's
  design, making it a perfect fit for any website.
  In addition, our tool is built with security and privacy in mind, ensuring that all data is transmitted and
  stored securely. With our tool, you can rest assured that the information you're sharing with your audience
  is accurate and reliable.
  With our tool, you have the power to unlock the vast knowledge of space exploration and share it with the
  world. Don't miss out on this opportunity to enhance your website and captivate your audience with the
  latest information from NASA.`
  constructor(@Inject(DOCUMENT) private doc: any,
  private metaTags:metaTags,private dateTool:dateTool
  ) { }

  ngOnInit(): void {
    this.updateMetatags();
  }

  updateMetatags(){
    this.metaTags.updateMetatags('CosmosStuff - Nasa',this.doc.createElement('link'),this.createMetaTagsArray());
  }

  createMetaTagsArray(){
    let metaTags = [
      {
        name: "keywords",
        content: "nasa, spaceX, starlink, space, cosmos, tech, asteroids, satellites, exploration, innovation, jamesweb"
    },
    {
        name: "robots",
        content: "index, follow"
    },
    {
        name: "author",
        content: "CosmosStuff"
    },
    {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0, user-scalable=no"
    },
    {
        name: "date",
        content: this.dateTool.getCurrentDate()
    },
      {name:'description' ,content:`Our cutting-edge tool brings the latest discoveries and advancements in space exploration right to your website. By connecting to NASA's APIs, our tool retrieves data from NASA's databases, providing access to a wide range of information and imagery. Whether you're looking for satellite imagery, information about planets and stars, or real-time updates about space missions, our tool has you covered.

      With our tool, you can easily add valuable content to your website and keep your audience engaged with the latest updates from NASA. It's perfect for researchers, educators, and space enthusiasts alike. You can easily integrate the data and imagery into your website, making it an excellent resource for students and researchers.
      
      Our tool also offers a user-friendly interface that allows you to easily search and filter data based on your specific needs. It also allows you to customize the data and imagery according to your website's design, making it a perfect fit for any website.
      
      In addition, our tool is built with security and privacy in mind, ensuring that all data is transmitted and stored securely. With our tool, you can rest assured that the information you're sharing with your audience is accurate and reliable.
      
      With our tool, you have the power to unlock the vast knowledge of space exploration and share it with the world. Don't miss out on this opportunity to enhance your website and captivate your audience with the latest information from NASA.`},
    ]
    return metaTags;
  }

}
