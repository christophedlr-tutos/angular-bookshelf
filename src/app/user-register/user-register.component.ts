import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  registerForm: FormGroup = this.formBuilder.group({
    'username': '',
    'email': '',
    'password': '',
    'password_confirm': ''
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(form: FormGroup): void {
    console.log('is valid: ', form.valid);
    console.log('username: ', form.value.username);
    console.log('Email: ', form.value.email);
    console.log('Password: ', form.value.password);
    console.log('Password confirmation: ', form.value.password_confirm);
  }
}
