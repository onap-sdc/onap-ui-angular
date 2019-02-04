import { Input, Component } from "@angular/core";
import { ValidatorComponent } from "./base.validator.component";
import { IValidator } from './validator.interface';
import { template } from "./base.validator.component.html";

@Component({
    selector: 'sdc-length-validator',
    template: template
})
export class LengthValidatorComponent extends ValidatorComponent implements IValidator {

    @Input() public minLength?: number;
    @Input() public maxLength?: number;


    constructor() {
        super();
    }

    public validate(value: any): boolean {
        if(this.minLength){
            this.isValid = value && value.toString().length >= this.minLength;
            return this.isValid;
        }
        if(this.maxLength){
            this.isValid = !value || value.toString().length <= this.maxLength;
            return this.isValid;
        }
    }

}
