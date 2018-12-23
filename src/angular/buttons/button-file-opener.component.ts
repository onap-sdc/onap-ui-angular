import { Component, Input, Output, EventEmitter, HostBinding, ViewChild, AfterViewInit } from '@angular/core';
import { ButtonComponent } from './button.component';
import { template } from "./button-file-opener.component.html";

export class FileObject {
    filesize: string;
    filetype: string;
    filename: string;
    base64: string;
}

@Component({
    selector: "sdc-button-file-opener",
    template: template
})
export class ButtonFileOpenerComponent extends ButtonComponent  {

    @Input() public extensions: string;
    @Output() public fileUpload: EventEmitter<any> = new EventEmitter<any>();
    @HostBinding('class.sdc-button-file-opener') true;



  public fileUploaded = (file) => {
    this.fileUpload.emit(file);
  }
}
