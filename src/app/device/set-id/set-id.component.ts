import { Component, Input } from '@angular/core';
import { NzModalService } from "ng-zorro-antd/modal";
import { ProductsComponent } from "../../product/products/products.component";
import { GroupComponent } from "../group/group.component";

@Component({
  selector: 'app-set-id',
  templateUrl: './set-id.component.html',
  styleUrls: ['./set-id.component.scss']
})
export class SetIdComponent {
  IdObj = {
    product_id: '',
    group_id: ''
  }
  constructor(
    private ms: NzModalService,

  ) { }

  chooseProduct() {
    this.ms.create({
      nzTitle: "选择产品",
      nzContent: ProductsComponent,
      nzComponentParams: {
        showAddBtn: false
      },
      nzFooter: null
    }).afterClose.subscribe(product_id => {
      this.IdObj.product_id = product_id;
    })
  }

  chooseGroup() {
    this.ms.create({
      nzTitle: "选择分组",
      nzContent: GroupComponent,
      nzComponentParams: {
        choose: true,
        showAddBtn: false
      },
      nzFooter: null
    }).afterClose.subscribe(group_id => {
      if (group_id) {
        this.IdObj.group_id = group_id;
      }
    })
  }
}