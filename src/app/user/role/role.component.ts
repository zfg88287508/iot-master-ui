import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../../request.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { ParseTableQuery } from '../../base/table';
import { tableHeight } from "../../../public";

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'],
})
export class RoleComponent {
  loading = true;
  datum: any[] = [];
  total = 1;
  pageSize = 20;
  pageIndex = 1;
  query: any = {};
  isVisible = false;
  roleObj = {};
  constructor(
    private router: Router,
    private rs: RequestService,
    private msg: NzMessageService,
  ) {
    this.load();
  }

  reload() {
    this.datum = [];
    this.load();
  }

  load() {
    this.loading = true;
    this.rs
      .post('role/search', this.query)
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
    console.log('delete', index, id);
    this.datum.splice(index, 1);
    this.rs.get(`role/${id}/delete`).subscribe((res) => {
      this.msg.success('删除成功');
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
    let path = '/user/privillege/' + id;
    if (location.pathname.startsWith('/admin')) path = '/admin' + path;
    this.router.navigateByUrl(path);
  }
  add() {
    this.router.navigateByUrl('/admin/user/role/create');
  }
  cancel() {
    this.msg.info('点击取消');
  }
  getTableHeight() {
    return tableHeight(this);
  }
}
