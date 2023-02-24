import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {RequestService} from "../request.service";
import {NzModalService} from "ng-zorro-antd/modal";
import {WindowComponent} from "../window/window.component";
import {OemService} from "../oem.service";

declare var window: any;

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent {

  oem: any;

  apps: any[] = [{
    icon: '/assets/server.png',
    name: '数据总线',
    internal: true,
    url: '/server'
  }, {
    icon: '/assets/model.png',
    name: '物模型',
    internal: true,
    url: '/model'
  }, {
    icon: '/assets/product.png',
    name: '产品管理',
    internal: true,
    url: '/product'
  }, {
    icon: '/assets/gateway.png',
    name: '设备管理',
    internal: true,
    url: '/device'
  }, {
    icon: '/assets/device.png',
    name: '子设备管理',
    internal: true,
    url: '/subset'
  }, {
    icon: '/assets/user.png',
    name: '用户管理',
    internal: true,
    url: '/user'
  }, {
    icon: '/assets/plugin.png',
    name: '插件管理',
    internal: true,
    url: '/plugin'
  }, {
    icon: '/assets/setting.png',
    name: '系统设置',
    internal: true,
    url: '/setting'
  }];
  drawVisible: any;

  constructor(private router: Router, private rs: RequestService, private ms: NzModalService, private os: OemService) {
    this.oem = os.oem
  }

  open(app: any) {
    if (window.innerWidth < 800) {
      this.router.navigate([app.url])
      return;
    }

    this.ms.create({
      nzTitle: app.name,
      nzFooter: null,
      //nzMask: false,
      nzMaskClosable: false,
      nzWidth: "90%",
      //nzStyle: {height: "90%"},
      nzBodyStyle: {padding: "0", overflow: "hidden"},
      nzContent: WindowComponent,
      nzComponentParams: {
        url: app.url
      }
    })
  }
}
