import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import { AuthService } from '../../../core/services/auth/auth.service'
import {Form} from "./register.interface";

@Component({
  selector: 'register-module',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  loading: boolean = false;

  form = new FormGroup<Form>({
    firstname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)])
  });

  constructor(private authService: AuthService) {}

  register() {
    console.log(this.form.value);
    console.log(this.form.invalid)

    if(this.form.invalid || !this.form.value.email || !this.form.value.password || !this.form.value.firstname || !this.form.value.lastname || !this.form.value.phone) {
      return;
    }

    this.loading = true;

    this.authService.register({
      email: this.form.value.email,
      password: this.form.value.password,
      firstname: this.form.value.firstname,
      lastname: this.form.value.lastname,
      phone: this.form.value.phone,
      role: 1,
    }).subscribe({
      next: (response: any) => {
        this.loading = false;
        console.log(response);
      },
      error: (error: any) => {
        this.loading = false;
        console.log(error);
      }
    })
  }
}
