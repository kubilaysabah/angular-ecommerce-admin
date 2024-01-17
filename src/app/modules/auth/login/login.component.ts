import {Component} from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { User } from '../../../core/services/auth/auth.interface'

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

  form = new FormGroup<Form>({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.min(3), Validators.max(20)])
  });

  constructor(private auth: AuthService) {
  }

  login(): void {
    if(!this.form.invalid || !this.form.value.email || !this.form.value.password) return;

    this.loading = true;

    this.auth.login({ email: this.form.value.email, password: this.form.value.password })
      .subscribe({
        next: (user: User) => {
          this.loading = false;
          console.log('Giriş yapıldı!', user);
        },
        error: (error) => {
          this.loading = false;
          console.error('Giriş yapılamadı!', error)
        },
      });
  }
}
