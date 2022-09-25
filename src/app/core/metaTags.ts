import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Injectable()
export class metaTags {
    constructor(private metaTagService: Meta, private titleService: Title, @Inject(DOCUMENT) private doc: any) {

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
                metatag.content = this.getCurrentDate();
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

    getCurrentDate(): string {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        let date;
        date = yyyy + '-' + mm + '-' + dd;
        return date.toString();
    }
}