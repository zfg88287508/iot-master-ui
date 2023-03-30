import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrokersComponent } from './brokers/brokers.component';
import { BrokerEditComponent } from './broker-edit/broker-edit.component';
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { BaseModule } from "../base/base.module";
import { ReactiveFormsModule } from "@angular/forms";
import { NzInputNumberModule } from "ng-zorro-antd/input-number";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzSpaceModule } from "ng-zorro-antd/space";
import { BrokerRoutingModule } from "./broker-routing.module";
import { BrokerDetailComponent } from './broker-detail/broker-detail.component';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
@NgModule({
  declarations: [
    BrokersComponent,
    BrokerEditComponent,
    BrokerDetailComponent
  ],
  imports: [
    CommonModule,
    BrokerRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzPopconfirmModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzTableModule,
    NzDividerModule,
    BaseModule,
    ReactiveFormsModule,
    NzInputNumberModule,
    NzCardModule,
    NzSpaceModule
  ]
})
export class BrokerModule {
}
