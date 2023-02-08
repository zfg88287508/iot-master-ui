import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PluginRoutingModule } from './plugin-routing.module';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzIconModule} from "ng-zorro-antd/icon";
import {PluginComponent} from "./plugin.component";


@NgModule({
  declarations: [
    PluginComponent,
  ],
  imports: [
    CommonModule,
    PluginRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule
  ]
})
export class PluginModule { }
