import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ServerComponent} from "./server/server.component";
import {ServerEditComponent} from "./server-edit/server-edit.component";
import {GatewayComponent} from "./gateway/gateway.component";
import {GatewayEditComponent} from "./gateway-edit/gateway-edit.component";
import {PageNotFoundComponent} from "../base/page-not-found/page-not-found.component";
import {BaseModule} from "../base/base.module";

const routes: Routes = [
  {path: '', redirectTo: 'server', pathMatch: 'full'},
  {path: 'server', component: ServerComponent},
  {path: 'server/edit/:id', component: ServerEditComponent},
  {path: 'server/create', component: ServerEditComponent},
  {path: 'gateway', component: GatewayComponent},
  {path: 'gateway/edit/:id', component: GatewayEditComponent},
  {path: 'gateway/create', component: GatewayEditComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes), ],
  exports: [RouterModule]
})
export class BrokerRoutingModule {
}
