import { storiesOf } from '@storybook/angular';
import { withKnobs, text, boolean, array } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { ComboBoxComponent, AutocompletePipe, AutoCompleteComponent } from '../../src/angular/components';
import { SearchModule } from '../../src/angular/search/search.module';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownResultsModule } from "../../src/angular/form-elements/dropdown/dropdown-result/dropdown-result.module";
import { CommonDirectiveModule } from "../../src/angular/utils/common-directive.module";
import { InputModule } from "../../src/angular/form-elements/text-elements/input/input.module";

storiesOf('ComboBox', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(
    moduleMetadata({
      declarations: [
          ComboBoxComponent,
          AutoCompleteComponent
      ],
      imports: [
          SearchModule,
          InputModule,
          BrowserAnimationsModule,
          DropdownResultsModule,
          CommonDirectiveModule
      ],
      providers: [
          HttpClient, HttpHandler, AutocompletePipe
      ]
    })
  )
  .add('Simple data', () => {
    const sampleData = [
        {value: 'red', label: 'red'},
        {value: 'yellow', label: 'yellow'},
        {value: 'orange', label: 'orange'},
        {value: 'green', label: 'green'},
        {value: 'white', label: 'white'},
        {value: 'black', label: 'black'}
    ];

    const _label = text('label', 'Simple data (Array)');
    const _placeholder = text('placeHolder', 'Find...');
    const _data = array('data', sampleData, ',');
    const _event = text('(itemSelected)', 'Event thrown when item selected');
    const _eventClear = text('(clearInput)', 'Event thrown when input cleared');
    const _value = text('selectedValue', 'red');
    const _defaultRightIcon = text('defaultRightIcon', 'caret1-down-o');
    const _disabled = boolean('disabled', false);
    const _testId = text('testId', 'autocomplete-test-id');

      return {
        props: {
            itemSelected: action('Item was selected '),
            clearInput: action('Input was cleared '),
            _label, _placeholder, _data, _event, _value, _testId, _defaultRightIcon, _disabled, _eventClear
        },
        template: `
        <div class='storybook-component-wrapper'>
            <div class='storybook-component-info'>Start writing name of color to see combo-box in action</div>
            <sdc-combo-box
                [placeHolder]="_placeholder"
                [label]="_label"
                [data]="_data"
                [selectedValue]="_value"
                [testId]="_testId"
                (itemSelected)="itemSelected($event)"
                [defaultRightIcon]="_defaultRightIcon"
                [disabled]="_disabled"
                (clearInput)="clearInput($event)"
                >
            </sdc-combo-box>
        </div>
        `
      }
    },
    { notes: `<h2>Options Array</h2>        `
    }
);
