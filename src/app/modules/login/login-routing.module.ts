import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAppComponent } from './login-app/login-app.component';
import { LogoutAppComponent } from './logout-app/logout-app.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginAppComponent},
  {path: 'logout', component: LogoutAppComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
