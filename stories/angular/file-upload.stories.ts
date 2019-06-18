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
      const _testId = text('testId', 'file-upload-test-id');
      const _extensions = text('extensions', 'pdf,zip');
      const _convertToBase64 = boolean('convertToBase64', false);

      return {
        props: {
          onChange: action('File Upload value changed '),
          _label,  _placeholder,  _testId, _extensions, _convertToBase64
        },
        template: `
        <onap-file-upload
            [placeHolder]="_placeholder"
            [label]="_label"
            [testId]="_testId"
            [extensions]="_extensions"
            [convertToBase64]="_convertToBase64"
            (fileUpload)="onChange($event)">
        </onap-file-upload>
        `
      }
    },
    { notes: `<h2>File Upload</h2>
            Extensions is a comma separated list of allowed extensions.
            ConvertToBase64 indicates whether the file should be emitted in base64 format. This value is false by default.
            Use the KNOBS tab to change values.`
    }
  )
