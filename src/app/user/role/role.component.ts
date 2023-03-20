// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { RequestService } from '../../request.service';
// import { NzMessageService } from 'ng-zorro-antd/message';
// @Component({
//   selector: 'app-role',
//   templateUrl: './role.component.html',
//   styleUrls: ['./role.component.scss'],
// })
// export class RoleComponent implements OnInit {
//   group!: FormGroup;
//   id: any = 0;
//   constructor(
//     private fb: FormBuilder,
//     private router: Router,
//     private route: ActivatedRoute,
//     private rs: RequestService,
//     private msg: NzMessageService
//   ) {}

//   ngOnInit(): void {
//     this.group = this.fb.group({
//       id: ['', [Validators.required]],
//       name: ['', [Validators.required]],
//       privilleges: ['', [Validators.required]],
//       created: ['', ],
//     });
//   }
//   submit(){
//     if (this.group.valid) {
 
//       let url = `user/${this.id}` 
//       this.rs.post(url, this.group.value).subscribe(res => {
//         let path = "/user/list"
//         if (location.pathname.startsWith("/admin"))
//           path = "/admin" + path
//         this.router.navigateByUrl(path)
//         this.msg.success("保存成功")
//       })
 
//      return;
//    }
//    else {
//     Object.values(this.group.controls).forEach(control => {
//       if (control.invalid) {
//         control.markAsDirty();
//         control.updateValueAndValidity({ onlySelf: true });
//       }
//     });
     
//    }
//   }
   
// }


import {Component} from '@angular/core';
import {NzModalService} from "ng-zorro-antd/modal";
import {Router} from "@angular/router";
import {RequestService} from "../../request.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {NzTableQueryParams} from "ng-zorro-antd/table";
import {ParseTableQuery} from "../../base/table";

@Component({
    selector: 'app-role',
    templateUrl: './role.component.html',
    styleUrls: ['./role.component.scss'],
  })
  export class RoleComponent {

  loading = true
  datum: any[] = []
  total = 1;
  pageSize = 20;
  pageIndex = 1;
  query: any = {}


  constructor(private ms: NzModalService, private router: Router, private rs: RequestService, private msg: NzMessageService) {
    //this.load();
  }

  reload() {
    this.datum =[];
    this.load()
  }

  load() {
    this.loading = true
    this.rs.post("user/search", this.query).subscribe(res=>{
      this.datum = res.data;
      this.total = res.total;
    }).add(()=>{
      this.loading = false;
    })
  }

  create() {
    let path = "/user/create"
    if (location.pathname.startsWith("/admin"))
      path = "/admin" + path
    this.router.navigateByUrl(path)
  }

  delete(index: number, id: number) {
    console.log('delete', index, id)
    this.datum.splice(index, 1);
    this.rs.get(`user/${id}/delete`).subscribe(res => {
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

  edit(id: any) {
    let path = "/user/privillege/" + id
    if (location.pathname.startsWith("/admin"))
      path = "/admin" + path
    this.router.navigateByUrl(path)
  }
  add() {
    this.router.navigateByUrl('/admin/user/create');
  }
}
