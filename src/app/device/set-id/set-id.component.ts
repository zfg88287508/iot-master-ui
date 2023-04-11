import { Component, Input, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ProductsComponent } from '../../product/products/products.component';
import { GroupComponent } from '../group/group.component';
import { RequestService } from 'src/app/request.service';
@Component({
  selector: 'app-set-id',
  templateUrl: './set-id.component.html',
  styleUrls: ['./set-id.component.scss'],
})
export class SetIdComponent {
  IdObj = {
    product_id: '',
    group_id: 0,
  };
  group_id = '';
  datum: any[] = [];
  listOfOption: any[] = [];
  constructor(private ms: NzModalService, private rs: RequestService) {
    this.postGroup();
  }

  postGroup() {
    this.rs
      .post('device/group/search', {})
      .subscribe((res) => {
        this.datum = res.data || [];
        this.datum.filter((item) =>
          this.listOfOption.push({ label: item.name, value: item.id })
        );
      })
      .add(() => {});
  }
  chooseProduct() {
    this.ms
      .create({
        nzTitle: '选择产品',
        nzWidth: '700px',
        nzContent: ProductsComponent,
        nzComponentParams: {
          showAddBtn: false,
        },
        nzFooter: null,
      })
      .afterClose.subscribe((product_id) => {
        this.IdObj.product_id = product_id;
      });
  }
  chooseGroup() {
    this.IdObj.group_id = Number(this.group_id);
  }
  // chooseGroup() {
  //   this.ms.create({
  //     nzTitle: "选择分组",
  //     nzContent: GroupComponent,
  //     nzComponentParams: {
  //       choose: true,
  //       showAddBtn: false
  //     },
  //     nzFooter: null
  //   }).afterClose.subscribe(group_id => {
  //     if (group_id) {
  //       this.IdObj.group_id = group_id;
  //     }
  //   })
  // }
}
