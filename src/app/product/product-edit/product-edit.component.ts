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
      ),
      parameters: this.fb.array(
        obj.parameters ? obj.parameters.map((prop: any) =>
          this.fb.group({
            name: [prop.name || '', []],
            label: [prop.label || '', []],
            min: [prop.min || 0, []],
            max: [prop.max || 0, []],
            default: [prop.default || 0, []],
          })
        ) : []
      ),
      constraints: this.fb.array(
        obj.constraints ? obj.constraints.map((prop: any) =>
          this.fb.group({
            level: [prop.level || 1, []],
            title: [prop.title || '', []],
            template: [prop.template || '', []],
            expression: [prop.expression || '', []],
            delay: [prop.delay || 0, []],
            again: [prop.again || 0, []],
            total: [prop.total || 0, []],
          })
        ) : []
      ),
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


  parameterAdd($event: any) {
    $event.stopPropagation()
    this.group.get('parameters').push(
      this.fb.group({
        name: ['', []],
        label: ['', []],
        min: [0, []],
        max: [0, []],
        default: [0, []],
      })
    )
  }


  parameterDel(i: number) {
    this.group.get('parameters').controls.splice(i, 1)
  }



  constraintAdd($event: any) {
    $event.stopPropagation()
    this.group.get('constraints').push(
      this.fb.group({
        level: [1, []],
        title: ['', []],
        template: ['', []],
        expression: ['', []],
        delay: [0, []],
        again: [0, []],
        total: [0, []],
      })
    )
  }


  constraintDel(i: number) {
    this.group.get('constraints').controls.splice(i, 1)
  }
}
