import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceRoutingModule } from './device-routing.module';
import { DeviceComponent } from './device/device.component';
import { DeviceEditComponent } from './device-edit/device-edit.component';


@NgModule({
  declarations: [
    DeviceComponent,
    DeviceEditComponent
  ],
  imports: [
    CommonModule,
    DeviceRoutingModule
  ]
})
export class DeviceModule { }
