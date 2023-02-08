import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceRoutingModule } from './device-routing.module';
import { DevicesComponent } from './devices/devices.component';
import { DeviceEditComponent } from './device-edit/device-edit.component';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzIconModule} from "ng-zorro-antd/icon";
import {DeviceComponent} from "./device.component";


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
    NzIconModule
  ]
})
export class DeviceModule { }
