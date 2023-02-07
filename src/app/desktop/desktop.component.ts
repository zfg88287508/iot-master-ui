import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent {
  apps: any[] = [{
    icon: '/assets/broker.png',
    name: '数据总线',
    internal: true,
    url: '/broker'
  },{
    icon: '/assets/user.png',
    name: '用户管理',
    internal: true,
    url: '/user'
  },{
    icon: '/assets/setting.png',
    name: '系统设置',
    internal: true,
    url: '/setting'
  },{
    icon: '/assets/model.png',
    name: '物模型',
    internal: true,
    url: '/model'
  },{
    icon: '/assets/device.png',
    name: '设备管理',
    internal: true,
    url: '/device'
  },{
    icon: '/assets/plugin.png',
    name: '插件管理',
    internal: true,
    url: '/plugin'
  }];

  constructor(private router: Router) {
  }

  open(app: any) {
    //内部程序
    if (app.internal) {
      this.router.navigate([app.url]).then(()=>{})
      return;
    }
  }
}
