import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Router } from '@angular/router';
import { RequestService } from '../../request.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { ParseTableQuery } from '../../base/table';

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
  mess: any;
  constructor(
    private ms: NzModalService,
    private router: Router,
    private rs: RequestService,
    private msg: NzMessageService
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
  searchPrivilege() {
    this.loading = true;
    this.rs
      .get('privileges')
      .subscribe((res) => {
        this.mess = JSON.stringify(res.data);
      })
      .add(() => {
        this.loading = false;
      });
    this.isVisible = true;
  }
  onQuery($event: NzTableQueryParams) {
    ParseTableQuery($event, this.query);
    this.load();
  }

  handleCancel() {
    this.isVisible = false;
  }

  handleOk() {
    this.isVisible = false;
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
}
