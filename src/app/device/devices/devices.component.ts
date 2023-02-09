import {Component} from '@angular/core';
import {NzModalService} from "ng-zorro-antd/modal";
import {Router} from "@angular/router";
import {RequestService} from "../../request.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {NzTableQueryParams} from "ng-zorro-antd/table";
import {ParseTableQuery} from "../../base/table";

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent {

  loading = true
  datum: any[] = []
  total = 1;
  pageSize = 20;
  pageIndex = 1;
  query: any = {}


  constructor(private ms: NzModalService, private router: Router, private rs: RequestService, private msg: NzMessageService) {
    this.load();
  }

  reload() {
    this.datum =[];
    this.load()
  }

  load() {
    this.loading = true
    this.rs.post("device/search", this.query).subscribe(res=>{
      this.datum = res.data;
    }).add(()=>{
      this.loading = false;
    })
  }

  create() {
    this.router.navigateByUrl("/device/device/create")
    // this.ms.create({
    //   nzTitle: "创建服务器",
    //   nzContent: deviceEditComponent
    // })
  }

  delete(index: number, id: number) {
    console.log('delete', index, id)
    this.datum.splice(index, 1);
    this.rs.get(`device/${id}/delete`).subscribe(res => {
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
}
