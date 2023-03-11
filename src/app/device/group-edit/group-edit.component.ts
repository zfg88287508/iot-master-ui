import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {RequestService} from "../../request.service";
import {NzModalRef, NzModalService} from "ng-zorro-antd/modal";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-group-edit',
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.scss']
})
export class GroupEditComponent implements OnInit {
  @Input() id = 0;

  group: any = {};

  constructor(private fb: FormBuilder,
              private rs: RequestService,
              private ms: NzModalService,
              private msg: NzMessageService,
              protected ref: NzModalRef) {

  }


  ngOnInit(): void {
    console.log('init', this.id)
    if (this.id) {
      this.rs.get(`group/${this.id}`).subscribe(res => {
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
    })
  }

  submit() {
    let url = this.id ? `group/${this.id}` : `group/create`
    this.rs.post(url, this.group.value).subscribe(res => {
      this.ref.close(this.group.value)
      this.msg.success("保存成功")

    })
  }
}
