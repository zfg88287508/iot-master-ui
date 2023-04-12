import { Component, Input, Optional } from '@angular/core';
import { NzModalRef, NzModalService } from "ng-zorro-antd/modal";
import { Router } from "@angular/router";
import { RequestService } from "../../request.service";
import { NzMessageService } from "ng-zorro-antd/message";
import { NzTableQueryParams } from "ng-zorro-antd/table";
import { ParseTableQuery } from "../../base/table";
import { DeviceGroupEditComponent } from "../device-group-edit/device-group-edit.component";
import { readCsv } from 'src/public';

@Component({
  selector: 'app-device-group',
  templateUrl: './device-group.component.html',
  styleUrls: ['./device-group.component.scss']
})
export class DeviceGroupComponent {

  @Input() choose = false;
  uploading: Boolean = false;
  loading = true
  datum: any[] = []
  total = 1;
  pageSize = 20;
  pageIndex = 1;
  query: any = {};
  showAddBtn: Boolean = true;
  href!: string;


  constructor(private ms: NzModalService,
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
    this.loading = true
    this.rs.post("device/group/search", this.query).subscribe(res => {
      this.datum = res.data||[];
      this.total = res.total;
    }).add(() => {
      this.loading = false;
    })
  }
  handleExport(){
    // const listColumns = ['ID', '名称', '说明',  '日期'];
    // const data: any[][] = [];
    // data.push(listColumns);
    // this.datum.forEach((item) => {
    //   const arr = [];
    //   arr.push(item.id);
    //   arr.push(item.name);
    //   arr.push(item.desc); 
    //   arr.push(String(item.created));
    //   data.push(arr);
    // });
    // let csvContent = 'data:text/csv;charset=utf-8,';
    // data.forEach((row) => {
    //   csvContent += row.join(',') + '\n';
    // });
    // let encodedUri = encodeURI(csvContent);
    // window.open(encodedUri);
    this.href = `/api/device/group/import`;
  }
  handleReadCsv(e: any) {
    readCsv(e, this, 'device/group/create');
  }
  create() {
    this.ms.create({
      nzTitle: '创建分组',
      nzContent: DeviceGroupEditComponent,
    }).afterClose.subscribe(res => {
      if (res)
     { this.datum = [res].concat(this.datum);  }
    })
  }

  delete(index: number, id: number) {
    this.rs.get(`device/group/${id}/delete`).subscribe(res => {
      this.msg.success("删除成功")
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
  type(){
    const path = `admin/device/group/type`;
    this.router.navigateByUrl(path);
  }
  search($event: string) {
    this.query.keyword = {
      name: $event
    };
    this.query.skip = 0;
    this.load();
  }

  edit(data: any) {
    this.ms.create({
      nzTitle: '编辑分组',
      nzContent: DeviceGroupEditComponent,
      nzComponentParams: { id: data.id }
    }).afterClose.subscribe(res => {
      if (res) {//Object.assign(data, res)
      this.load()
      }
    })
  }

  select(id: any) {
    this.ref && this.ref.close(id)
  }
  cancel() {
    this.msg.info('click cancel');
  }
}
