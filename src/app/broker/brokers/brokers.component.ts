import { Component } from '@angular/core';
import { NzModalService } from "ng-zorro-antd/modal";
import { Router } from "@angular/router";
import { RequestService } from "../../request.service";
import { NzMessageService } from "ng-zorro-antd/message";
import { NzTableQueryParams } from "ng-zorro-antd/table";
import { ParseTableQuery } from "../../base/table";
import { isIncludeAdmin,readCsv, tableHeight, onAllChecked, onItemChecked, refreshCheckedStatus, batchdel } from "../../../public";
@Component({
  selector: 'app-brokers',
  templateUrl: './brokers.component.html',
  styleUrls: ['./brokers.component.scss']
})
export class BrokersComponent {
  uploading: Boolean = false;
  loading = true
  datum: any[] = []
  total = 1;
  pageSize = 20;
  pageIndex = 1;
  query: any = {}
  checked = false;
  indeterminate = false;
  setOfCheckedId = new Set<number>();
  delResData: any = [];
  href!: string;
  constructor(
    private modal: NzModalService,
    private router: Router,
    private rs: RequestService,
    private msg: NzMessageService
  ) {
    //this.load();
  }

  reload() {
    this.datum = [];
    this.load()
  }

  load() {
    this.loading = true
    this.rs.post("broker/search", this.query).subscribe(res => {
      this.datum = res.data||[];
      this.total = res.total;
      this.setOfCheckedId.clear();
      refreshCheckedStatus(this);
    }).add(() => {
      this.loading = false;
    })
  }

  create() {
    let path = "/broker/create"
    if (location.pathname.startsWith("/admin"))
      path = "/admin" + path
    this.router.navigateByUrl(path)
  }

  delete(id: number, size?: number) {
    this.rs.get(`broker/${id}/delete`).subscribe(res => {
      if (!size  ) {
        this.msg.success("删除成功");
        this.datum = this.datum.filter(d => d.id !== id);
        this.load();
      } else if (size) {
        this.delResData.push(res);
        if (size === this.delResData.length) {
          this.msg.success("删除成功");
          this.load();
        }
      }
    })
  }
  handleExport(){ 
    this.href = `/api/broker/export`;
  }
   
  onQuery($event: NzTableQueryParams) { 
    ParseTableQuery($event, this.query)
    this.load();
  }
  pageIndexChange(pageIndex: number) {
    console.log("pageIndex:", pageIndex)
  }
  pageSizeChange(pageSize: number) {  
    this.query.limit = pageSize;
    this.load();
  }
  search($event: string) {
    this.query.keyword = {
      name: $event
    };
    this.query.skip = 0;
    this.load();
  }

  edit(id: any) {
    const path = `${isIncludeAdmin()}/broker/edit/${id}`;
    this.router.navigateByUrl(path);
  }
  handleNew() {
    const path = `${isIncludeAdmin()}/broker/create`;
    this.router.navigateByUrl(path);
  }
  cancel() {
    this.msg.info('取消操作');
  }
  getTableHeight() {
    return tableHeight(this);
  }
  handleBatchDel() {
    batchdel(this);
  }
  handleAllChecked(id: any) {
    onAllChecked(id, this);
  }
  handleItemChecked(id: number, checked: boolean) {
    onItemChecked(id, checked, this);
  }
}
