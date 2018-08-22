import { storiesOf } from '@storybook/angular';
import { withKnobs, text, number, boolean, array, select, color, date, button } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { action, configureActions } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { CheckboxComponent, ChecklistComponent } from '../../src/angular/components';
import { RippleClickAnimationDirective } from '../../src/angular/animations/ripple-click.animation.directive';
import { ChecklistModel } from '../../src/angular/checklist/models/Checklist';
import { ChecklistItemModel } from '../../src/angular/checklist/models/ChecklistItem';

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
        CheckboxComponent,
        RippleClickAnimationDirective,
        ChecklistComponent
      ],
      imports: [
      ]
    })
  )
  .add('Simple checklist', () => {
        const _checkedChange = text('*(checkedChange)', 'Event throws when checklist changed, see in Action logger tab.');
        const _testId = text('testId', 'check-list-test-id');

      return {
        props: {
            checkedChange: action('Checklist changed '),
            _testId, checkListModelExample
        },
        template: `
        <sdc-checklist 
                [checklistModel]="checkListModelExample"
                [testId]="_testId"
                (checkedChange)="checkedChange($event)">
            </sdc-checklist>
        `
      }
    },
    { notes: `<h2>Checkbox</h2>
    Full example of checklist.
            Use the KNOBS tab to change values.`
    }
)
