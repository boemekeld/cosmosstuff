import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { exportToExcel } from 'src/app/core/exportExcel';
import { modals } from 'src/app/core/modals';
import { KeplerProjectService } from 'src/app/services/random-apis/kepler-project.service';
import { kepler } from '../models/kepler';
import { metaTags } from '../../core/metaTags';

@Component({
  selector: 'app-kepler-project',
  templateUrl: './kepler-project.component.html',
  styleUrls: ['./kepler-project.component.css']
})
export class KeplerProjectComponent implements OnInit {
  isLoading: boolean = false;
  keplerForm = new FormGroup({
    minKelvin: new FormControl(null, Validators.required),
    maxKelvin: new FormControl(null, Validators.required),
    limitResults: new FormControl(null, Validators.required),
  });
  kepler: kepler = new kepler();
  keplerArray: kepler[] = [];
  constructor(private modal: modals, private service: KeplerProjectService, private xlsx: exportToExcel,
    @Inject(DOCUMENT) private doc: any,
  private metaTags:metaTags) { }

  ngOnInit(): void {
    this.updateMetatags();
  }

  search() {
    let valid = this.verifyForm()
    if (valid) {
      this.isLoading = true;
      let minK = this.keplerForm.controls['minKelvin'].value;
      let maxK = this.keplerForm.controls['maxKelvin'].value;
      let limitR = this.keplerForm.controls['limitResults'].value;
      let keplerQuery: string[] = []
      keplerQuery.push(minK, maxK, limitR)
      this.createExoPlanetsRequest(keplerQuery)
    } else {
      this.modal.errorModal('Please, fill all the blanks')
      this.isLoading = false;
    }
  }

  verifyForm(): boolean {
    let minK = this.keplerForm.controls['minKelvin'].value;
    let maxK = this.keplerForm.controls['maxKelvin'].value;
    let limitR = this.keplerForm.controls['limitResults'].value;
    if (minK || minK == 0 && maxK && limitR) {
      return true;
    } else {
      return false;
    }
  }

  createExoPlanetsRequest(keplerQuery: string[]) {
    this.service.getExoPlanets(keplerQuery).subscribe((response: any) => {
      let keplerResponse = response;
      if (keplerResponse.length > 0) {
        this.bindObject(keplerResponse)
        this.isLoading = false;
      } else {
        this.noResult()
        this.isLoading = false;
      }
    }, error => {

    })

  }

  bindObject(keplerResponse: any) {
    for (let exoPlanet of keplerResponse) {
      this.kepler = new kepler();
      this.kepler.a = exoPlanet.A;
      this.kepler.dec = exoPlanet.DEC;
      this.kepler.kmag = exoPlanet.KMAG;
      this.kepler.koi = exoPlanet.KOI;
      this.kepler.mstar = exoPlanet.MSTAR;
      this.kepler.per = exoPlanet.PER;
      this.kepler.rPlanet = exoPlanet.RPLANET;
      this.kepler.rStar = exoPlanet.RSTAR;
      this.kepler.ra = exoPlanet.RA;
      this.kepler.row = exoPlanet.ROW;
      this.kepler.t0 = exoPlanet.T0;
      this.kepler.tPlanet = exoPlanet.TPLANET;
      this.kepler.ut0 = exoPlanet.UT0;
      this.kepler.uper = exoPlanet.UPER
      this.kepler.tStar = exoPlanet.TSTAR
      this.keplerArray.push(this.kepler)
    }
  }
  noResult() {
    this.modal.infoModal('We got no results for this search')
  }

  exportToExcel() {
    this.modal.successModal('Your file was successfully exported')
    let minK = this.keplerForm.controls['minKelvin'].value;
    let maxK = this.keplerForm.controls['maxKelvin'].value;
    this.xlsx.exportToExcel(`exoplanetsBetween${minK}and${maxK}kelvin`)
  }
  changeFlag() {
    this.keplerArray = []
  }

  info(){
    this.modal.referenceExoplanets()
  }

  updateMetatags(){
    this.metaTags.updateMetatags('CosmosStuff - Exoplanets',this.doc.createElement('link'),this.createMetaTagsArray());
  }

  createMetaTagsArray(){
    let metaTags = [
      {name:'keywords',content:'nasa, spaceX, starlink, space,cosmos, tech, asteroids, jamesweb'},
      {name:'robots',content:'index, follow'},
      {name:'author',content:'CosmosStuff'},
      {name:'viewport',content:'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0'},
      {name:'date',content:''},
      {name:'description',content:`Get information about more than 100 exoplanets.`},
    ]
    return metaTags;
  }
}
