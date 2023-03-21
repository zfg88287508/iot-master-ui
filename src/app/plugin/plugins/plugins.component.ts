import {Component} from '@angular/core';
import {NzModalService} from "ng-zorro-antd/modal";
import {Router} from "@angular/router";
import {RequestService} from "../../request.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {NzTableQueryParams} from "ng-zorro-antd/table";
import {ParseTableQuery} from "../../base/table";

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


  constructor(private ms: NzModalService, private router: Router, private rs: RequestService, private msg: NzMessageService) {
    //this.load();
  }

  reload() {
    this.datum =[];
    this.load()
  }

  load() {
    this.loading = true
    this.rs.post("plugin/search", this.query).subscribe(res=>{
      this.datum = res.data;
      this.total = res.total;
    }).add(()=>{
      this.loading = false;
    })
  }

  create() {
    let path = "/plugin/create"
    if (location.pathname.startsWith("/admin"))
      path = "/admin" + path
    this.router.navigateByUrl(path)
  }

  delete(index: number, id: number) {
    console.log('delete', index, id)
    this.datum.splice(index, 1);
    this.rs.get(`plugin/${id}/delete`).subscribe(res => {
      this.msg.success("删除成功")
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
    let path = "/plugin/edit/" + id
    if (location.pathname.startsWith("/admin"))
      path = "/admin" + path
    this.router.navigateByUrl(path)
  }
  cancel() {
    this.msg.info('click cancel');
  }   
}
