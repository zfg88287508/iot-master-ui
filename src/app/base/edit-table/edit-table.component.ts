import { Component, OnInit, Input, EventEmitter, forwardRef, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormArray, ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { NzMessageService } from "ng-zorro-antd/message";
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EditTableComponent),
      multi: true
    }
  ]
})
export class EditTableComponent implements OnInit, ControlValueAccessor {
  group!: any;
  itemObj: object = {};
  constListData: any = [];
  tableData: Array<object> = [];
  onChanged: any = () => { }
  onTouched: any = () => { }

  @Input() data: any = {};
  @Input()
  set listData(dt: Array<{ title: string, type?: any, keyName: string }>) {
    const itemObj: any = {};
    for (let index = 0; index < dt.length; index++) {
      const { keyName } = dt[index];
      itemObj[keyName] = '';
    }
    this.itemObj = itemObj;
    this.constListData = dt;
  };
  constructor(
    private msg: NzMessageService,
    private fb: FormBuilder
  ) { }
  ngOnInit(): void {
    this.build([]);
  }
  writeValue(data: any): void {
    this.tableData = data;
    this.build(data);
  }
  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  build(obj?: any) {
    const itemObj = JSON.parse(JSON.stringify(this.itemObj));
    obj = obj || [];
    this.group = this.fb.group({
      properties: this.fb.array(
        obj ? obj.map((prop: any) =>
          this.fb.group(Object.assign(itemObj, prop))
        ) : []
      ),
    })

  }
  change() {
    this.onChanged(this.tableData);
    this.onTouched();
  }
  handleCopyProperTy(index: number) {
    const oitem = this.group.get('properties').controls[index].value;
    this.aliases.insert(index, this.fb.group(oitem));
    this.msg.success("复制成功");
  }
  propertyDel(i: number) {
    this.group.get('properties').controls.splice(i, 1)
  }
  get aliases() {
    return this.group.get('properties') as FormArray;
  }
  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.group.get('properties').controls, event.previousIndex, event.currentIndex);
  }
}