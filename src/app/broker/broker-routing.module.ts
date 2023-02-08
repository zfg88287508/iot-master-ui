import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ServersComponent} from "./servers/servers.component";
import {ServerEditComponent} from "./server-edit/server-edit.component";
import {GatewaysComponent} from "./gateways/gateways.component";
import {GatewayEditComponent} from "./gateway-edit/gateway-edit.component";
import {PageNotFoundComponent} from "../base/page-not-found/page-not-found.component";
import {BrokerComponent} from "./broker.component";

const routes: Routes = [
  {
    path: '', component: BrokerComponent, children: [
      {path: '', pathMatch:"full", redirectTo: "servers"},
      {path: 'servers', component: ServersComponent},
      {path: 'server/edit/:id', component: ServerEditComponent},
      {path: 'server/create', component: ServerEditComponent},
      {path: 'gateways', component: GatewaysComponent},
      {path: 'gateway/edit/:id', component: GatewayEditComponent},
      {path: 'gateway/create', component: GatewayEditComponent},
    ]
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class BrokerRoutingModule {
}
