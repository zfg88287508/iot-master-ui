import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { NzMessageService } from "ng-zorro-antd/message";

@Component({
  selector: 'app-project-edit-variables',
  templateUrl: './project-edit-variables.component.html',
  styleUrls: ['./project-edit-variables.component.scss']
})
export class ProjectEditVariablesComponent implements OnChanges {
  group!: any;
  @Input() data: any = {};
  constructor(
    private msg: NzMessageService,
    private fb: FormBuilder,
  ) { }
  ngOnChanges(changes: SimpleChanges): void {
    let currentValue = {};
    if (changes['data'] && changes['data'].currentValue) {
      currentValue = changes['data'].currentValue;
    }
    this.build(currentValue)
  }
  build(obj?: any) {
    obj = obj || {};
    this.group = this.fb.group({
      properties: this.fb.array(
        obj.properties ? obj.properties.map((prop: any) =>
          this.fb.group({
            label: [prop.label || '', []],
            name: [prop.name || '', []],
            type: [prop.type || 'int', []],
            unit: [prop.unit || '', []],
            mode: [prop.mode || 'rw', []],
          })
        ) : []
      ),
    })
  }
  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.group.get('properties').controls, event.previousIndex, event.currentIndex);
  }
  handleCopyProperTy(index: number) {
    const item = this.group.get('properties').controls[index];
    this.group.get('properties').controls.splice(index, 0, item);
    this.msg.success("复制成功");
  }
  propertyDel(i: number) {
    this.group.get('properties').controls.splice(i, 1)
  }
}
