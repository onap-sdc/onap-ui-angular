import { storiesOf } from '@storybook/angular';
import { withKnobs, text, number, boolean, array, select, color, date, button, object } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { action, configureActions } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { ChecklistComponent, CheckboxComponent } from '../../src/angular/components';
import { ChecklistModel, ChecklistItemModel } from '../../src/angular/common';
import { RippleAnimationAction } from '../../src/angular/animations/ripple-click.animation.directive';

const checkListModelExample: ChecklistModel =  new ChecklistModel([],[
  new ChecklistItemModel('apple'),
  new ChecklistItemModel('banana'),
  new ChecklistItemModel('orange')
]);

storiesOf('Form elements|Checklist', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(
    moduleMetadata({
      declarations: [
        ChecklistComponent,
        RippleAnimationAction,
        CheckboxComponent
      ],
      imports: [
      ]
    })
  )
  .add('Simple checklist', () => {
      //const _checklistModel = object('checklistModel', checkListModelExample);
      const _checkedChange = text('*(checkedChange)', 'Event throws when checklist changed, see in Action logger tab.');

      return {
        props: {
            checkedChange: action('Checklist changed '),
            checkListModelExample
        },
        template: `
        <sdc-checklist 
          [checklistModel]="checkListModelExample">
          (checkedChange)="checkedChange($event)"
        </sdc-checklist>
        `
      }
    },
    { notes: `<h2>Checklist</h2>
            Full example of checklist.
            Use the KNOBS tab to change values.`
    }
)
