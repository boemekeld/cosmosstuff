import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-neows',
  templateUrl: './neows.component.html',
  styleUrls: ['./neows.component.css']
})
export class NeowsComponent implements OnInit {

  newosForm = new FormGroup({
    startDate: new FormControl(null,Validators.required),
    endDate: new FormControl(null,Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
  }

  search(){
    console.log(this.newosForm.value)
  }

}
