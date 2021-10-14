import { Component, OnInit } from '@angular/core';
import { faShippingFast, faHeart } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faShippingFast = faShippingFast
  faHeart = faHeart
  constructor() { }

  ngOnInit(): void {
  }

}
