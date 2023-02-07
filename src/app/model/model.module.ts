import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelRoutingModule } from './model-routing.module';
import { ModelComponent } from './model/model.component';
import { ModelEditComponent } from './model-edit/model-edit.component';


@NgModule({
  declarations: [
    ModelComponent,
    ModelEditComponent
  ],
  imports: [
    CommonModule,
    ModelRoutingModule
  ]
})
export class ModelModule { }
