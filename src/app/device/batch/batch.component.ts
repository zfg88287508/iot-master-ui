import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NzMessageService } from "ng-zorro-antd/message";
import { RequestService } from "../../request.service";

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.scss']
})
export class BatchComponent implements OnInit {
  group!: FormGroup;
  isSpinning = false;
  btnTitle = '提交';
  @ViewChild('childTag') childTag: any;
  constructor(
    private fb: FormBuilder,
    private msg: NzMessageService,
    private rs: RequestService,
  ) { }
  ngOnInit(): void {
    this.build()
  }
  build(obj?: any) {
    obj = obj || {}
    this.group = this.fb.group({
      product_id: [obj.product_id || '', []],
      group_id: [obj.group_id || 0, []],
      name: [obj.name || '', [Validators.required]],
      desc: [obj.desc || '', []],
      amount: [obj.amount || 1, []],
    })
  }
  handleSubmit() {
    if (this.group.valid) {
      const { IdObj } = this.childTag;
      const { group_id, product_id } = IdObj;
      if (!product_id) {
        this.msg.warning('请选择产品!');
        return;
      }
      if (!group_id) {
        this.msg.warning('请选择分组!');
        return;
      }
      const sendData = Object.assign({}, this.group.value, IdObj);
      const amount = this.group.value.amount;
      const resData = [];
      this.isSpinning = true;
      this.btnTitle = '创建中...';
      for (let index = 0; index < amount; index++) {
        this.rs.post(`device/create`, sendData).subscribe(res => {
          resData.push(res);
          if (resData.length === amount) {
            this.isSpinning = false;
            this.btnTitle = '提交';
            this.msg.success("创建成功!");
          }
        })
      }
    }
  }
}
