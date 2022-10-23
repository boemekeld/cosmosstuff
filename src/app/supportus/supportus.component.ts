import { Component, OnInit } from '@angular/core';
import { modals } from '../core/modals';
const WALLET = 'bc1q7duzvalqtyvs09rdpy3qh92kra7p6xzl5knuqp'
@Component({
  selector: 'app-supportus',
  templateUrl: './supportus.component.html',
  styleUrls: ['./supportus.component.css']
})
export class SupportusComponent implements OnInit {
  
  constructor(private modal:modals) { }

  ngOnInit(): void {
  }
  copy(){
    navigator.clipboard.writeText(WALLET);
    this.modal.successModal('Wallet copied')
  }
}
