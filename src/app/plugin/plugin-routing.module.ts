import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PluginComponent} from "./plugin.component";
import {PluginsComponent} from "./plugins/plugins.component";
import {PluginEditComponent} from "./plugin-edit/plugin-edit.component";
import {PageNotFoundComponent} from "../base/page-not-found/page-not-found.component";
import {PluginDetailComponent} from "./plugin-detail/plugin-detail.component";

const routes: Routes = [
  {
    path: '', component: PluginComponent, children: [
      {path: '', pathMatch:"full", redirectTo: "plugins"},
      {path: 'plugins', component: PluginsComponent},
      {path: 'detail/:id', component: PluginDetailComponent},
      {path: 'edit/:id', component: PluginEditComponent},
      {path: 'create', component: PluginEditComponent},
    ]
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PluginRoutingModule { }
