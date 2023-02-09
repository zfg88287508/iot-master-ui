import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {RequestService} from "../../request.service";

@Component({
  selector: 'app-servers-edit',
  templateUrl: './server-edit.component.html',
  styleUrls: ['./server-edit.component.scss']
})
export class ServerEditComponent {
  group: any = {};
  id: any = 0

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private rs: RequestService) {
  }


  ngOnInit(): void {
    if (this.route.snapshot.paramMap.has("id")) {
      this.id = this.route.snapshot.paramMap.get("id");
      this.rs.get(`server/${this.id}`).subscribe(res=>{
        //let data = res.data;
        this.build(res.data)
      })

    }

    this.build()
  }

  build(obj?: any) {
    obj = obj || {}
    this.group = this.fb.group({
      name: [obj.name || '', [Validators.required]],
      desc: [obj.desc || '', []],
      port: [obj.port || 1883, []],
    })
  }

  submit() {

  }
}
