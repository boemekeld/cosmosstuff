import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { exportToExcel } from 'src/app/core/exportExcel';
import { modals } from 'src/app/core/modals';
import { UfoSightingsService } from 'src/app/services/random-apis/ufo-sightings.service';
import { ufoSightings } from '../models/ufoSightings';


@Component({
  selector: 'app-ufo-sightings',
  templateUrl: './ufo-sightings.component.html',
  styleUrls: ['./ufo-sightings.component.css']
})
export class UfoSightingsComponent implements OnInit {
  ufoForm = new FormGroup({
    limit: new FormControl(null, Validators.required),
  });
  limitInput: string = '';
  isLoading: boolean = false;
  ufoArray: ufoSightings[] = []
  constructor(private modals: modals, private ufoService: UfoSightingsService,private xlsx:exportToExcel) { }

  ngOnInit(): void {
    this.startMessage()
  }

  startMessage(){
    this.modals.infoModal('If you want search over 10.000 results make sure your hardware are able to do that, your page may break')
  }
  attBindForm() {
    this.limitInput = this.ufoForm.controls['limit'].value
  }

  verifyForm(): boolean {
    this.attBindForm()
    if (this.limitInput) {
      return true;
    } else {
      return false
    }
  }

  search() {
    let check = this.verifyForm();
    if (check) {
      this.isLoading = true;
      this.callUfoApi()
    } else {
      this.modals.errorModal('Please fill all the blanks')
    }
  }

  callUfoApi() {
    this.ufoService.getUffoSightings([this.limitInput]).subscribe((response: any) => {
      this.bindObject(response)
    }, error => {
      this.isLoading = false;
      this.modals.errorModal('The server did not answer. Try again later.')
    })
  }

  bindObject(ufos: any) {
    for (let ufo of ufos) {
      let ufoObj = new ufoSightings();
      ufoObj.id = ufo.id;
      ufoObj.bloodAlcoholLevel = ufo.blood_alcohol_level;
      ufoObj.incidentLocation = ufo.incident_location;
      ufoObj.incidentOccurrence = ufo.incident_occurrence;
      ufoObj.plausability = ufo.plausibility;
      ufoObj.policeDepartament = ufo.responding_police_department_location;
      ufoObj.witnessGibberish = ufo.witness_gibberish;
      this.ufoArray.push(ufoObj);
    }
    this.ufoArray.sort((a: any, b: any) => a.incidentOccurrence.localeCompare(b.incidentOccurrence))
    this.isLoading = false
  }

  changeFlag(){
    this.ufoArray = []
  }

  exportToExcel(){
    this.xlsx.exportToExcel('ufoSightingsTable')
  }

}
