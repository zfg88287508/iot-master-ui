import { Component } from '@angular/core';
import { RequestService } from "../../request.service";
import { ActivatedRoute, RouterState, Router } from "@angular/router";
import { isIncludeAdmin } from "../../../public";
import { IMqttMessage, MqttService } from 'ngx-mqtt';

@Component({
  selector: 'app-product-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.scss']
})
export class DeviceDetailComponent {
  id: any = ''
  device: any = {}
  product: any = {}

  values: any = {}

  constructor(
    private rs: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    private mqttService: MqttService
  ) {
    this.id = route.snapshot.paramMap.get('id')
    this.load()
  }

  load() {
    this.rs.get(`device/${this.id}`).subscribe(res => {
      this.device = res.data;
      this.rs.get(`product/${this.device.product_id}`).subscribe(res => {
        this.product = res.data;
        this.mqttService.observe(`up/property/${this.device.product_id}/${this.id}`).subscribe((message: IMqttMessage) => {
          const property = message.payload.toString();
          this.values = property;
        });
      })
    })

    this.rs.get(`device/${this.id}/values`).subscribe(res => {
      this.values = res.data;
    })

  }
  handleReturn() {
    const path = `${isIncludeAdmin()}/device/list`;
    this.router.navigateByUrl(path);
  }
}
