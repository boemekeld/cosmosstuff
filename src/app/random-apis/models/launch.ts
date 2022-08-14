import { launchServiceProvider } from "./launchServiceProvider";
import { mission } from "./mission";
import { pad } from "./pad";
import { rocket } from "./rocket";
import { status } from "./status";

export class launch{
    id?:string;
    failReason?:string;
    hashtag?:string;
    holdReason?:string;
    image?:string;
    infoGraphic?:string;
    lastUpdated?:string;
    name?:string;
    net?:string;
    probability?:string;
    program?:string[];
    slug?:string;
    windowEnd?:string;
    windowStart?:string;
    launchServiceProvider?:launchServiceProvider;
    mission?:mission;
    pad?:pad;
    rocket?:rocket;
    status?:status;
    /**
     *
     */
    constructor() {
        
    }
}