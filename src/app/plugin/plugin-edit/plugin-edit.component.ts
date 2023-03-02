import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {RequestService} from "../../request.service";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-plugin-edit',
  templateUrl: './plugin-edit.component.html',
  styleUrls: ['./plugin-edit.component.scss']
})
export class PluginEditComponent implements OnInit {
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
      this.rs.get(`plugin/${this.id}`).subscribe(res => {
        //let data = res.data;
        this.build(res.data)
      })

    }

    this.build()
  }

  build(obj?: any) {
    obj = obj || {}
    this.group = this.fb.group({
      id: [obj.id || '', []],
      name: [obj.name || '', [Validators.required]],
      version: [obj.version || '', []],
      command: [obj.command || '', []],
      dependencies: [obj.dependencies || {}, []],
    })
  }

  submit() {
    let url = this.id ? `plugin/${this.id}` : `plugin/create`
    this.rs.post(url, this.group.value).subscribe(res => {
      let path = "/plugin/list"
      if (location.pathname.startsWith("/admin"))
        path = "/admin" + path
      this.router.navigateByUrl(path)
      this.msg.success("保存成功")
    })

  }
}
