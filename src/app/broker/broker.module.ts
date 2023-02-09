import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BrokerRoutingModule} from './broker-routing.module';
import {ServersComponent} from './servers/servers.component';
import {GatewaysComponent} from './gateways/gateways.component';
import {GatewayEditComponent} from './gateway-edit/gateway-edit.component';
import {ServerEditComponent} from './server-edit/server-edit.component';
import {BrokerComponent} from './broker.component';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {BaseModule} from "../base/base.module";


@NgModule({
  declarations: [
    ServersComponent,
    GatewaysComponent,
    GatewayEditComponent,
    ServerEditComponent,
    BrokerComponent
  ],
  imports: [
    CommonModule,
    BrokerRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzTableModule,
    NzDividerModule,
    BaseModule
  ]
})
export class BrokerModule {
}
