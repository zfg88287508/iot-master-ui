import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../../request.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSelectSizeType } from 'ng-zorro-antd/select';

@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.scss'],
})
export class RoleEditComponent implements OnInit {
  group!: FormGroup;
  id: any = 0;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private rs: RequestService,
    private msg: NzMessageService
  ) {}

  listOfOption: Array<{ label: string; value: string }> = [];
  listOfSelectedValue = ['管理员', '权限1'];
  
  ngOnInit(): void {
    if (this.route.snapshot.paramMap.has('id')) {
      this.id = this.route.snapshot.paramMap.get('id');
      this.rs.get(`role/${this.id}`).subscribe((res) => {
        //let data = res.data;
        this.build(res.data);
      });
    }

    const children: string[] = [];
    children.push(`管理员`);
    children.push(`权限1`);
    this.listOfOption = children.map((item) => ({
      value: item,
      label: item,
    }));

    this.build();
  }

  build(obj?: any) {
    obj = obj || {};
    this.group = this.fb.group({
      name: [obj.username || '', [Validators.required]],
      id: [obj.name || '', [Validators.required]],
      privileges: [obj.privilleges || [[]], [Validators.required]],
      created: [obj.created || ''],
    });
  }

  submit() {
   
    if (this.group.valid) {
         let url = this.id ? `role/${this.id}` : `role/create`
      if(url===`role/create`) 
      this.group.patchValue({created: new Date()})

      this.rs.post(url, this.group.value).subscribe(res => {
        let path = "/user/role"
        if (location.pathname.startsWith("/admin"))
          path = "/admin" + path
        this.router.navigateByUrl(path)
        this.msg.success("保存成功")
      })
      return;
    } else {
      Object.values(this.group.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
