import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Router } from '@angular/router';
import { RequestService } from '../../request.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { ParseTableQuery } from '../../base/table';
import { isIncludeAdmin, tableHeight } from "../../../public";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  loading = true;
  datum: any[] = [];
  total = 1;
  pageSize = 20;
  pageIndex = 1;
  query: any = {};

  constructor(
    private ms: NzModalService,
    private router: Router,
    private rs: RequestService,
    private msg: NzMessageService
  ) {
    //this.load();
  }

  reload() {
    this.datum = [];
    this.load();
  }

  load() {
    this.loading = true;
    this.rs
      .post('user/search', this.query)
      .subscribe((res) => {
        this.datum = res.data;
        this.total = res.total;
      })
      .add(() => {
        this.loading = false;
      });
  }

  create() {
    let path = '/user/create';
    if (location.pathname.startsWith('/admin')) path = '/admin' + path;
    this.router.navigateByUrl(path);
  }

  delete(index: number, id: number) {
    this.rs.get(`user/${id}/delete`).subscribe((res) => {
      this.msg.success('删除成功');
      if (this.datum.length > 1) {
        this.datum = this.datum.filter(d => d.id !== id);
      } else {
        this.load();
      }
    });
  }

  onQuery($event: NzTableQueryParams) {
    ParseTableQuery($event, this.query);
    this.load();
  }

  search($event: string) {
    this.query.keyword = {
      name: $event,
    };
    this.query.skip = 0;
    this.load();
  }

  edit(id: any) {
    const path = `${isIncludeAdmin()}/user/edit/${id}`;
    this.router.navigateByUrl(path);
  }
  add() {
    this.router.navigateByUrl(`${isIncludeAdmin()}/user/create`);
  }
  cancel() {
    this.msg.info('click cancel');
  }
  getTableHeight() {
    return tableHeight(this);
  }
}
