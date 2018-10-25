import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { template } from "./input.component.html";
import { BaseTextElementComponent } from "../base-text-element.component";
import 'rxjs/add/operator/debounceTime';

@Component({
    selector: 'sdc-input',
    template: template,
})
export class InputComponent extends BaseTextElementComponent {
    @Input() public type: string;

    // This is if the we need to put an icon iside the input
    @Input() public righIconName:string;
    @Input() public isIconClickable: boolean;
    @Output() onRighIconClicked:EventEmitter<any> = new EventEmitter<any>();

    constructor() {
        super();
        this.type = 'text';
    }

    public onIconClicked = () =>{
          this.onRighIconClicked.emit()
    }

}
