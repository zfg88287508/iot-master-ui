import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GatewayRoutingModule} from './gateway-routing.module';
import {GatewayComponent} from './gateway.component';
import {GatewaysComponent} from "./gateways/gateways.component";
import {GatewayEditComponent} from "./gateway-edit/gateway-edit.component";
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
import { GatewayDetailComponent } from './gateway-detail/gateway-detail.component';


@NgModule({
  declarations: [
    GatewaysComponent,
    GatewayEditComponent,
    GatewayComponent,
    GatewayDetailComponent
  ],
  imports: [
    CommonModule,
    GatewayRoutingModule,
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
    NzSpaceModule
  ]
})
export class GatewayModule {
}
