import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelRoutingModule } from './model-routing.module';
import { ModelsComponent } from './models/models.component';
import { ModelEditComponent } from './model-edit/model-edit.component';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzIconModule} from "ng-zorro-antd/icon";
import {ModelComponent} from "./model.component";


@NgModule({
  declarations: [
    ModelComponent,
    ModelsComponent,
    ModelEditComponent
  ],
  imports: [
    CommonModule,
    ModelRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule
  ]
})
export class ModelModule { }
