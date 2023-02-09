import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {RequestService} from "../request.service";
import {NzModalService} from "ng-zorro-antd/modal";
import {WindowComponent} from "../window/window.component";

declare var window: any;

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent {

  oem: any = {
    title: '物联大师',
    logo: '/assets/logo.svg',
    company: '无锡真格智能科技有限公司',
    copyright: '©2016-2023'
  }

  apps: any[] = [{
    icon: '/assets/broker.png',
    name: '数据总线',
    internal: true,
    url: '/broker'
  }, {
    icon: '/assets/user.png',
    name: '用户管理',
    internal: true,
    url: '/user'
  }, {
    icon: '/assets/setting.png',
    name: '系统设置',
    internal: true,
    url: '/setting'
  }, {
    icon: '/assets/model.png',
    name: '物模型',
    internal: true,
    url: '/model'
  }, {
    icon: '/assets/device.png',
    name: '设备管理',
    internal: true,
    url: '/device'
  }, {
    icon: '/assets/plugin.png',
    name: '插件管理',
    internal: true,
    url: '/plugin'
  }];
  drawVisible: any;

  constructor(private router: Router, private rs: RequestService, private ms: NzModalService) {
    this.loadOEM()
  }

  loadOEM() {
    //优先从缓存中读取，避免闪烁
    let oem = localStorage.getItem("oem");
    if (oem) {
      oem = JSON.parse(oem)
      Object.assign(this.oem, oem)
    }

    this.rs.get("oem").subscribe(res => {
      let oem = res.data;
      localStorage.setItem("oem", JSON.stringify(oem));
      Object.assign(this.oem, oem)
    })
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
