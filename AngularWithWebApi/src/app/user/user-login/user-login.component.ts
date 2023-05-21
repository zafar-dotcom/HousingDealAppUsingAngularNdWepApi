import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from '../../services/alertify.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  constructor(
    private authservice: AuthService,
    private alertfy: AlertifyService,
    private router: Router
  ) { }
  ngOnInit() {

  }
  onLogin(loginform: NgForm) {
    console.log(loginform.value);
    const token = this.authservice.auth(loginform.value);  //if user present then assign to token to generate its token
    if (token) {
      localStorage.setItem('token', token.username);
      this.alertfy.success("Login successfull");
      this.router.navigate(['/']);
    }
    else {
   
      this.alertfy.error("Login failed")
    }

  }
}
