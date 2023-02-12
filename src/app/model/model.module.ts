import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelRoutingModule } from './model-routing.module';
import { ModelsComponent } from './models/models.component';
import { ModelEditComponent } from './model-edit/model-edit.component';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzIconModule} from "ng-zorro-antd/icon";
import {ModelComponent} from "./model.component";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzButtonModule} from "ng-zorro-antd/button";
import {ReactiveFormsModule} from "@angular/forms";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {BaseModule} from "../base/base.module";
import {NzSpaceModule} from "ng-zorro-antd/space";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzCollapseModule} from "ng-zorro-antd/collapse";
import {NzSelectModule} from "ng-zorro-antd/select";
import { ModelDetailComponent } from './model-detail/model-detail.component';


@NgModule({
  declarations: [
    ModelComponent,
    ModelsComponent,
    ModelEditComponent,
    ModelDetailComponent
  ],
  imports: [
    CommonModule,
    ModelRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzCardModule,
    NzButtonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    BaseModule,
    NzSpaceModule,
    NzTableModule,
    NzDividerModule,
    NzCollapseModule,
    NzSelectModule
  ]
})
export class ModelModule { }
