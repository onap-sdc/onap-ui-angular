import { Component, Input, HostBinding } from '@angular/core';
import { template } from "./validation-message.component.html";

@Component({
    selector: 'sdc-validation-message',
    template: template
})
export class ValidationMessageComponent {

    @Input() disabled: boolean = false;
    @Input() message: string;
    @Input() testId: string;
    @HostBinding('class.sdc-validation') classes = true;

    constructor() { }

}
