import { Component } from "@angular/core";
import { template } from './textarea.component.html';
import { BaseTextElementComponent } from "../base-text-element.component";

@Component({
    selector: 'sdc-textarea',
    template: template,
})

export class TextareaComponent extends BaseTextElementComponent {
    constructor() {
        super();
    }
}
