import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from "./user.component";
import {PageNotFoundComponent} from "../base/page-not-found/page-not-found.component";
import {MeComponent} from "./me/me.component";
import {PasswordComponent} from "./password/password.component";
import {UsersComponent} from "./users/users.component";
import {UserEditComponent} from "./user-edit/user-edit.component";

const routes: Routes = [
  {
    path: '', component: UserComponent, children: [
      {path: '', pathMatch: "full", redirectTo: "me"},
      {path: 'me', component: MeComponent},
      {path: 'password', component: PasswordComponent},
      {path: 'users', component: UsersComponent},
      {path: 'create', component: UserEditComponent},
      {path: 'edit/:id', component: UserEditComponent},
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
