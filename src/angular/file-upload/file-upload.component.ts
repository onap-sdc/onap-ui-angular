import {Component, Input, Output, EventEmitter} from "@angular/core";
import {fileUploadTemplate} from "./file-upload.component.html";
import {BaseTextElementComponent} from "../form-elements/text-elements/base-text-element.component";

@Component({
  selector: "onap-file-upload",
  template: fileUploadTemplate
})

export class FileUploadComponent extends BaseTextElementComponent {

  @Input() public extensions: string;

  @Output() public fileUpload: EventEmitter<any> = new EventEmitter<any>();

  public fileUploaded = (file) => {
    this.value = file.filename;
    this.fileUpload.emit(file);
  }

  public onClear = () => {
    this.value = undefined;
    this.fileUpload.emit(null);
  }
}
