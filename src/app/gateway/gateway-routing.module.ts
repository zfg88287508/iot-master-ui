import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GatewaysComponent} from "./gateways/gateways.component";
import {GatewayEditComponent} from "./gateway-edit/gateway-edit.component";
import {PageNotFoundComponent} from "../base/page-not-found/page-not-found.component";
import {GatewayComponent} from "./gateway.component";

const routes: Routes = [
  {
    path: '', component: GatewayComponent, children: [
      {path: '', pathMatch:"full", redirectTo: "gateways"},
      {path: 'gateways', component: GatewaysComponent},
      {path: 'edit/:id', component: GatewayEditComponent},
      {path: 'create', component: GatewayEditComponent},
    ]
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GatewayRoutingModule { }
