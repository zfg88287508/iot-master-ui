import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DevicesComponent} from "./devices/devices.component";
import {DeviceEditComponent} from "./device-edit/device-edit.component";
import {PageNotFoundComponent} from "../base/page-not-found/page-not-found.component";
import {DeviceDetailComponent} from "./device-detail/device-detail.component";
import {BatchComponent} from "./batch/batch.component";
import {DeviceGroupComponent} from "./device-group/device-group.component";
import { DeviceTypeComponent } from './device-type/device-type.component';
const routes: Routes = [
  {path: '', pathMatch: "full", redirectTo: "list"},
  {path: 'list', component: DevicesComponent},
  {path: 'detail/:id', component: DeviceDetailComponent},
  {path: 'edit/:id', component: DeviceEditComponent},
  {path: 'create', component: DeviceEditComponent},
  {path: 'batch', component: BatchComponent},
  {path: 'group', component: DeviceGroupComponent},
  {path: 'type', component:DeviceTypeComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceRoutingModule {
}
