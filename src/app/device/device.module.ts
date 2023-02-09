import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceRoutingModule } from './device-routing.module';
import { DevicesComponent } from './devices/devices.component';
import { DeviceEditComponent } from './device-edit/device-edit.component';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzIconModule} from "ng-zorro-antd/icon";
import {DeviceComponent} from "./device.component";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzFormModule} from "ng-zorro-antd/form";
import {ReactiveFormsModule} from "@angular/forms";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {BaseModule} from "../base/base.module";
import {NzSpaceModule} from "ng-zorro-antd/space";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzButtonModule} from "ng-zorro-antd/button";


@NgModule({
  declarations: [
    DeviceComponent,
    DevicesComponent,
    DeviceEditComponent
  ],
  imports: [
    CommonModule,
    DeviceRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzCardModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzInputNumberModule,
    BaseModule,
    NzSpaceModule,
    NzTableModule,
    NzDividerModule,
    NzButtonModule
  ]
})
export class DeviceModule { }
