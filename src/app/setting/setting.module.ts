import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { DatabaseComponent } from './database/database.component';
import { LogComponent } from './log/log.component';
import { WebComponent } from './web/web.component';
import { BackupComponent } from './backup/backup.component';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzIconModule} from "ng-zorro-antd/icon";
import {SettingComponent} from "./setting.component";


@NgModule({
  declarations: [
    SettingComponent,
    DatabaseComponent,
    LogComponent,
    WebComponent,
    BackupComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule
  ]
})
export class SettingModule { }
