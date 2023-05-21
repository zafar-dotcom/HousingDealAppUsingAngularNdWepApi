import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  login() {
    /*if token is present then it will retuen token else null or undefined*/
    return localStorage.getItem('token');
  }
  Logout() {
    localStorage.removeItem('token');
  }
}
