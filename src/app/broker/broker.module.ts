import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrokerRoutingModule } from './broker-routing.module';
import { ServerComponent } from './server/server.component';
import { GatewayComponent } from './gateway/gateway.component';
import { GatewayEditComponent } from './gateway-edit/gateway-edit.component';
import { ServerEditComponent } from './server-edit/server-edit.component';


@NgModule({
  declarations: [
    ServerComponent,
    GatewayComponent,
    GatewayEditComponent,
    ServerEditComponent
  ],
  imports: [
    CommonModule,
    BrokerRoutingModule
  ]
})
export class BrokerModule { }
