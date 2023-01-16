import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsComponent } from './components/tabs/tabs.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';
import { H5Component } from './h5/h5.component';
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import {NzTabsModule} from "ng-zorro-antd/tabs";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzMessageModule} from "ng-zorro-antd/message";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import { GatewaysComponent } from './admin/gateways/gateways.component';
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";
import { DevicesComponent } from './admin/devices/devices.component';
import { ProductsComponent } from './admin/products/products.component';
import { DatePipe } from './date.pipe';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
import { DeviceEditComponent } from './admin/device-edit/device-edit.component';
import { GatewayEditComponent } from './admin/gateway-edit/gateway-edit.component';
import {NzModalModule} from "ng-zorro-antd/modal";

registerLocaleData(zh);


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'gateways',
        component: GatewaysComponent,
      },
      {
        path: 'devices',
        component: DevicesComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      }
    ]
  },
  {
    path: 'h5',
    component: H5Component,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
]

@NgModule({
  declarations: [AppComponent, TabsComponent, LoginComponent, PageNotFoundComponent, AdminComponent, H5Component, GatewaysComponent, DevicesComponent, ProductsComponent, DatePipe, ProductEditComponent, DeviceEditComponent, GatewayEditComponent],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterOutlet,
    NzTabsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    NzMessageModule,
    NzLayoutModule,
    NzMenuModule,
    NzTableModule,
    NzDividerModule,
    NzModalModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent],
})
export class AppModule {}
