import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {RequestService} from "../../request.service";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-subset-edit',
  templateUrl: './subset-edit.component.html',
  styleUrls: ['./subset-edit.component.scss']
})
export class SubsetEditComponent implements OnInit {
  group: any = {};
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
      this.rs.get(`subset/${this.id}`).subscribe(res => {
        //let data = res.data;
        this.build(res.data)
      })

    }

    this.build()
  }

  build(obj?: any) {
    obj = obj || {}
    this.group = this.fb.group({
      gateway_id: [obj.gateway_id || '', []],
      model_id: [obj.model_id || '', []],
      name: [obj.name || '', []],
      desc: [obj.desc || '', []],
    })
  }

  submit() {
    let url = this.id ? `subset/${this.id}` : `subset/create`
    this.rs.post(url, this.group.value).subscribe(res => {
      this.router.navigateByUrl("subset/subsets")
      this.msg.success("保存成功")
    })

  }
}
