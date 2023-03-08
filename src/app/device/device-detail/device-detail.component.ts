import {Component} from '@angular/core';
import {RequestService} from "../../request.service";
import {ActivatedRoute, RouterState} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.scss']
})
export class DeviceDetailComponent {
  id: any = ''
  device: any = {}
  product: any = {}

  properties: any = {}

  constructor(private rs: RequestService, private route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('id')
    this.load()
  }

  load() {
    this.rs.get(`device/${this.id}`).subscribe(res => {
      this.device = res.data;
      this.rs.get(`product/${this.device.product_id}`).subscribe(res => {
        this.product = res.data;
      })
    })

    this.rs.get(`device/${this.id}/properties`).subscribe(res => {
      this.properties = res.data;
    })

  }

}
