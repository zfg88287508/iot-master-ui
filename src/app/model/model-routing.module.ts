import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ModelComponent} from "./model.component";
import {PageNotFoundComponent} from "../base/page-not-found/page-not-found.component";
import {ModelsComponent} from "./models/models.component";
import {ModelEditComponent} from "./model-edit/model-edit.component";

const routes: Routes = [
  {
    path: '', component: ModelComponent, children: [
      {path: '', pathMatch:"full", redirectTo: "models"},
      {path: 'models', component: ModelsComponent},
      {path: 'model/edit/:id', component: ModelEditComponent},
      {path: 'model/create', component: ModelEditComponent},
    ]
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelRoutingModule { }