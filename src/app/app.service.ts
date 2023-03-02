import { Injectable } from '@angular/core';
import {RequestService} from "./request.service";

const internals: any[] = [{
  icon: '/assets/server.png',
  name: '数据总线',
  internal: true,
  entries: [
    {name: '所有服务', path: '/server/list'},
    {name: '创建', path: '/server/create'},
  ]
}, {
  icon: '/assets/product.png',
  name: '产品管理',
  internal: true,
  entries: [
    {name: '所有产品', path: '/product/list'},
    {name: '创建', path: '/product/create'},
  ]
}, {
  icon: '/assets/gateway.png',
  name: '设备管理',
  internal: true,
  entries: [
    {name: '所有设备', path: '/device/list'},
    {name: '创建', path: '/device/create'},
  ]
}, {
  icon: '/assets/user.png',
  name: '用户管理',
  internal: true,
  entries: [
    {name: '所有用户', path: '/user/list'},
    {name: '创建', path: '/user/create'},
  ]
}, {
  icon: '/assets/plugin.png',
  name: '插件管理',
  internal: true,
  entries: [
    {name: '所有插件', path: '/plugin/list'},
    {name: '创建', path: '/plugin/create'},
  ]
}, {
  icon: '/assets/setting.png',
  name: '系统设置',
  internal: true,
  entries: [
    {name: '网站', path: '/setting/web'},
    {name: '数据库', path: '/setting/database'},
    {name: '日志', path: '/setting/log'},
    {name: '备份', path: '/setting/backup'},
    {name: '重启', path: '/setting/reboot'},
  ]
}];

@Injectable({
  providedIn: 'root'
})
export class AppService {

  apps: any[] = internals;

  constructor(private rs: RequestService) {
    this.load()
  }

  load() {
    this.rs.get("apps").subscribe(res=>{
      this.apps = internals.concat(res.data)
    })
  }
}
