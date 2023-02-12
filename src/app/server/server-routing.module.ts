import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ServersComponent} from "./servers/servers.component";
import {ServerEditComponent} from "./server-edit/server-edit.component";
import {PageNotFoundComponent} from "../base/page-not-found/page-not-found.component";
import {ServerComponent} from "./server.component";
import {ServerDetailComponent} from "./server-detail/server-detail.component";

const routes: Routes = [
  {
    path: '', component: ServerComponent, children: [
      {path: '', pathMatch:"full", redirectTo: "servers"},
      {path: 'servers', component: ServersComponent},
      {path: 'detail/:id', component: ServerDetailComponent},
      {path: 'edit/:id', component: ServerEditComponent},
      {path: 'create', component: ServerEditComponent},
    ]
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServerRoutingModule { }
