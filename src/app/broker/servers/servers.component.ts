import { Component } from '@angular/core';
import {NzModalService} from "ng-zorro-antd/modal";
import {ServerEditComponent} from "../server-edit/server-edit.component";
import {Router} from "@angular/router";
import {RequestService} from "../../request.service";
import {NzMessageModule, NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent {

  datum = [
    {id: 1, name: "A站-1", username:"test", password:"123456", created: new Date()},
    {id: 2, name: "A站-2", username:"test2", password:"123456", created: new Date()},
    {id: 3, name: "B站", username:"test3", password:"123456", created: new Date()},
  ]

  constructor(private ms: NzModalService, private router: Router, private rs: RequestService, private msg: NzMessageService){

  }

  create() {
    this.router.navigateByUrl("/broker/server/create")
    // this.ms.create({
    //   nzTitle: "创建服务器",
    //   nzContent: ServerEditComponent
    // })
  }

  delete(index: number, id: number) {
    this.datum.splice(index, 1);
    this.rs.get(`server/${id}/delete`).subscribe(res=>{
      this.msg.success("删除成功")
    })
  }
}
