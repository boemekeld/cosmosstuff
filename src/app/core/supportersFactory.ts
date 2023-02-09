import { Injectable, OnInit } from "@angular/core";
import { supporter } from "../supporters/models/supporter";

@Injectable({
    providedIn: 'root'
  })
export class supportersFactory implements OnInit{
    /**
     *
     */
    supporters:supporter[] = [];
    supporter:supporter = new supporter();
    constructor() {}
    ngOnInit(): void {
        this.createSupporters();
    }

    createSupporters():supporter[]{

        /**************************************THIAGO */
        this.supporter = {
            id:1,
            name:"Tiago Domezi",
            url:"https://www.instagram.com/tiagodomezi/",
            photo:`../../assets/supporters/thiago.jpg`,
            description: {
                label:"Thiago-Description",
                text:''
            }
        }
        this.supporters.push(this.supporter);
        /**************************************THIAGO */


        return this.supporters;
    }

}