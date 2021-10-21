import { Component, OnInit } from '@angular/core';
import { faShippingFast, faCartPlus } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faShippingFast = faShippingFast
  faCartPlus = faCartPlus
  constructor() { }

  ngOnInit(): void {
  }

}
