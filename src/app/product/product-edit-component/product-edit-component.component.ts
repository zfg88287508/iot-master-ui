
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ActivatedRoute, Router } from "@angular/router";
import { RequestService } from "../../request.service";
import { NzMessageService } from "ng-zorro-antd/message";
import { isIncludeAdmin } from "../../../public";

@Component({
  selector: 'app-product-edit-component',
  templateUrl: './product-edit-component.component.html',
  styleUrls: ['./product-edit-component.component.scss']
})
export class ProductEditComponentComponent implements OnInit {
  group!: any;
  allData: { properties: Array<object> } = { properties: [] };
  listData = [{
    title: '名称(ID)',
    keyName: 'name'
  }, {
    title: '显示',
    keyName: 'label'
  }, {
    title: '类型',
    keyName: 'type',
    type: 'select',
    listOfOption: [{
      label: '整数',
      value: 'int'
    }, {
      label: '浮点数',
      value: 'float'
    }, {
      label: '布尔型',
      value: 'bool'
    }, {
      label: '文本',
      value: 'text'
    }, {
      label: '枚举',
      value: 'enum'
    }, {
      label: '数组',
      value: 'array'
    }, {
      label: '对象',
      value: 'object'
    }]
  }, {
    title: '单位',
    keyName: 'unit'
  }, {
    title: '模式',
    keyName: 'mode',
    type: 'select',
    listOfOption: [{
      label: '只读',
      value: 'r'
    }, {
      label: '读写',
      value: 'rw'
    }]
  }]
  @ViewChild('propertyChild') propertyChild: any;
  @Input() id!: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private rs: RequestService,
    private msg: NzMessageService
  ) { }

  ngOnInit(): void {
    if (this.id) {
      this.rs.get(`product/${this.id}`).subscribe(res => {
        //let data = res.data;
        this.allData = res.data || {};
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
      properties: [obj.properties || [], []],
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

    if (this.group.valid) {
      let url = this.id ? `product/${this.id}` : `product/create`
      const sendData = JSON.parse(JSON.stringify(this.group.value));
      // 属性组件
      const propertyGroup = this.propertyChild.group;
      const propertys = propertyGroup.get('properties').controls.map((item: { value: any; }) => item.value);
      sendData.properties = propertys;
      this.rs.post(url, sendData).subscribe(res => {
        let path = "/product/list"
        if (location.pathname.startsWith("/admin"))
          path = "/admin" + path
        this.router.navigateByUrl(path)
        this.msg.success("保存成功")
      })
    }

  }

  propertyAdd($event: any) {
    $event.stopPropagation();
    if (this.propertyChild) {
      this.propertyChild.group.get('properties').controls.unshift(
        this.fb.group({
          name: ['', []],
          label: ['', []],
          type: ['int', []],
          unit: ['', []],
          mode: ['rw', []],
        })
      )
    }

  }

  handleCopyProperTy(index: number) {
    const item = this.group.get('properties').controls[index];
    this.group.get('properties').controls.splice(index, 0, item);
    this.msg.success("复制成功");
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

  handleCancel() {
    const path = `${isIncludeAdmin()}/product/list`;
    this.router.navigateByUrl(path);
  }

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.group.get('properties').controls, event.previousIndex, event.currentIndex);
  }
}
