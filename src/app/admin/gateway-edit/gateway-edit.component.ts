import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-gateways-edit',
  templateUrl: './gateway-edit.component.html',
  styleUrls: ['./gateway-edit.component.scss']
})
export class GatewayEditComponent implements OnInit{
  group: any = {};

  constructor(private fb: FormBuilder) {
  }


  ngOnInit(): void {
    this.group = this.fb.group({
      name: [null, [Validators.required]],
      username: [null, []],
      password: [null, []],
    })
  }

  submit() {

  }

}
