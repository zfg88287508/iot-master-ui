import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ToolbarComponent} from './toolbar/toolbar.component';
import {SearchBoxComponent} from './search-box/search-box.component';
import {NzInputModule} from "ng-zorro-antd/input";
import {NzButtonModule} from "ng-zorro-antd/button";
import {FormsModule} from "@angular/forms";
import {DatePipe} from "./date.pipe";


@NgModule({
  declarations: [
    DatePipe,
    PageNotFoundComponent,
    ToolbarComponent,
    SearchBoxComponent,
  ],
  exports: [
    DatePipe,
    PageNotFoundComponent,
    ToolbarComponent,
    SearchBoxComponent,
  ],
  imports: [
    CommonModule,
    NzInputModule,
    NzButtonModule,
    FormsModule,
  ],
  providers: [

  ]
})
export class BaseModule {
}
