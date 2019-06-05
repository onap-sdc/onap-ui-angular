import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { template } from "./number-input.component.html";
import { BaseTextElementComponent } from "../base-text-element.component";
import 'rxjs/add/operator/debounceTime';

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
        this.value = Number(this.value);
        this.valueChanged(this.value);
    }

}
