import { storiesOf } from '@storybook/angular';
import { withKnobs, text, number, boolean, array, select, color, date, button } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { action, configureActions } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { FilterBarComponent, InputComponent } from '../../src/angular/components';
import { FormElementsModule } from '../../src/angular/form-elements/form-elements.module';

storiesOf('Form elements|Filterbar', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(
    moduleMetadata({
      declarations: [
        FilterBarComponent
      ],
      imports: [
          FormElementsModule
      ]
    })
  )
  .add('Filterbar', () => {
      const _label = text('label', 'Filterbar label');
      const _placeholder = text('placeholder', 'Filterbar placeholder');
      const _debounceTime = number('debounceTime', 200);
      // const _testId = text('testId', 'smalpe-test-id');
      const _searchQuery = text('searchQuery', '');
      const _testId = text('testId', 'filter-bar-test-id');
      const _searchQueryOutput = text('*(searchQuery)', 'Event throws when search query changed');
      const _searchQueryChange = text('*(searchQueryChange)', 'Event throws when search query changed, see in Action logger tab.');

      return {
        props: {
            onChange: action('Search query value changed '),
            _label, _searchQuery, _placeholder, _debounceTime, _testId
        },
        template: `
        <sdc-filter-bar
            [placeholder]="_placeholder"
            [label]="_label"
            [debounceTime]="_debounceTime"
            [(searchQuery)]="_searchQuery"
            [testId]="_testId"
            (searchQueryChange)="onChange($event)">
        </sdc-filter-bar>
        `
      }
    },
    { notes: `<h2>Filterbar</h2>
            The filter bar component text is updated (after debounce time, default 200 miliseconds) while user write something.
            Use the KNOBS tab to change values.`
    }
)
