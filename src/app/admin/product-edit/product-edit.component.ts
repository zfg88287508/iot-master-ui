import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit{
  group: any = {};

  constructor(private fb: FormBuilder) {
  }


  ngOnInit(): void {
    this.group = this.fb.group({
      name: [null, [Validators.required]],
      version: [null, []],
    })
  }

  submit() {

  }

}
