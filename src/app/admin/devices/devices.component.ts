import { Component } from '@angular/core';
import {NzModalService} from "ng-zorro-antd/modal";
import {DeviceEditComponent} from "../device-edit/device-edit.component";

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent {
  devices = [
    {id: 1, name:"1号机", password:"123456", created: new Date()},
    {id: 2, name:"2号机", password:"123456", created: new Date()},
    {id: 3, name:"3号机", password:"123456", created: new Date()},
  ]

  constructor(private ms: NzModalService){

  }

  create() {
    this.ms.create({
      nzTitle: "创建设备",
      nzContent: DeviceEditComponent
    })
  }
}
