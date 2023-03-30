import { Component, Input, Optional } from '@angular/core';
import { NzModalRef } from "ng-zorro-antd/modal";
import { Router } from "@angular/router";
import { RequestService } from "../../request.service";
import { NzMessageService } from "ng-zorro-antd/message";
import { NzTableQueryParams } from "ng-zorro-antd/table";
import { ParseTableQuery } from "../../base/table";
import { isIncludeAdmin, readCsv, tableHeight } from "../../../public";

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent {

  @Input() chooseGateway = false;

  loading = true
  datum: any[] = []
  total = 1;
  pageSize = 20;
  pageIndex = 1;
  query: any = {}
  showAddBtn: Boolean = true
  columnKeyNameArr: any = ['name', 'desc', 'product_id', 'group_id', 'type']
  uploading: Boolean = false;


  constructor(
    @Optional() protected ref: NzModalRef,
    private router: Router,
    private rs: RequestService,
    private msg: NzMessageService) {
    //this.load();
  }

  reload() {
    this.datum = [];
    this.load()
  }

  load() {
    //筛选网关
    if (this.chooseGateway)
      this.query.filter = { type: 'gateway' }

    this.loading = true
    this.rs.post("device/search", this.query).subscribe(res => {
      this.datum = res.data;
      this.total = res.total;
    }).add(() => {
      this.loading = false;
    })
  }

  create() {
    let path = "/device/create"
    if (location.pathname.startsWith("/admin"))
      path = "/admin" + path
    this.router.navigateByUrl(path)
  }

  delete(index: number, id: number) {
    this.rs.get(`device/${id}/delete`).subscribe(res => {
      this.msg.success("删除成功");
      if (this.datum.length > 1) {
        this.datum = this.datum.filter(d => d.id !== id);
      } else {
        this.load();
      }
    })
  }

  onQuery($event: NzTableQueryParams) {
    ParseTableQuery($event, this.query)
    this.load();
  }

  search($event: string) {
    this.query.keyword = {
      name: $event
    };
    this.query.skip = 0;
    this.load();
  }

  open(id: any) {
    if (this.chooseGateway) {
      this.select(id)
      return
    }
    const path = `${isIncludeAdmin()}/device/detail/${id}`;
    this.router.navigateByUrl(path)
  }

  edit(id: any) {
    const path = `${isIncludeAdmin()}/device/edit/${id}`;
    this.router.navigateByUrl(path);
  }
  handleNew() {
    const path = `${isIncludeAdmin()}/device/create`;
    this.router.navigateByUrl(path);
  }
  select(id: any) {
    this.ref && this.ref.close(id)
  }
  cancel() {
    this.msg.info('click cancel');
  }
  handleExport() {
    const listColumns = ['ID', '产品ID', '分组ID', '名称', '说明', '日期'];
    const data: any[][] = [];
    data.push(listColumns);
    this.datum.forEach(item => {
      const arr = [];
      arr.push(item.id);
      arr.push(item.product_id);
      arr.push(item.group_id);
      arr.push(item.name);
      arr.push(item.desc);
      arr.push(String(item.created));
      data.push(arr);
    });
    let csvContent = 'data:text/csv;charset=utf-8,';
    data.forEach(row => { csvContent += row.join(',') + '\n'; });
    let encodedUri = encodeURI(csvContent);
    window.open(encodedUri);
  }
  handleReadCsv(e: any) {
    readCsv(e, this, 'device/create');
  }
  getTableHeight() {
    return tableHeight(this);
  }
}
