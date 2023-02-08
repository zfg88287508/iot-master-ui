import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './users/users.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { PasswordComponent } from './password/password.component';
import { MeComponent } from './me/me.component';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzIconModule} from "ng-zorro-antd/icon";
import {UserComponent} from "./user.component";


@NgModule({
  declarations: [
    UserComponent,
    UsersComponent,
    UserEditComponent,
    PasswordComponent,
    MeComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule
  ]
})
export class UserModule { }
