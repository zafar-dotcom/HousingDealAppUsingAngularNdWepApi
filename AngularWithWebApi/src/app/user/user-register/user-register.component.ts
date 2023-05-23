
import { Component, OnInit } from '@angular/core';
import { FormControl, ValidatorFn, AbstractControl , FormGroup, Validator, ValidationErrors, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Iuser } from '../../Model/iuser';
import { AlertifyService } from '../../services/alertify.service';
import { UserServiceService } from '../../services/user-service.service';
import { ConfirmPasswordValidator } from '../confirm-password.validator';
/*import * as alertifyjs from 'alertifyjs';*/


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
   /* formgroup is a wrapper against all the form control of form to track nd validate or check value*/
  userregisterform!: FormGroup;
  user!: Iuser;
  submitted: boolean = false;
  constructor(
         private fb: FormBuilder,
       private userservice: UserServiceService,
        private alertify: AlertifyService

  ) { }
  ngOnInit() {

    this.RegisterationForm();

    /* act as placeholder
    this.userregisterform.controls["username"].setValue('Name');*/
    

  }
  RegisterationForm() {
    this.userregisterform = this.fb.group({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.email, Validators.required, Validators.minLength(5)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmpassword: new FormControl(null, [Validators.required]),
      mobile: new FormControl("", Validators.required),
    },
      {
        validator: ConfirmPasswordValidator("password", "confirmpassword")
      }

    );
  }
 
 
 
  get mobile() {
    return this.userregisterform.get('mobile') as FormControl;
  }
  onSubmit() {
    this.submitted = true;

    console.log(this.userregisterform.value);
    if (this.userregisterform.valid) {
      this.submitted = false;
      this.userservice.AddUser(this.UserData());
      this.userregisterform.reset();
      this.alertify.success('form Submitted Successfully');
    }
    else {
      this.alertify.error("Form submisssion failed");
    }
   
    
  }

  UserData(): Iuser {
    return this.user = {
      username:this.userregisterform.get("username")?.value,
      email:this.userregisterform.get("email")?.value,
      password:this.userregisterform.get("password")?.value,
      mobile:this.userregisterform.get("mobile")?.value,
    }
  }
   
}

