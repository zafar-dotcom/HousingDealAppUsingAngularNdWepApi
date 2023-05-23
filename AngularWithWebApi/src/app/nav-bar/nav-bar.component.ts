import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  loggedinuser!: string;
  constructor(private alertify: AlertifyService) { }
  ngOnInit() {

  }
  login() {
    /*if token is present then it will retuen token else null or undefined*/
    this.loggedinuser = localStorage.getItem('token') || '';
    return this.loggedinuser;

  }
  Logout() {
    localStorage.removeItem('token');
    this.alertify.success("Logout successfully");

  }
}
