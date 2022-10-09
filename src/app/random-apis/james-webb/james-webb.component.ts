import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { modals } from 'src/app/core/modals';
import { JamesWebbService } from 'src/app/services/random-apis/james-webb.service';
import { jamesWebbPhoto } from '../models/jamesWebbPhoto';

@Component({
  selector: 'app-james-webb',
  templateUrl: './james-webb.component.html',
  styleUrls: ['./james-webb.component.css']
})
export class JamesWebbComponent implements OnInit {
  jamesWebbForm = new FormGroup({
    page: new FormControl(null, Validators.required),
    display: new FormControl(null, Validators.required)
  });
  jamesWebbPhoto: jamesWebbPhoto = new jamesWebbPhoto();
  jamesWebbPhotoArray: Array<jamesWebbPhoto> = new Array<jamesWebbPhoto>();
  isLoading: boolean = false;
  display: any;
  currentPage:number = 0;

  constructor(private jamesWebbService: JamesWebbService, private modal: modals) { }

  ngOnInit(): void {
    this.setDisplay();
  }

  setDisplay() {
    this.display = [{ name: 'Table', value: 0 }, { name: 'Cards', value: 1 }]
  }

  search(fromChange: any) {
    this.isLoading = true;
    let pageArray: Array<string> = [];
    if (fromChange) {
      this.currentPage = Number(fromChange)
      pageArray.push(fromChange)
    } else {
      this.currentPage = Number(this.jamesWebbForm.controls['page'].value);
      pageArray.push(this.jamesWebbForm.controls['page'].value);
    }
    this.jamesWebbService.getJamesWebbData(pageArray).subscribe((response: any) => {
      debugger;
      this.bindObject(response.body)
    }, (error: any) => {
      this.isLoading = false;
      this.modal.errorModal('This service is not working right now, try again later...')
    }, () => { })
  }

  bindObject(object: any) {
    for (let obj of object) {
      this.jamesWebbPhoto.description = obj.details.description;
      this.jamesWebbPhoto.fileType = obj.file_type;
      this.jamesWebbPhoto.image = obj.location;
      this.jamesWebbPhoto.mission = obj.details.mission;
      this.jamesWebbPhoto.program = obj.program;
      this.jamesWebbPhoto.sufix = obj.details.suffix;
      for (let i = 0; i <= obj.details.instruments.length - 1; i++) {
        if (obj.details.instruments[i + 1]) {
          this.jamesWebbPhoto.instruments += obj.details.instruments[i].instrument + ', ';
        } else {
          this.jamesWebbPhoto.instruments += obj.details.instruments[i].instrument + '.';
        }
      }
      this.jamesWebbPhotoArray.push(this.jamesWebbPhoto);
    }
    this.isLoading = false;
  }

  changeFlag() {
    this.jamesWebbPhotoArray = [];
  }

  exportToExcel() {

  }

  openInANewTab(img: any) {
    window.open(img)
  }

  changePage(option: string) {
    debugger;
    this.changeFlag()
    let pageValue = this.jamesWebbForm.controls['page'].value
    pageValue = Number(pageValue);
    if (option == 'next') {
      this.currentPage += 1
    }
    if (option == 'previous') {
      this.currentPage -= 1
    }
    if (this.currentPage >= 1) {
      this.search(this.currentPage);
    } else {
      this.modal.infoModal('Just positive numbers are accepted')
    }
  }

}
