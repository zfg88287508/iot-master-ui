import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NZ_I18N} from 'ng-zorro-antd/i18n';
import {zh_CN} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './login/login.component';
import {PageNotFoundComponent} from './base/page-not-found/page-not-found.component';
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import {NzTabsModule} from "ng-zorro-antd/tabs";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzMessageModule} from "ng-zorro-antd/message";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzModalModule} from "ng-zorro-antd/modal";
import {DesktopComponent} from './desktop/desktop.component';
import {NzDrawerModule} from "ng-zorro-antd/drawer";
import {WindowComponent} from './window/window.component';
import {AdminComponent} from './admin/admin.component';
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";

registerLocaleData(zh);

const pages: Routes = [
  {
    path: 'server',
    loadChildren: () => import('./server/server.module').then(m => m.ServerModule)
  }, {
    path: 'device',
    loadChildren: () => import('./device/device.module').then(m => m.DeviceModule)
  }, {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule)
  }, {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  }, {
    path: 'product',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
  }, {
    path: 'plugin',
    loadChildren: () => import('./plugin/plugin.module').then(m => m.PluginModule)
  },
]

const routes: Routes = [
  {path: '', redirectTo: 'desktop', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'admin', component: AdminComponent, children: [
      {path: '', pathMatch: "full", redirectTo: "device"},
      ...pages
    ]
  },
  {path: 'desktop', component: DesktopComponent},
  ...pages,
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [AppComponent, LoginComponent, DesktopComponent, WindowComponent, AdminComponent],
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
    NzDrawerModule,
    NzIconModule,
    NzDropDownModule,
  ],
  providers: [{provide: NZ_I18N, useValue: zh_CN}],
  bootstrap: [AppComponent],
})
export class AppModule {
}
