import { Component, Input, Output, EventEmitter, ViewEncapsulation, HostBinding } from '@angular/core';
import { template } from "./checkbox.component.html";

@Component({
    selector: 'sdc-checkbox',
    template: template,
    encapsulation: ViewEncapsulation.None
})
export class CheckboxComponent {
    @Input() label:string;
    @Input() checked:boolean;
    @Input() disabled:boolean;
    @Input() testId: string;
    @Output() checkedChange:EventEmitter<any> = new EventEmitter<any>();
    @HostBinding('class.sdc-checkbox') true;

    public toggleState(newState:boolean) {
        if (!this.disabled) {
            this.checked = newState;
            this.checkedChange.emit(newState);
        }
    }
}
