import { Component } from '@angular/core';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  faSquareCheck= faSquareCheck;
}
