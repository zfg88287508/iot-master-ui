import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DeviceRoutingModule} from './device-routing.module';
import {DeviceComponent} from './device.component';
import {DevicesComponent} from "./devices/devices.component";
import {DeviceEditComponent} from "./device-edit/device-edit.component";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {ReactiveFormsModule} from "@angular/forms";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {BaseModule} from "../base/base.module";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzSpaceModule} from "ng-zorro-antd/space";
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import {NzStatisticModule} from "ng-zorro-antd/statistic";
import {NzCollapseModule} from "ng-zorro-antd/collapse";
import {NzTabsModule} from "ng-zorro-antd/tabs";
import {SubsetModule} from "../subset/subset.module";


@NgModule({
  declarations: [
    DevicesComponent,
    DeviceEditComponent,
    DeviceComponent,
    DeviceDetailComponent
  ],
  imports: [
    CommonModule,
    DeviceRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzTableModule,
    NzDividerModule,
    BaseModule,
    ReactiveFormsModule,
    NzInputNumberModule,
    NzCardModule,
    NzSpaceModule,
    NzStatisticModule,
    NzCollapseModule,
    NzTabsModule,
    SubsetModule
  ]
})
export class DeviceModule {
}
