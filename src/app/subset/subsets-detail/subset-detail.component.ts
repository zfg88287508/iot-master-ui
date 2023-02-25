import {Component} from '@angular/core';
import {RequestService} from "../../request.service";
import {ActivatedRoute, RouterState} from "@angular/router";

@Component({
  selector: 'app-subset-detail',
  templateUrl: './subset-detail.component.html',
  styleUrls: ['./subset-detail.component.scss']
})
export class SubsetDetailComponent {
  id: any = ''
  device: any = {}
  product: any = {}
  model: any = {}

  properties: any = {}

  constructor(private rs: RequestService, private route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('id')
    this.load()
  }

  load() {
    this.rs.get(`subset/${this.id}`).subscribe(res => {
      this.device = res.data;
      this.rs.get(`product/${this.device.product_id}`).subscribe(res => {
        this.product = res.data;
        this.rs.get(`model/${this.product.model_id}`).subscribe(res => {
          this.model = res.data;
        })
      })
    })

    this.rs.get(`subset/${this.id}/properties`).subscribe(res => {
      this.properties = res.data;
    })

  }

}
