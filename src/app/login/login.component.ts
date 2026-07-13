import { Component, signal } from '@angular/core';
import { email, form, FormField, FormRoot, minLength, required } from '@angular/forms/signals';
import { FieldErrorComponent } from '../field-error/field-error.component';
import { LOGIN_FORM_DEFAULT, LoginData } from './login.model';
import { LoginLogoComponent } from './login-logo.component';
import { ResetIconComponent, SignInIconComponent } from './login-icons';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormField, FormRoot, FieldErrorComponent, LoginLogoComponent, SignInIconComponent, ResetIconComponent],
})
export class LoginComponent {
}
