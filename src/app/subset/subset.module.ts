import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubsetsComponent } from './subsets/subsets.component';
import { SubsetEditComponent } from './subsets-edit/subset-edit.component';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzFormModule} from "ng-zorro-antd/form";
import {ReactiveFormsModule} from "@angular/forms";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {BaseModule} from "../base/base.module";
import {NzSpaceModule} from "ng-zorro-antd/space";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzButtonModule} from "ng-zorro-antd/button";
import { SubsetDetailComponent } from './subsets-detail/subset-detail.component';
import {SubsetComponent} from "./subset.component";
import {SubsetRoutingModule} from "./subset-routing.module";
import {NzStatisticModule} from "ng-zorro-antd/statistic";
import {NzTabsModule} from "ng-zorro-antd/tabs";


@NgModule({
    declarations: [
        SubsetComponent,
        SubsetsComponent,
        SubsetEditComponent,
        SubsetDetailComponent
    ],
    exports: [
        SubsetsComponent
    ],
  imports: [
    CommonModule,
    SubsetRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzCardModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzInputNumberModule,
    BaseModule,
    NzSpaceModule,
    NzTableModule,
    NzDividerModule,
    NzButtonModule,
    NzStatisticModule,
    NzTabsModule
  ]
})
export class SubsetModule { }
