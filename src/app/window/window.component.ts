import {Component, Input} from '@angular/core';
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent {
  _url!: SafeUrl;

  @Input()
  set url(u: any){
    this._url = this.san.bypassSecurityTrustResourceUrl(u)
  }

  constructor(private san: DomSanitizer) {
    //this._url = san.bypassSecurityTrustResourceUrl("http://image.baidu.com")
  }
}
