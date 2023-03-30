import { Component } from '@angular/core';
import { NzModalService } from "ng-zorro-antd/modal";
import { Router } from "@angular/router";
import { RequestService } from "../../request.service";
import { NzMessageService } from "ng-zorro-antd/message";
import { NzTableQueryParams } from "ng-zorro-antd/table";
import { ParseTableQuery } from "../../base/table";
import { isIncludeAdmin, tableHeight, onAllChecked, onItemChecked, batchdel, refreshCheckedStatus } from "../../../public";

@Component({
  selector: 'app-plugins',
  templateUrl: './plugins.component.html',
  styleUrls: ['./plugins.component.scss']
})
export class PluginsComponent {

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

  constructor(private modal: NzModalService, private router: Router, private rs: RequestService, private msg: NzMessageService) {
    //this.load();
  }

  reload() {
    this.datum = [];
    this.load()
  }

  load() {
    this.loading = true
    this.rs.post("plugin/search", this.query).subscribe(res => {
      this.datum = res.data;
      this.total = res.total;
      this.setOfCheckedId.clear();
      refreshCheckedStatus(this);
    }).add(() => {
      this.loading = false;
    })
  }

  create() {
    let path = "/plugin/create"
    if (location.pathname.startsWith("/admin"))
      path = "/admin" + path
    this.router.navigateByUrl(path)
  }

  delete(id: number, size?: number) {
    this.rs.get(`plugin/${id}/delete`).subscribe(res => {
      if (!size && this.datum.length > 1) {
        this.msg.success("删除成功");
        this.datum = this.datum.filter(d => d.id !== id);
      } else if (size) {
        this.delResData.push(res);
        if (size === this.delResData.length) {
          this.msg.success("删除成功");
          this.load();
        }
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

  edit(id: any) {
    const path = `${isIncludeAdmin()}/plugin/edit/${id}`;
    this.router.navigateByUrl(path)
  }
  cancel() {
    this.msg.info('click cancel');
  }

  handleNew() {
    const path = `${isIncludeAdmin()}/plugin/create`;
    this.router.navigateByUrl(path);
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
