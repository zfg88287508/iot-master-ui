import { Component, Input, Optional } from '@angular/core';
import { NzModalRef, NzModalService } from "ng-zorro-antd/modal";
import { Router } from "@angular/router";
import { RequestService } from "../../request.service";
import { NzMessageService } from "ng-zorro-antd/message";
import { NzTableQueryParams } from "ng-zorro-antd/table";
import { ParseTableQuery } from "../../base/table";
import { GroupEditComponent } from "../group-edit/group-edit.component";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent {

  @Input() choose = false;

  loading = true
  datum: any[] = []
  total = 1;
  pageSize = 20;
  pageIndex = 1;
  query: any = {};
  showAddBtn: Boolean = true;


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
      this.datum = res.data;
      this.total = res.total;
    }).add(() => {
      this.loading = false;
    })
  }

  create() {
    this.ms.create({
      nzTitle: '创建分组',
      nzContent: GroupEditComponent,
    }).afterClose.subscribe(res => {
      if (res)
      this.datum = [res].concat(this.datum);
    })
  }

  delete(index: number, id: number) {
    this.rs.get(`group/${id}/delete`).subscribe(res => {
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
      nzContent: GroupEditComponent,
      nzComponentParams: { id: data.id }
    }).afterClose.subscribe(res => {
      if (res) Object.assign(data, res)
    })
  }

  select(id: any) {
    this.ref && this.ref.close(id)
  }
  cancel() {
    this.msg.info('click cancel');
  }
}
