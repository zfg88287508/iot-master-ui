import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrokerRoutingModule } from './broker-routing.module';
import { ServersComponent } from './servers/servers.component';
import { GatewaysComponent } from './gateways/gateways.component';
import { GatewayEditComponent } from './gateway-edit/gateway-edit.component';
import { ServerEditComponent } from './server-edit/server-edit.component';
import { BrokerComponent } from './broker.component';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzIconModule} from "ng-zorro-antd/icon";


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
    NzIconModule
  ]
})
export class BrokerModule { }
