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
    template: template,
    styles: [`
        input[type=file] {
            display: none;
        }
    `]
})
export class ButtonFileOpenerComponent extends ButtonComponent implements AfterViewInit {

    @Input() public extensions: string;
    @Output() public fileUpload: EventEmitter<any>;
    @HostBinding('class.sdc-button__wrapper') true;

    public allowedExtensions: string;
    private fileObject: FileObject;

    constructor() {
        super();
        this.fileUpload = new EventEmitter<any>();
        this.fileObject = new FileObject();
    }

    ngAfterViewInit() : void {
        this.allowedExtensions = this.extensions && this.extensions.split(',').map(x => '.' + x).join(',');
    }

    public onFileSelectaa(event): void {
        let file = event.srcElement.files[0];
        debugger
        this.fileUpload.emit({file: file});
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
