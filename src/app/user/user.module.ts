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
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzCardModule} from "ng-zorro-antd/card";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {BaseModule} from "../base/base.module";
import {NzSpaceModule} from "ng-zorro-antd/space";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RoleComponent } from './role/role.component';
import { RoleEditComponent } from './role-edit/role-edit.component';
import { NzSelectModule } from 'ng-zorro-antd/select';  
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
@NgModule({
  declarations: [
    UsersComponent,
    UserEditComponent,
    UserDetailComponent,
    PasswordComponent,
    MeComponent,
    RoleComponent,
    RoleEditComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzPopconfirmModule,
    NzButtonModule,
    NzCardModule,
    NzModalModule,
    NzSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    BaseModule,
    NzSpaceModule,
    NzTableModule,
    NzDividerModule
  ]
})
export class UserModule { }
