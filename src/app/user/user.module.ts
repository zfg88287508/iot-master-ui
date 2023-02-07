import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { PasswordComponent } from './password/password.component';
import { MeComponent } from './me/me.component';


@NgModule({
  declarations: [
    UserComponent,
    UserEditComponent,
    PasswordComponent,
    MeComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
