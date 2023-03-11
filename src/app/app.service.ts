import { Injectable } from '@angular/core';
import {RequestService} from "./request.service";

const internals: any[] = [{
  icon: '/assets/server.png',
  nzIcon: 'database',
  name: '数据总线',
  internal: true,
  entries: [
    {name: '所有服务', path: '/server/list'},
    {name: '创建服务', path: '/server/create'},
  ]
}, {
  icon: '/assets/product.png',
  nzIcon: 'appstore',
  name: '产品管理',
  internal: true,
  entries: [
    {name: '所有产品', path: '/product/list'},
    {name: '创建产品', path: '/product/create'},
  ]
}, {
  icon: '/assets/gateway.png',
  nzIcon: 'block',
  name: '设备管理',
  internal: true,
  entries: [
    {name: '所有设备', path: '/device/list'},
    {name: '创建设备', path: '/device/create'},
    {name: '批量创建', path: '/device/batch'},
    {name: '设备分组', path: '/device/group'},
  ]
}, {
  icon: '/assets/alarm.png',
  nzIcon: 'bell',
  name: '报警管理',
  internal: true,
  entries: [
    {name: '报警记录', path: '/alarm/list'},
  ]
}, {
  icon: '/assets/user.png',
  nzIcon: 'user',
  name: '用户管理',
  internal: true,
  entries: [
    {name: '所有用户', path: '/user/list'},
    {name: '创建用户', path: '/user/create'},
    {name: '角色权限', path: '/user/role'},
  ]
}, {
  icon: '/assets/plugin.png',
  nzIcon: 'appstore-add',
  name: '插件管理',
  internal: true,
  entries: [
    {name: '所有插件', path: '/plugin/list'},
    {name: '创建插件', path: '/plugin/create'},
  ]
}, {
  icon: '/assets/setting.png',
  nzIcon: 'setting',
  name: '系统设置',
  internal: true,
  entries: [
    {name: '网站', path: '/setting/web'},
    {name: '数据库', path: '/setting/database'},
    {name: '日志', path: '/setting/log'},
    //{name: '备份', path: '/setting/backup'},
    //{name: '重启', path: '/setting/reboot'},
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
