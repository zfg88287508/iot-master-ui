import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from "./user.component";
import {PageNotFoundComponent} from "../base/page-not-found/page-not-found.component";
import {MeComponent} from "./me/me.component";
import {PasswordComponent} from "./password/password.component";
import {UsersComponent} from "./users/users.component";
import {UserEditComponent} from "./user-edit/user-edit.component";
import {UserDetailComponent} from "./user-detail/user-detail.component";

const routes: Routes = [
  {
    path: '', component: UserComponent, children: [
      {path: '', pathMatch: "full", redirectTo: "users"},
      {path: 'users', component: UsersComponent},
      {path: 'detail/:id', component: UserDetailComponent},
      {path: 'edit/:id', component: UserEditComponent},
      {path: 'create', component: UserEditComponent},
    ]
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
