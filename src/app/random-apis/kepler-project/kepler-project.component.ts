import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-kepler-project',
  templateUrl: './kepler-project.component.html',
  styleUrls: ['./kepler-project.component.css']
})
export class KeplerProjectComponent implements OnInit {
 keplerForm = new FormGroup({
    minKelvin: new FormControl(null, Validators.required),
    maxKelvin: new FormControl(null, Validators.required),
    limitResults: new FormControl(null, Validators.required),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
