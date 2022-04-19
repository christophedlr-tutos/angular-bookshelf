import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup = this.formBuilder.group({
    username: '',
    password: ''
  });

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
  }

  onSubmit(form: FormGroup) {
    console.log('is valid: ', form.valid)
    console.log('username: ', form.value.username)
    console.log('password: ', form.value.password)
  }
}
