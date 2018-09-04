import { storiesOf } from '@storybook/angular';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { CheckboxComponent, ChecklistComponent } from '../../src/angular/components';
import { RippleClickAnimationDirective } from '../../src/angular/animations/ripple-click.animation.directive';
import { ChecklistModel } from '../../src/angular/checklist/models/Checklist';
import { ChecklistItemModel } from '../../src/angular/checklist/models/ChecklistItem';
import { FormElementsModule } from '../../src/angular/form-elements/form-elements.module';

const simpleCheckListModelExample: ChecklistModel =  new ChecklistModel([],[
  new ChecklistItemModel('apple'),
  new ChecklistItemModel('banana'),
  new ChecklistItemModel('orange')
]);

const multiLevelChecklistModelExample: ChecklistModel =  new ChecklistModel([],[
  new ChecklistItemModel('apple', false, false,
  new ChecklistModel([],[
    new ChecklistItemModel('red'),
    new ChecklistItemModel('green'),
    new ChecklistItemModel('yellow')
  ])),
  new ChecklistItemModel('banana'),
  new ChecklistItemModel('orange')
]);

storiesOf('Form elements|Checklist', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(
    moduleMetadata({
      declarations: [
        ChecklistComponent
      ],
      imports: [
        FormElementsModule
      ]
    })
  )
  .add('Simple checklist', () => {
        const _checkedChange = text('*(checkedChange)', 'Event throws when checklist changed, see in Action logger tab.');
        const _testId = text('testId', 'check-list-test-id');

      return {
        props: {
            checkedChange: action('Checklist changed '),
            _testId, simpleCheckListModelExample
        },
        template: `
        <sdc-checklist
                [checklistModel]="simpleCheckListModelExample"
                [testId]="_testId"
                (checkedChange)="checkedChange($event)">
            </sdc-checklist>
        `
      }
    },
    { notes: `<h2>Simple Checkbox</h2>
        Full example of checklist.
        Use the KNOBS tab to change values.`
    }
)
.add('Multi-level checklist', () => {
  const _checkedChange = text('*(checkedChange)', 'Event throws when checklist changed, see in Action logger tab.');
  const _testId = text('testId', 'check-list-test-id');

  return {
    props: {
        checkedChange: action('Checklist changed '),
        _testId, multiLevelChecklistModelExample
    },
    template: `
    <sdc-checklist
            [checklistModel]="multiLevelChecklistModelExample"
            [testId]="_testId"
            (checkedChange)="checkedChange($event)">
        </sdc-checklist>
    `
  }
  },
  { notes: `<h2>Multi-level Checkbox</h2>
    Multi level checklist contains childs checkboxes.`
  }
)
