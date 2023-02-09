import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {RequestService} from "../../request.service";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {
  group: any = {};

  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private rs: RequestService,
              private msg: NzMessageService) {
  }


  ngOnInit(): void {
    this.rs.get(`config`).subscribe(res => {
      //let data = res.data;
      this.build(res.data)
    })

    this.build()
  }

  build(obj?: any) {
    obj = obj || {}
    this.group = this.fb.group({
      type: [obj.type || 'mysql', []],
      url: [obj.url || '', []],
    })
  }

  submit() {
    this.rs.post(`config`, this.group.value).subscribe(res => {
      this.msg.success("保存成功")
    })

  }
}
