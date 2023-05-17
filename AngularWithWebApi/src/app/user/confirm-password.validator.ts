import { AbstractControl, FormGroup } from "@angular/forms";
import { UserRegisterComponent } from "./user-register/user-register.component";
export function ConfirmPasswordValidator(password: string, confirmpassword: string) {
  return (formGroup: FormGroup) => {
    let control = formGroup.controls[password];
    let matchingControl = formGroup.controls[confirmpassword]
    if (
      matchingControl.errors &&
      !matchingControl.errors["confirmPasswordValidator"]
    ) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ confirmPasswordValidator: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}
