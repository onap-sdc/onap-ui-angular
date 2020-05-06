import { storiesOf } from '@storybook/angular';
import { withKnobs, text, number, boolean, array, select, color, date, button, object } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { action, configureActions } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { RippleClickAnimationDirective } from '../../src/angular/utils/animations/ripple-click.animation.directive';
import { DropDownTypes, IDropDownOption, DropDownOptionType } from '../../src/angular/form-elements/dropdown/dropdown-models';
import { DropDownTriggerDirective } from '../../src/angular/form-elements/dropdown/dropdown-trigger.directive';
import {DropdownModule} from "../../src/angular/form-elements/dropdown/dropdown.module";
import {InputModule} from "../../src/angular/form-elements/text-elements/input/input.module";
import {CommonDirectiveModule} from "../../src/angular/utils/common-directive.module";

const dropdownTypes = Object.values(DropDownTypes);
const options1: IDropDownOption[] = [
    {
        label: 'First Option Label',
        value: 'firstOptionValue',
    },
    {
        label: 'Second Option Label',
        value: 'secondOptionValue',
    },
    {
        label: 'Third Option Label',
        value: 'thirdOptionValue',
        type: DropDownOptionType.Simple
    }
];
const options2: IDropDownOption[] = [
    {
        label: 'Header Label',
        value: 'headerValue',
        type: DropDownOptionType.Header
    },
    {
        label: 'First Option Label',
        value: 'firstOptionValue',
        type: DropDownOptionType.Simple
    },
    {
        label: 'Disabled Option Label',
        value: 'headerValue',
        type: DropDownOptionType.Disable
    },
    {
        label: 'Second Option Label',
        value: 'secondOptionValue',
        type: DropDownOptionType.Simple
    },
    {
        label: 'Ruler Label',
        value: 'rulerValue',
        type: DropDownOptionType.HorizontalLine
    },
    {
        label: 'Third Option Label',
        value: 'thirdOptionValue',
        type: DropDownOptionType.Simple
    },
    {
        label: 'Fourth Option Label',
        value: 'FourthOptionValue',
        type: DropDownOptionType.Simple
    },
    {
        label: 'Fifth Option Label',
        value: 'fifthOptionValue',
        type: DropDownOptionType.Simple
    },
    {
        label: 'Ruler Label',
        value: 'rulerValue',
        type: DropDownOptionType.HorizontalLine
    },
    {
        label: 'Third Option Label',
        value: 'thirdOptionValue',
        type: DropDownOptionType.Simple
    },
    {
        label: 'Fourth Option Label',
        value: 'FourthOptionValue',
        type: DropDownOptionType.Simple
    },
    {
        label: 'Fifth Option Label',
        value: 'fifthOptionValue',
        type: DropDownOptionType.Simple
    }
];

storiesOf('Form elements|Dropdown', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(
    moduleMetadata({
      declarations: [
      ],
      imports: [
        DropdownModule,
        InputModule,
        CommonDirectiveModule
      ]
    })
  )
  .add('All options', () => {
      const _label = text('label', 'Simple dropdown');
      const _placeHolder = text('placeHolder', 'Sample placeholder');
      const _disabled = boolean('disabled', false);
      const _options = object('options', options1);
      const _testId = text('testId', 'dropdown-test-id');
      const _required = boolean('required', false);
      const _size = number('size', 'medium');
      const _selectedOption = object('selectedOption', {});
      const _onChange = text('*(onChange)', 'Event throws when dropdown changed, see in Action logger tab.');

      return {
        props: {
            onChange: action('Dropdown value changed '),
            _label, _placeHolder, _disabled, _required, _testId, _options, _size, _selectedOption
        },
        template: `
        <sdc-dropdown 
            [label]="_label" 
            [placeHolder]="_placeHolder"
            [disabled]="_disabled"
            [required]="_required"
            [size]="_size"
            [options]="_options" 
            [selectedOption]="_selectedOption"
            [testId]="_testId"
            (changed)="onChange($event)"
            >
        </sdc-dropdown>
        `
      }
    },
    { notes: `<h2>Checkbox</h2>
            Full example of checkbox.
            Use the KNOBS tab to change values.`
    }
)
.add('With groups', () => {
    const _label = text('label', 'Simple dropdown');
    const _placeHolder = text('placeHolder', 'Sample placeholder');
    const _disabled = boolean('disabled', false);
    const _options = object('options', options2);
    const _testId = text('testId', 'dropdown-test-id');
    const _required = boolean('required', false);
    const _size = number('size', 20);
    const _selectedOption = object('selectedOption', {});
    const _onChange = text('*(onChange)', 'Event throws when dropdown changed, see in Action logger tab.');

    return {
      props: {
          onChange: action('Dropdown value changed '),
          _label, _placeHolder, _disabled, _required, _testId, _options, _size, _selectedOption
      },
      template: `
      <sdc-dropdown 
          [label]="_label" 
          [placeHolder]="_placeHolder"
          [disabled]="_disabled"
          [required]="_required"
          [size]="_size"
          [options]="_options" 
          [selectedOption]="_selectedOption"
          (changed)="onChange($event)"
          >
      </sdc-dropdown>
      `
    }
  },
  { notes: `<h2>Checkbox</h2>
          Full example of checkbox with groups.
          Use the KNOBS tab to change values.`
  }
)
.add('Pre selected', () => {
    const _label = text('label', 'Simple dropdown');
    const _placeHolder = text('placeHolder', 'Sample placeholder');
    const _disabled = boolean('disabled', false);
    const _options2 = array('options', ['option1', 'opt2', 'opt3']);
    // const _options = object('options', options2);
    const _testId = text('testId', 'dropdown-test-id');
    const _required = boolean('required', false);
    const _size = number('size', 20);
    const _selectedOption = object('selectedOption', { label: 'Second Option Label', value: 'secondOptionValue'});
    const _onChange = text('*(onChange)', 'Event throws when dropdown changed, see in Action logger tab.');

    return {
      props: {
          onChange: action('Dropdown value changed '),
          _label, _placeHolder, _disabled, _required, _testId, _options2, _size, _selectedOption
      },
      template: `
      <sdc-dropdown 
          [label]="_label" 
          [placeHolder]="_placeHolder"
          [disabled]="_disabled"
          [required]="_required"
          [size]="_size"
          [options]="_options2" 
          [selectedOption]="_selectedOption"
          (changed)="onChange($event)"
          >
      </sdc-dropdown>
      `
    }
  },
  { notes: `<h2>Checkbox</h2>
          Full example of checkbox with groups pre selected option.
          Use the KNOBS tab to change values.`
  }
)
