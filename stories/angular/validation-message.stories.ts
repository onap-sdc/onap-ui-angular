import { storiesOf } from '@storybook/angular';
import { withKnobs, text, boolean} from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { moduleMetadata } from '@storybook/angular';
import { FormElementsModule } from '../../src/angular/form-elements/form-elements.module';
import { ValidationMessageComponent } from '../../src/angular/validation-message/validation-message.component';
import { validateStyleParams } from '@angular/animations/browser/src/util';
import { InputComponent } from '../../src/angular/components';

let stories = storiesOf('Validation Message', module)
.addDecorator(withKnobs)
.addDecorator(withNotes)
.addDecorator(
  moduleMetadata({
    declarations: [
      ValidationMessageComponent
    ],
    imports: [
      FormElementsModule
    ]
  })
)

createStory(stories, "Validation Message", "Validation Message", "Display component for validation message only. To be used when logic is controlled by the outside component.");

function createStory(stories, title, notesTitle, notesText){
  stories.add(title, () => {
    const _disabled = boolean('Disabled', false);
    const _message = text('Message','Value is invalid!')
    const _testId = text('Test id', 'validation-message-test-id')

      return {
          props: {
            _disabled, _message, _testId,
            onValueChanged: (input: InputComponent) => {
              input.dirty = !_disabled;
              input.valid = (input.value == "If you change the text, it will be invalid");
            }
          },
          template: `
            <sdc-input #myInput type="text" value="If you change the text, it will be invalid" (valueChange)=onValueChanged(myInput)></sdc-input>
            <sdc-validation-message *ngIf="!myInput.valid" [message]="_message" [disabled]="_disabled" [testId]="_testId"></sdc-validation-message>
          `
      }
      },
      { notes: `<h2>` + notesTitle + `</h2>` + notesText + `<br>Use the KNOBS tab to change values.`
      }
  )
}

