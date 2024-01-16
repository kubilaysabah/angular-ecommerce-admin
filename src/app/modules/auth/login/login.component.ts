import {Component} from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

/* Services */
import { AuthService } from '../../../core/services/auth/auth.service'

import { Form } from './login.interface'

@Component({
  selector: 'login-module',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loading: boolean = false;

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private auth: AuthService) {
  }

  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }

  login(): void {
    if(!this.email?.value || !this.password?.value) return;

    this.auth.login({ email: this.email.value, password: this.password?.value }).subscribe((res) => {
      console.log(res);
    });
  }
}
