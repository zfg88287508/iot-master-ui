import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

import {ProductRoutingModule} from './product-routing.module';
import {ProductsComponent} from "./products/products.component";
import {ProductEditComponent} from "./product-edit/product-edit.component";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {ReactiveFormsModule} from "@angular/forms";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {BaseModule} from "../base/base.module";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzSpaceModule} from "ng-zorro-antd/space";
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {NzCollapseModule} from "ng-zorro-antd/collapse";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzTypographyModule} from "ng-zorro-antd/typography"; 
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductEditComponent,
    ProductDetailComponent
  ],
    imports: [
        CommonModule,
        ProductRoutingModule,
        NzLayoutModule,
        NzMenuModule,
        NzIconModule,
        NzFormModule,
        NzInputModule,
        NzButtonModule,
        NzPopconfirmModule,
        NzTableModule,
        NzDividerModule,
        BaseModule,
        ReactiveFormsModule,
        NzInputNumberModule,
        NzCardModule,
        NzSpaceModule,
        NzCollapseModule,
        NzSelectModule,
        NzTypographyModule,
        DragDropModule
    ]
})
export class ProductModule {
}
