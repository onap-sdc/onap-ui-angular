import { storiesOf } from '@storybook/angular';
import { withKnobs, text, number, boolean, array, select, color, date, button } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { action, configureActions } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { CheckboxComponent, InputComponent } from '../../src/angular/components';
import { RippleClickAnimationDirective } from '../../src/angular/animations/ripple-click.animation.directive';
import { FormElementsModule } from '../../src/angular/form-elements/form-elements.module';

storiesOf('Form elements|Input', module)
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
  .add('Simple', () => {
    const _label = text('label', 'Please Enter value');
    const _name = text('name', 'InputName');
    const _testId = text('testId', 'sample-test-id');

      return {
        props: {
            checkedChange: action('Checkbox value changed '),
            _label, _name, _testId
        },
        template: `
        <sdc-input 
            [label]="_label" 
            [name]="_name" 
            [testId]="_testId"
            >
        </sdc-input>
        `
      }
    },
    { notes: `<h2>Simple Input</h2>
            Simple input example.
            Use the KNOBS tab to change values.`
    }
)
.add('With debounce', () => {
    const _label = text('label', 'Please Enter value');
    const _name = text('name', 'InputName');
    const _testId = text('testId', 'sample-test-id');
    const _debounceTime = number('debounceTime', 1000);
    const _valueChange = text('*(valueChange)', 'Throws event when value changed.');

      return {
        props: {
            onValueChanged: action('Input value changed '),
            _label, _name, _testId, _debounceTime
        },
        template: `
        <sdc-input 
            [label]="_label" 
            [name]="_name" 
            [testId]="_testId"
            [debounceTime]="_debounceTime"
            (valueChange)=onValueChanged($event);
            >
        </sdc-input>
        `
      }
    },
    { notes: `<h2>Input with debounce</h2>
            Wait for 1000 miliseconds for value changed event .
            Use the KNOBS tab to change values.`
    }
)
.add('Full options', () => {
    const _label = text('label', 'Please Enter value');
    const _name = text('name', 'InputName');
    const _placeHolder = text('placeHolder', 'Input placeHolder');
    const _value = text('value', 'Some value');
    const _type = select('type', ['text', 'number', 'email']);
    const _disabled = boolean('disabled', false);
    const _required = boolean('required', false);
    const _testId = text('testId', 'sample-test-id');
    const _debounceTime = number('debounceTime', 1000);
    const _minLength = number('minLength', 4);
    const _maxLength = number('maxLength', 10);
    const _classNames = text('classNames', 'custom-input-class');
    const _valueChange = text('*(valueChange)', 'Throws event when value changed.');

    return {
        props: {
            onValueChanged: action('Input value changed '),
            _label, _name, _value, _testId, _debounceTime, _type, _disabled, _placeHolder, _required, _maxLength, _minLength, _classNames
        },
        template: `
        <sdc-input 
            [label]="_label" 
            [name]="_name" 
            [placeHolder]="_placeHolder"
            [type]="_type"
            [value]="_value"
            [disabled]="_disabled"
            [required]="_required"
            [testId]="_testId"
            [minLength]="_minLength"
            [maxLength]="_maxLength"
            [debounceTime]="_debounceTime"
            [classNames]="_classNames"
            (valueChange)=onValueChanged($event);
            >
        </sdc-input>
        `
      }
    },
    { notes: `<h2>Input with debounce</h2>
            Wait for 1000 miliseconds for value changed event .
            Use the KNOBS tab to change values.`
    }
)
