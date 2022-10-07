import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-james-webb',
  templateUrl: './james-webb.component.html',
  styleUrls: ['./james-webb.component.css']
})
export class JamesWebbComponent implements OnInit {
  jamesWebbForm = new FormGroup({
    page: new FormControl(null, Validators.required),
  });
  constructor() { }

  ngOnInit(): void {
  }

  search(){}
//0aa0d62c-88e3-48ef-a96c-b802ed3d86f1
}
