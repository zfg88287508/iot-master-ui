import {Component} from '@angular/core';
import {AppService} from "../app.service";
import {OemService} from "../oem.service";
import {Router} from "@angular/router";
import {UserService} from "../user.service";
import {RequestService} from "../request.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  constructor(protected _as: AppService, protected os: OemService, private router: Router, private us: UserService, private rs: RequestService) {
    localStorage.setItem("main", "/admin")
  }

  logout() {
    this.rs.get("logout").subscribe(res=>{}).add(()=>this.router.navigateByUrl("/login"))
  }
}
