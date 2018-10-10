import { Subject } from 'rxjs/Subject';
import { IValidatableComponent } from './validatable.interface';

export abstract class ValidatableComponent implements IValidatableComponent {

    // Each ValidatableComponent should handle the style in case of error, according to this boolean
    public valid: boolean;
    public dirty: boolean;
    public validationActive: boolean;

    // Each ValidatableComponent will notify when the value is changed.
    public notifier: Subject<string>;

    constructor() {
        this.notifier = new Subject();
        this.dirty = false;
        this.validationActive = false;   //This flag will be set to true by the ValidationComponent if validation should be applied
    }

    public abstract getValue(): any;

    // Each ValidatableComponent should call the valueChanged on value changed function.
    protected valueChanged = (value: any): void => {

      //If validation on this component is activated by the ValidationComponent - do the validation
      if (this.validationActive) {
        this.dirty = true;
        this.notifier.next(value);
      }

    }

}
