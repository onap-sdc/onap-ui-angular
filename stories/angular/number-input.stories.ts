import { storiesOf } from '@storybook/angular';
import { withKnobs, text, number, boolean, array, select, color, date, button } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { action, configureActions } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { CheckboxComponent, InputComponent } from '../../src/angular/components';
import { RippleClickAnimationDirective } from '../../src/angular/utils/animations/ripple-click.animation.directive';
import { FormElementsModule } from '../../src/angular/form-elements/form-elements.module';

storiesOf('Form elements|Number Input', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(
    moduleMetadata({
      declarations: [
      ],
      imports: [
          FormElementsModule
      ]
    })
  )
.add('Full options', () => {
    const _label = text('label', 'Please Enter value');
    const _name = text('name', 'NumberInputName');
    const _placeHolder = text('placeHolder', 'Please enter a number between 4 and 100');
    const _value = number('value', 5);
    const _disabled = boolean('disabled', false);
    const _required = boolean('required', false);
    const _testId = text('testId', 'input-test-id');
    const _debounceTime = number('debounceTime', 1000);
    const _minValue = number('minValue', 4);
    const _maxValue = number('maxValue', 100);
    const _step = number('step', 1);
    const _classNames = text('classNames', 'custom-input-class');
    const _valueChange = text('*(valueChange)', 'Throws event when value changed.');

    return {
        props: {
            onValueChanged: action('Input value changed '),
            _label, _name, _value, _testId, _debounceTime, _disabled, _placeHolder, _required, _minValue, _maxValue, _step, _classNames
        },
        template: `
        <sdc-number-input 
            [label]="_label" 
            [name]="_name" 
            [placeHolder]="_placeHolder"
            [value]="_value"
            [disabled]="_disabled"
            [required]="_required"
            [testId]="_testId"
            [minValue]="_minValue"
            [maxValue]="_maxValue"
            [step]="_step"
            [debounceTime]="_debounceTime"
            [classNames]="_classNames"
            (valueChange)=onValueChanged($event);
            >
        </sdc-number-input>
        `
      }
    },
    { notes: `<h2>Input with debounce</h2>
            Wait for 1000 miliseconds for value changed event .
            Use the KNOBS tab to change values.
            <h2>Min/Max Value</h2>
            This limits the values via input or the spinner buttons, without warning the user.`
    }
)
