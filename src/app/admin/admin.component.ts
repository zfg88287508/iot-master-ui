import {Component} from '@angular/core';
import {AppService} from "../app.service";
import {OemService} from "../oem.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  constructor(protected _as: AppService, protected os: OemService) {
  }
}
