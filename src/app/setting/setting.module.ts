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
import {NzCardModule} from "ng-zorro-antd/card";
import {NzFormModule} from "ng-zorro-antd/form";
import {ReactiveFormsModule} from "@angular/forms";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {NzSelectModule} from "ng-zorro-antd/select";


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
    NzIconModule,
    NzCardModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzButtonModule,
    NzInputNumberModule,
    NzSelectModule
  ]
})
export class SettingModule { }
