import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "../base/page-not-found/page-not-found.component";
import {SubsetsComponent} from "./subsets/subsets.component";
import {SubsetEditComponent} from "./subsets-edit/subset-edit.component";
import {SubsetDetailComponent} from "./subsets-detail/subset-detail.component";
import {SubsetComponent} from "./subset.component";


const routes: Routes = [
  {
    path: '', component: SubsetComponent, children: [
      {path: '', pathMatch: "full", redirectTo: "subsets"},
      {path: 'subsets', component: SubsetsComponent},
      {path: 'detail/:id', component: SubsetDetailComponent},
      {path: 'edit/:id', component: SubsetEditComponent},
      {path: 'create', component: SubsetEditComponent},
    ]
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubsetRoutingModule {
}
