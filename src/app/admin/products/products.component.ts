import { Component } from '@angular/core';
import {NzModalService} from "ng-zorro-antd/modal";
import {ProductEditComponent} from "../product-edit/product-edit.component";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products = [
    {id: 1, name:"温湿度传感器", password:"123456", created: new Date()},
    {id: 2, name:"氧气传感器", password:"123456", created: new Date()},
    {id: 3, name:"逆变器", password:"123456", created: new Date()},
  ]

  constructor(private ms: NzModalService){

  }

  create() {
    this.ms.create({
      nzTitle: "创建产品（物模型）",
      nzContent: ProductEditComponent
    })
  }
}
