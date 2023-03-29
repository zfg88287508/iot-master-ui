import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { NzMessageService } from "ng-zorro-antd/message";

@Component({
  selector: 'app-project-edit-variables',
  templateUrl: './project-edit-variables.component.html',
  styleUrls: ['./project-edit-variables.component.scss']
})
export class ProjectEditVariablesComponent implements OnChanges {
  @Input() group: any;
  constructor(
    private msg: NzMessageService
  ) { }
  ngOnChanges() {
    console.log(this.group)
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
