import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {RequestService} from "../../request.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {NzTableQueryParams} from "ng-zorro-antd/table";
import {ParseTableQuery} from "../../base/table";

@Component({
  selector: 'app-alarms',
  templateUrl: './alarms.component.html',
  styleUrls: ['./alarms.component.scss']
})
export class AlarmsComponent {


  loading = true
  datum: any[] = []
  total = 1;
  pageSize = 20;
  pageIndex = 1;
  query: any = {}


  constructor(private router: Router,
              private rs: RequestService,
              private msg: NzMessageService) {
    //this.load();
  }

  reload() {
    this.datum =[];
    this.load()
  }

  load() {
    this.loading = true
    this.rs.post("alarm/search", this.query).subscribe(res=>{
      this.datum = res.data;
      this.total = res.total;
    }).add(()=>{
      this.loading = false;
    })
  }

  delete(index: number, id: number) {
    console.log('delete', index, id)
    this.datum.splice(index, 1);
    this.rs.get(`alarm/${id}/delete`).subscribe(res => {
      this.msg.success("删除成功")
    })
  }

  onQuery($event: NzTableQueryParams) {
    ParseTableQuery($event, this.query)
    this.load();
  }

  search($event: string) {
    this.query.keyword = {
      title: $event,
      Message: $event,
    };
    this.query.skip = 0;
    this.load();
  }


  read(data: any) {
    this.rs.get(`alarm/${data.id}/read`).subscribe(res => {
      data.read = true;
      //this.msg.success("删除成功")
    })
  }
}
