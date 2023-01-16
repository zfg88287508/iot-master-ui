import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-device-edit',
  templateUrl: './device-edit.component.html',
  styleUrls: ['./device-edit.component.scss']
})
export class DeviceEditComponent implements OnInit{
  group: any = {};

  constructor(private fb: FormBuilder) {
  }


  ngOnInit(): void {
    this.group = this.fb.group({
      name: [null, [Validators.required]],
      product: [null, []],
    })
  }

  submit() {

  }

}
