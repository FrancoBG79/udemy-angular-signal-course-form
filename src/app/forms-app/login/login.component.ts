import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false,
})
export class LoginComponent implements OnInit {


  constructor() {


  }

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    console.log('Login Form: ', form.value, form.valid);
  }

}
