import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { AuthRoutingModule } from './auth.routing.module';

/* Components */
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from "./register/register.component";

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class AuthModule { }
