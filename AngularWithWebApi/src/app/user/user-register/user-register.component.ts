
import { Component, OnInit } from '@angular/core';
import { FormControl, ValidatorFn, AbstractControl , FormGroup, Validator, ValidationErrors, Validators, FormBuilder, NgForm } from '@angular/forms';
import { ConfirmPasswordValidator } from '../confirm-password.validator';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
   /* formgroup is a wrapper against all the form control of form to track nd validate or check value*/
  userregisterform!: FormGroup;
  submitted: boolean = false;
  constructor(private fb: FormBuilder) { }
  ngOnInit() {

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
    /*  this.userregisterform = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.email, Validators.required, Validators.minLength(5)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmpassword: new FormControl(null, [Validators.required]),
      mobile: new FormControl(),
    },
    );
    */
    

  }
 
 
  //passwordMatchValidator(form: FormGroup) {
  //  const password = form.get('password')?.value;
  //  const confirmPassword = form.get('confirmpassword')?.value;

  //  if (password === confirmPassword) {
  //    return null; // Passwords match
  //  } else {
  //    return { passwordMismatch: true }; // Passwords don't match
  //  }
  //}
  get mobile() {
    return this.userregisterform.get('mobile') as FormControl;
  }
  onSubmit() {
    this.submitted= true;
    //console.log('congrates,form submitted');
    //console.log(this.userregisterform);

  }

}

