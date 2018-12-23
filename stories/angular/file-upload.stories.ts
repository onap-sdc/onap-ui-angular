import { storiesOf } from '@storybook/angular';
import { withKnobs, text, number, boolean, array, select, color, date, button } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { action, configureActions } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import {ButtonsModule} from "../../src/angular/buttons/buttons.module";
import {InputModule} from "../../src/angular/form-elements/text-elements/input/input.module";
import {FileUploadModule} from "../../src/angular/file-upload/file-upload.module";
import {SvgIconModule} from "../../src/angular/svg-icon/svg-icon.module";

storiesOf('File Upload', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(
    moduleMetadata({
      declarations: [
      ],
      imports: [
        InputModule,
        ButtonsModule,
        FileUploadModule,
        SvgIconModule
      ]
    })
  )
  .add('File Upload', () => {
      const _label = text('label', 'File Upload label');
      const _placeholder = text('placeholder', 'File Upload placeholder');
      // const _searchQuery = text('searchQuery', '');
      const _testId = text('testId', 'file-upload-test-id');
      // const _searchQueryOutput = text('*(searchQuery)', 'Event throws when search query changed');
      // const _searchQueryChange = text('*(searchQueryEvent)', 'Event throws when search query changed, see in Action logger tab.');

      return {
        props: {
          onChange: action('Search query value changed '),
          _label,  _placeholder,  _testId
        },
        template: `
        <sdc-file-upload
            [placeHolder]="_placeholder"
            [label]="_label"
            [debounceTime]="_debounceTime"
            [(value)]="_searchQuery"
            [testId]="_testId"
            (searchQueryEvent)="onChange($event)">
        </sdc-file-upload>
        `
      }
    },
    { notes: `<h2>Filterbar</h2>
            The filter bar component text is updated (after debounce time, default 200 miliseconds) while user write something.
            Use the KNOBS tab to change values.`
    }
  )
