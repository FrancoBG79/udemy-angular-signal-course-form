import { Component, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import { FormBuilder, NonNullableFormBuilder, Validators } from '@angular/forms';
import { createPasswordStrengthValidator } from '../validators/password-strength.validator';


@Component({
    selector: 'login-reactive',
    templateUrl: './login-reactive.component.html',
    styleUrls: ['./login-reactive.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class LoginReactiveComponent implements OnInit {

  // email = new FormControl(
  //   '', 
  //   {
  //     validators: [Validators.required, Validators.email],
  //     updateOn: 'blur',
  //   });
  // password = new FormControl(
  //   '', 
  //   {
  //     validators: [
  //       Validators.required, 
  //       Validators.minLength(8),
  //       createPasswordStrengthValidator()
  //     ]}
  //   );
  // form = new FormGroup({
  //   email: this.email,
  //   password: this.password,
  // });

  private fb = inject(FormBuilder);
  private nonFb = inject(NonNullableFormBuilder);
  form = this.fb.group({
    email: this.fb.nonNullable.control('', {
      validators: [Validators.required, Validators.email],
      updateOn: 'blur'
    }),
    password: ['', [Validators.required, Validators.minLength(8), createPasswordStrengthValidator()]]
  });

  nonForm = this.nonFb.group({
    email: ['', {
      validators: [Validators.required, Validators.email],
      updateOn: 'blur'
    }],
    password: ['', [Validators.required, Validators.minLength(8), createPasswordStrengthValidator()]]
  })
  constructor() {


  }

  ngOnInit() {

  }

  get email() {
    return this.form.controls['email'];
  }

  get password() {
    return this.form.controls['password'];
  }

  onSubmit() {
    this.form.reset();
    console.log('Form: ', this.form.value);
    this.nonForm.reset();
    console.log('NonForm: ', this.nonForm.value);
  }

}
