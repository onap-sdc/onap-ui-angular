import { storiesOf } from '@storybook/angular';
import { withKnobs, text, number, boolean, array, select, color, date, button } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { action, configureActions } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { SearchBarComponent, InputComponent } from '../../src/angular/components';
import { FormElementsModule } from '../../src/angular/form-elements/form-elements.module';
import {SearchModule} from "../../src/angular/search/search.module";

storiesOf('Form elements|Searchbar', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(
    moduleMetadata({
      declarations: [

      ],
      imports: [
          SearchModule,
          FormElementsModule
      ]
    })
  )
  .add('Searchbar', () => {
      const _placeholder = text('placeholder', 'Searchbar placeholder');
      const _debounceTime = number('debounceTime', 200);
      const _searchQuery = text('searchQuery', '');
      const _testId = text('testId', 'search-bar-test-id');
      const _searchQueryClick = text('*(searchQueryEvent)', 'Event throws when click on search query, see in Action logger tab.');

      return {
        props: {
            onChange: action('click on search query'),
            _searchQuery, _placeholder, _debounceTime, _testId
        },
        template: `
        <sdc-search-bar
            [placeHolder]="_placeholder"
            [debounceTime]="_debounceTime"
            [(value)]="_searchQuery"
            [testId]="_testId"
            (searchQueryEvent)="onChange($event)">
        </sdc-search-bar>
        `
      }
    },
    { notes: `<h2>Searchrbar</h2>
            The search bar component text is updated (after debounce time, default 200 miliseconds) while user write something.
            Use the KNOBS tab to change values.`
    }
)
