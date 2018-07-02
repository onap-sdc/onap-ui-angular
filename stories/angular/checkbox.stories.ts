import { storiesOf } from '@storybook/angular';
import { withKnobs, text, number, boolean, array, select, color, date, button } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { action, configureActions } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { CheckboxComponent } from '../../src/angular/components';
import { RippleClickAnimationDirective } from '../../src/angular/animations/ripple-click.animation.directive';

storiesOf('Form elements|Checkbox', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(
    moduleMetadata({
      declarations: [
        CheckboxComponent,
        RippleClickAnimationDirective
      ],
      imports: [
      ]
    })
  )
  .add('Simple checkbox', () => {
      const _label = text('label', 'Simple checkbox');
      const _checked = boolean('checked', false);
      const _disabled = boolean('disabled', false);
      const _testId = text('testId', 'smalpe-test-id');
      const _checkedChange = text('*(checkedChange)', 'Event throws when checked changed, see in Action logger tab.');

      return {
        props: {
            checkedChange: action('Checkbox value changed '),
            _label, _checked, _disabled, _testId
        },
        template: `
        <sdc-checkbox 
            [label]="_label"
            [checked]="_checked"
            [disabled]="_disabled"
            [testId]="_testId"
            (checkedChange)="checkedChange($event)"
            >
        </sdc-checkbox>
        `
      }
    },
    { notes: `<h2>Checkbox</h2>
            Full example of checkbox.
            Use the KNOBS tab to change values.`
    }
)
