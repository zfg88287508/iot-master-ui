import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DeviceComponent} from "./device.component";
import {PageNotFoundComponent} from "../base/page-not-found/page-not-found.component";
import {DevicesComponent} from "./devices/devices.component";
import {DeviceEditComponent} from "./device-edit/device-edit.component";
import {DeviceDetailComponent} from "./device-detail/device-detail.component";


const routes: Routes = [
  {
    path: '', component: DeviceComponent, children: [
      {path: '', pathMatch:"full", redirectTo: "devices"},
      {path: 'devices', component: DevicesComponent},
      {path: 'detail/:id', component: DeviceDetailComponent},
      {path: 'edit/:id', component: DeviceEditComponent},
      {path: 'create', component: DeviceEditComponent},
    ]
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceRoutingModule { }
