import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { dateTool } from "./dateTool";

@Injectable()
export class metaTags {
    constructor(private metaTagService: Meta, 
        private titleService: Title, 
        @Inject(DOCUMENT) private doc: any,
        private dateTool:dateTool) {

    }

    updateMetatags(
        title: string,
        doc: any,
        metaTagsArr: { name: string, content: string }[]
    ) {
        this.cleanCanonical()
        this.titleService.setTitle(title);
        for (let metatag of metaTagsArr) {
            if (metatag.name == 'date') {
                metatag.content = this.dateTool.getCurrentDate();
            }
            this.metaTagService.updateTag({ name: metatag.name, content: metatag.content })
        }
        this.metaTagService.updateTag({ httpEquiv: 'x-dns-prefetch-control', content: 'on' })
        this.metaTagService.updateTag({ httpEquiv: 'Content-Type', content: 'text/html; charset=utf-8' })
        this.metaTagService.updateTag({ charset: 'UTF-8' })
        let link: HTMLLinkElement = doc;
        link.setAttribute('rel', 'canonical');
        this.doc.head.appendChild(link);
        link.setAttribute('href', this.doc.URL);
    }

    cleanCanonical() {
        let canonicalUrl: any = document.querySelector("[rel='canonical']")
        if (canonicalUrl) {
            canonicalUrl.remove();
        }
    }

}