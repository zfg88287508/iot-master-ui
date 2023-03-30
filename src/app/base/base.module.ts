import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { NzInputModule } from "ng-zorro-antd/input";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { FormsModule } from "@angular/forms";
import { DatePipe } from "./date.pipe";
import { CustomPaginationComponent } from './custom-pagination/custom-pagination.component';


@NgModule({
  declarations: [
    DatePipe,
    PageNotFoundComponent,
    ToolbarComponent,
    SearchBoxComponent,
    CustomPaginationComponent,
  ],
  exports: [
    DatePipe,
    PageNotFoundComponent,
    ToolbarComponent,
    SearchBoxComponent,
    CustomPaginationComponent
  ],
  imports: [
    CommonModule,
    NzInputModule,
    NzButtonModule,
    NzPaginationModule,
    FormsModule,
  ],
  providers: [

  ]
})
export class BaseModule {
}
