import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { RequestService } from "../../request.service";
import { NzMessageService } from "ng-zorro-antd/message";
import { NzTableQueryParams } from "ng-zorro-antd/table";
import { ParseTableQuery } from "../../base/table";
import { tableHeight } from "../../../public";
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
  filterRead = [
    { text: 'true', value: 1 },
    { text: 'false', value: 0 }
  ]
  filterLevel = [
    { text: '1', value: 1 },
    { text: '2', value: 2 },
    { text: '3', value: 3 },
  ]
  constructor(private router: Router,
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
    this.rs.post("alarm/search", this.query).subscribe(res => {
      this.datum = res.data;
      this.total = res.total;
    }).add(() => {
      this.loading = false;
    })
  }

  delete(index: number, id: number) {
    this.rs.get(`alarm/${id}/delete`).subscribe(res => {
      this.msg.success("删除成功");
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

  getTableHeight() {
    return tableHeight(this);
  }
}
