import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginAppComponent } from './login-app/login-app.component';
import { LogoutAppComponent } from './logout-app/logout-app.component';


@NgModule({
  declarations: [
    LoginAppComponent,
    LogoutAppComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
