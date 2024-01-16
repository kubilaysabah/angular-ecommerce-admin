import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


/* Modules */
import { AuthRoutingModule } from './auth.routing.module';

/* Components */
import { AuthComponent } from './auth.component'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from "./register/register.component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
  ],
  declarations: [AuthComponent, LoginComponent, RegisterComponent]
})
export class AuthModule { }
