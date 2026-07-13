import {Component, effect, signal} from '@angular/core';
import { JsonPipe } from '@angular/common';
import {email, form, FormField, FormRoot, minLength, required, validate} from '@angular/forms/signals';
import { FieldErrorComponent } from '../field-error/field-error.component';
import { LOGIN_FORM_DEFAULT, LoginData } from './login.model';
import { LoginLogoComponent } from './login-logo.component';
import { ResetIconComponent, SignInIconComponent } from './login-icons';
import {passwordStrength} from "./password-strength.validator";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormField, FormRoot, FieldErrorComponent, LoginLogoComponent, SignInIconComponent, ResetIconComponent, JsonPipe],
})
export class LoginComponent {

  loginModel = signal({...LOGIN_FORM_DEFAULT});

  form = form(
    this.loginModel,
    (path) => {
      required(path.email, {message: "Email  is required."});
      email(path.email, { message: 'Enter a valid email address.' })  ;
      required(path.password, { message: 'Password is required.' });
      minLength(path.password, 8, { message: 'Password must be at least 8 characters.' });
      passwordStrength(path.password);
    },
    {
      submission: {
        action: async () => {
          await new Promise(resolve => setTimeout(resolve, 3000));
        }
      }
    });

  constructor() {
    effect(() => console.log(this.loginModel()))
  }

  reset() {
    this.form().reset({...LOGIN_FORM_DEFAULT});
  }

}
