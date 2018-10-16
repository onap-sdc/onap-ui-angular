import { storiesOf } from '@storybook/angular';
import { withKnobs, text, number, boolean, array, select, color, date, button, object } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { action, configureActions } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { AutoCompleteComponent, AutocompletePipe } from '../../src/angular/components';
import { SearchModule } from '../../src/angular/search/search.module';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

storiesOf('AutoComplete', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(
    moduleMetadata({
      declarations: [
          AutoCompleteComponent
      ],
      imports: [
          SearchModule,
          BrowserAnimationsModule
      ],
      providers: [
          HttpClient, HttpHandler, AutocompletePipe
      ]
    })
  )
  .add('Simple data', () => {
    const sampleData = ['red', 'yellow', 'orange', 'green', 'white', 'black'];

    const _label = text('label', 'Simple data (Array)');
    const _placeholder = text('placeholder', 'Simple data');
    const _data = array('data', sampleData, ',');
    const _event = text('(itemSelected)', 'Event thrown when item selected');
    const _testId = text('testId', 'autocomplete-test-id');

      return {
        props: {
            itemSelected: action('Item was selected '),
            _label, _placeholder, _data, _event, _testId
        },
        template: `
        <div class='storybook-component-wrapper'>
            <div class='storybook-component-info'>Start writing name of color to see autocomplete in action</div>
            <sdc-autocomplete
                [placeholder]="_placeholder"
                [label]="_label"
                [data]="_data"
                [testId]="_testId"
                (itemSelected)="itemSelected($event)"
                >
            </sdc-autocomplete>
        </div>
        `
      }
    },
    { notes: `<h2>Simple data</h2>
        Using simple data (array), do not need to pass dataSchema.
        `
    }
).add('Complex data', () => {
    const sampleData = [
        {id: 'redId', color: 'red'},
        {id: 'yellowId', color: 'yellow'},
        {id: 'orangeId', color: 'orange'},
        {id: 'greenId', color: 'green'},
        {id: 'whiteId', color: 'white'},
        {id: 'blackId', color: 'black'}
    ];
    const sampleSchema = {key: 'id', value: 'color'};

    const _label = text('label', 'Complex data (Object)');
    const _placeholder = text('placeholder', 'Complex data');
    const _data = array('*data', sampleData, ',');
    const _dataSchema = object('dataSchema', sampleSchema);
    const _event = text('*(itemSelected)', 'Event thrown when item selected');

      return {
        props: {
            itemSelected: action('Item was selected '),
            _label, _placeholder, _data, _dataSchema, _event
        },
        template: `
            <sdc-autocomplete
                [placeholder]="_placeholder"
                [label]="_label"
                [data]="_data"
                [dataSchema]="_dataSchema"
                (itemSelected)="itemSelected($event)"
                >
            </sdc-autocomplete>
            `
        }
    },
    { notes: `<h2>Complex data</h2>
        Using complex data (object), need to pass also dataSchema.
        `
    }
).add('Backend data', () => {
    const sampleSchema = {key: 'id', value: 'color'};

    const _label = text('label', 'Complex data (Object)');
    const _placeholder = text('placeholder', 'Complex data');
    const _dataUrl = text('dataUrl', '../angular/helpers/autocomplete-server-mock.json');
    const _dataSchema = object('dataSchema', sampleSchema);
    const _event = text('*(itemSelected)', 'Event thrown when item selected');

      return {
        props: {
            itemSelected: action('Item was selected '),
            _label, _placeholder, _dataSchema, _dataUrl, _event
        },
        template: `
            <sdc-autocomplete
                [placeholder]="_placeholder"
                [label]="_label"
                [dataUrl]="_dataUrl"
                [dataSchema]="_dataSchema"
                (itemSelected)="itemSelected($event)"
                >
            </sdc-autocomplete>
            `
        }
    },
    { notes: `<h2>Data from server</h2>
        Example of auto complete with complex data from server. (In this example the data is not really filtered, because it is from mock data).
        `
    }
);
