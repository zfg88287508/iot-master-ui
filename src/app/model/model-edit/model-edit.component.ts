import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {RequestService} from "../../request.service";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-models-edit',
  templateUrl: './model-edit.component.html',
  styleUrls: ['./model-edit.component.scss']
})
export class ModelEditComponent implements OnInit {
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
      this.rs.get(`model/${this.id}`).subscribe(res => {
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
      name: [obj.name || '', []],
      desc: [obj.desc || '', []],
      version: [obj.version || '', []],
      properties: this.fb.array(
        obj.properties ? obj.properties.map((prop: any) =>
          this.fb.group({
            id: [prop.id || '', []],
            name: [prop.name || '', []],
            type: [prop.type || 'int', []],
            unit: [prop.unit || '', []],
            mode: [prop.mode || 'rw', []],

          })
        ) : []
      )
    })
  }

  submit() {
    let url = this.id ? `model/${this.id}` : `model/create`
    this.rs.post(url, this.group.value).subscribe(res => {
      this.router.navigateByUrl("model/models")
      this.msg.success("保存成功")
    })

  }

  propertyAdd($event: any) {
    $event.stopPropagation()
    this.group.get('properties').push(
      this.fb.group({
        id: ['', []],
        name: ['', []],
        type: ['int', []],
        unit: ['', []],
        mode: ['rw', []],

      })
    )
  }
}
