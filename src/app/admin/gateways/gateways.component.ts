import { Component } from '@angular/core';
import {NzModalService} from "ng-zorro-antd/modal";
import {GatewayEditComponent} from "../gateway-edit/gateway-edit.component";

@Component({
  selector: 'app-gateways',
  templateUrl: './gateways.component.html',
  styleUrls: ['./gateways.component.scss']
})
export class GatewaysComponent {
  users = [
    {id: 1, name: "A站-1", username:"test", password:"123456", created: new Date()},
    {id: 2, name: "A站-2", username:"test2", password:"123456", created: new Date()},
    {id: 3, name: "B站", username:"test3", password:"123456", created: new Date()},
  ]

  constructor(private ms: NzModalService){

  }

  create() {
    this.ms.create({
      nzTitle: "创建",
      nzContent: GatewayEditComponent
    })
  }
}
