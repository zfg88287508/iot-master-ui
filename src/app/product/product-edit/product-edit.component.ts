import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {RequestService} from "../../request.service";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-products-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  group!: any;
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
      this.rs.get(`product/${this.id}`).subscribe(res => {
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
      desc: [obj.desc || '', []],
      version: [obj.version || '', []],
      properties: this.fb.array(
        obj.properties ? obj.properties.map((prop: any) =>
          this.fb.group({
            label: [prop.label || '', []],
            name: [prop.name || '', []],
            type: [prop.type || 'int', []],
            unit: [prop.unit || '', []],
            mode: [prop.mode || 'rw', []],
          })
        ) : []
      )
    })
  }

  submit() {
    let url = this.id ? `product/${this.id}` : `product/create`
    this.rs.post(url, this.group.value).subscribe(res => {
      let path = "/product/list"
      if (location.pathname.startsWith("/admin"))
        path = "/admin" + path
      this.router.navigateByUrl(path)
      this.msg.success("保存成功")
    })

  }

  propertyAdd($event: any) {
    $event.stopPropagation()
    this.group.get('properties').push(
      this.fb.group({
        name: ['', []],
        label: ['', []],
        type: ['int', []],
        unit: ['', []],
        mode: ['rw', []],
      })
    )
  }


  propertyDel(i: number) {
    this.group.get('properties').controls.splice(i, 1)
  }
}
