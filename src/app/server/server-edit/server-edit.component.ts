import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {RequestService} from "../../request.service";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-servers-edit',
  templateUrl: './server-edit.component.html',
  styleUrls: ['./server-edit.component.scss']
})
export class ServerEditComponent implements OnInit{
  group: any = {};
  id: any = 0

  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private rs: RequestService,
              private msg: NzMessageService) {
  }


  ngOnInit(): void {
    if (this.route.snapshot.paramMap.has("id")) {
      this.id = this.route.snapshot.paramMap.get("id");
      this.rs.get(`server/${this.id}`).subscribe(res => {
        //let data = res.data;
        this.build(res.data)
      })

    }

    this.build()
  }

  build(obj?: any) {
    obj = obj || {}
    this.group = this.fb.group({
      name: [obj.name || '', [Validators.required]],
      desc: [obj.desc || '', []],
      port: [obj.port || 1883, []],
    })
  }

  submit() {
    let url = this.id ? `server/${this.id}` : `server/create`
    this.rs.post(url, this.group.value).subscribe(res => {
      let path = "/server/list"
      if (location.pathname.startsWith("/admin"))
        path = "/admin" + path
      this.router.navigateByUrl(path)
      this.msg.success("保存成功")
    })

  }
}
