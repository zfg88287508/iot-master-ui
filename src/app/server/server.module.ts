import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ServersComponent} from './servers/servers.component';
import {ServerEditComponent} from './server-edit/server-edit.component';
import {ServerComponent} from './server.component';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {BaseModule} from "../base/base.module";
import {ReactiveFormsModule} from "@angular/forms";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzSpaceModule} from "ng-zorro-antd/space";
import {ServerRoutingModule} from "./server-routing.module";
import { ServerDetailComponent } from './server-detail/server-detail.component';


@NgModule({
  declarations: [
    ServersComponent,
    ServerEditComponent,
    ServerComponent,
    ServerDetailComponent
  ],
  imports: [
    CommonModule,
    ServerRoutingModule,
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
export class ServerModule {
}
