import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { template } from "./number-input.component.html";
import { BaseTextElementComponent } from "../base-text-element.component";
import 'rxjs/add/operator/debounceTime';
import {RegexPatterns} from "../../../common/enums";
import {isFirefox, isIEOrEdge} from "../../../utils/browser-utils";

@Component({
    selector: 'sdc-number-input',
    template: template,
})
export class NumberInputComponent extends BaseTextElementComponent {
    @Input() public maxValue:number;
    @Input() public minValue: number;
    @Input() public step: number = 1;



    constructor() {
        super();
    }

    public clickUp = () => {
        this.value = this.validateValue(Number(this.value) + this.step);
        this.onKeyPress();
    }

    public clickDown = () => {
        this.value = this.validateValue(Number(this.value) - this.step);
        this.onKeyPress();
    }

    private validateValue = (newValue: number):number => {
        if(this.validateMax(newValue) || this.validateMin(newValue)) {
            return this.value;
        } else {
            return newValue;
        }
    }

    public validateMax(newValue) {
        if(this.maxValue && newValue > this.maxValue){
            this.value = this.maxValue;
            return true;
        }
    }

    public validateMin(newValue) {
        if(this.minValue && newValue < this.minValue) {
            this.value = this.minValue;
            return true;
        }
    }

    public onKeyPress(){
        if (this.value) {
          this.value = Number(this.value);
        }
        this.valueChanged(this.value);
    }

    onKeyDown(e: KeyboardEvent) {
        this.handleLegacyBrowsersKeyboardEvent(e);
    }

    private handleLegacyBrowsersKeyboardEvent(e: KeyboardEvent) {
        switch (e.keyCode) {
            case 37: // left arrow button
            case 39: // right arrow button
            case 8: // backspace button
            case 13: // enter / return button
                break;
            case 38: // up arrow button
                if (isIEOrEdge) this.value++;
                break;
            case 40: // down arrow button
                if (isIEOrEdge) this.value--;
                break;
            default:
                this.preventNonNumericValuesOnLegacyBrowsers(e);
                break;
        }
    }

    private preventNonNumericValuesOnLegacyBrowsers(e: KeyboardEvent) {
        if ((isIEOrEdge && !e.char.match(RegexPatterns.numbers)) ||
            (isFirefox && !e.key.match(RegexPatterns.numbers))) {
            e.preventDefault();
        }
    }

}
