import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  myFunction() {
    var x: any;
    x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  navigate(option: number) {
    switch (option) {
      case 1:
        this.router.navigate(['']);
        break;
      case 2:
        this.router.navigate(['settings']);
        break;
      case 3:
        this.router.navigate(['contact']);
        break;
      case 4:
        this.router.navigate(['supportUs']);
        break;
    }
  }
}
