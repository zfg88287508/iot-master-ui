import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {RequestService} from "../../request.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {NzModalService} from "ng-zorro-antd/modal";
import {ProductsComponent} from "../../product/products/products.component";
import {DevicesComponent} from "../devices/devices.component";
import {GroupComponent} from "../group/group.component";

@Component({
  selector: 'app-products-edit',
  templateUrl: './device-edit.component.html',
  styleUrls: ['./device-edit.component.scss']
})
export class DeviceEditComponent implements OnInit {
  group: any = {};
  id: any = 0

  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private rs: RequestService,
              private ms: NzModalService,
              private msg: NzMessageService) {

  }


  ngOnInit(): void {
    if (this.route.snapshot.paramMap.has("id")) {
      this.id = this.route.snapshot.paramMap.get("id");
      this.rs.get(`device/${this.id}`).subscribe(res => {
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
      product_id: [obj.product_id || '', []],
      gateway_id: [obj.gateway_id || '', []],
      group_id: [obj.group_id || 0, []],
      type: [obj.type || 'device', []],
      name: [obj.name || '', [Validators.required]],
      desc: [obj.desc || '', []],
      username: [obj.username || '', []],
      password: [obj.password || '', []],
    })
  }

  submit() {
    let url = this.id ? `device/${this.id}` : `device/create`
    this.rs.post(url, this.group.value).subscribe(res => {
      let path = "/device/list"
      if (location.pathname.startsWith("/admin"))
        path = "/admin" + path
      this.router.navigateByUrl(path)
      this.msg.success("保存成功")

    })

  }

  chooseProduct() {
    this.ms.create({
      nzTitle: "选择产品",
      nzContent: ProductsComponent,
      nzFooter: null
    }).afterClose.subscribe(res => {
      if (res) {
        this.group.patchValue({product_id: res})
      }
    })
  }

  chooseGateway() {
    this.ms.create({
      nzTitle: "选择网关",
      nzContent: DevicesComponent,
      nzComponentParams: {
        chooseGateway: true,
      },
      nzFooter: null
    }).afterClose.subscribe(res => {
      if (res) {
        this.group.patchValue({gateway_id: res})
      }
    })
  }

  chooseGroup() {
    this.ms.create({
      nzTitle: "选择分组",
      nzContent: GroupComponent,
      nzComponentParams: {
        choose: true,
      },
      nzFooter: null
    }).afterClose.subscribe(res => {
      if (res) {
        this.group.patchValue({group_id: res})
      }
    })
  }
}
