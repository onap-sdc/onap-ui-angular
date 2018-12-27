import {Component, Input, Output, EventEmitter, HostBinding, AfterViewInit} from '@angular/core';

export class FileObject {
  filesize: string;
  filetype: string;
  filename: string;
  base64: string;
}

@Component({
  selector: "onap-file-opener",
  template: `<input class="file-opener-input"
                    type="file"
                    [attr.data-tests-id]="'file' + testId"
                    [accept]="allowedExtensions"
                    [disabled]="disabled"
                    (change)="onFileSelect($event)"
  />`,
  styleUrls: ['./file-opener.component.scss']
})
export class FileOpenerComponent implements AfterViewInit {

  @Input() public extensions: string;
  @Input() public disabled: boolean;
  @Input() public testId: boolean;
  @Output() public fileUpload: EventEmitter<any>;
  @HostBinding('class.file-opener') true;

  public allowedExtensions: string;
  private fileObject: FileObject;

  constructor() {
    this.fileUpload = new EventEmitter<any>();
    this.fileObject = new FileObject();
  }

  ngAfterViewInit(): void {
    this.allowedExtensions = this.extensions && this.extensions.split(',').map(x => '.' + x).join(',');
  }

  public onFileSelect(e): void {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var reader = new FileReader();
    this.fileObject.filesize = file.size;
    this.fileObject.filetype = file.type;
    this.fileObject.filename = file.name;
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  private _handleReaderLoaded(e) {
    let base64 = e.target.result;
    this.fileObject.base64 = base64.split('base64,')[1];
    this.fileUpload.emit(this.fileObject);
  }
}
