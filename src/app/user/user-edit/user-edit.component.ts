import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { RequestService } from "../../request.service";
import { NzMessageService } from "ng-zorro-antd/message";
import { isIncludeAdmin } from "../../../public";

@Component({
  selector: 'app-users-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  group!: FormGroup;
  id: any = 0
  listOfOption: Array<{ label: string; value: string }> = [];
  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private rs: RequestService,
    private msg: NzMessageService) {
  }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.has("id")) {
      this.id = this.route.snapshot.paramMap.get("id");
      this.rs.get(`user/${this.id}`).subscribe(res => {
        //let data = res.data;
        this.build(res.data)
      })
    }

    this.build();
    this.getRoleList();
  }

  build(obj?: any) {
    obj = obj || {}
    this.group = this.fb.group({
      username: [obj.username || '', [Validators.required]],
      name: [obj.name || '', []],
      email: [obj.email || '', []],
      roles: [obj.roles || [], []],
    })
  }

  submit() {
    if (this.group.valid) {
      let url = `user/create`;
      const sendData = Object.assign({}, this.group.value);
      if (this.id) {
        url = `user/${this.id}`;
        sendData.id = Number(this.id);
      }
      const { roles } = sendData;
      if (!roles || !roles.length) {
        this.msg.warning('角色不可为空!');
        return;
      }
      this.rs.post(url, sendData).subscribe(res => {
        let path = "/user/list"
        if (location.pathname.startsWith("/admin"))
          path = "/admin" + path
        this.router.navigateByUrl(path)
        this.msg.success("保存成功")
      })
    } else {
      Object.values(this.group.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  handleCancel() {
    const path = `${isIncludeAdmin()}/user/list`;
    this.router.navigateByUrl(path);
  }
  getRoleList() {
    this.rs
      .get('role/list')
      .subscribe((res) => {
        const { data } = res;
        data.forEach((element: { value: any; id: any; label: any; name: any; }) => {
          element.value = element.id;
          element.label = element.name;
        });
        this.listOfOption = data;
      })
  }
}
