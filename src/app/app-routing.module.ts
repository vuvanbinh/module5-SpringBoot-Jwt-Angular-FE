import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./register-login/register/register.component";
import {LoginComponent} from "./register-login/login/login.component";
import {UserAccountComponent} from "./register-login/user-account/user-account.component";
import {ChangeAvatarComponent} from "./register-login/change-avatar/change-avatar.component";

const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'userAccount', component:UserAccountComponent},
  {path:'changeAvatar',component:ChangeAvatarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
