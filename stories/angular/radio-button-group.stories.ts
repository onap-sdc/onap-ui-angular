import { storiesOf } from '@storybook/angular';
import { withKnobs, text, number, boolean, array, select, color, date, button } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { action, configureActions } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { RadioGroupComponent } from '../../src/angular/components';
import { FormElementsModule } from '../../src/angular/form-elements/form-elements.module';

let stories = storiesOf('Form elements|Radio button group', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(
    moduleMetadata({
      declarations: [
      
      ],
      imports: [
          FormElementsModule
      ]
    })
  )
  let containsLegend = true;
  let containsDisabled = true;
  let containsDirection = true;
  createStory(stories, "All options", containsLegend, containsDisabled, containsDirection, "Radio buttons group", "Full example of radio buttons.");
  createStory(stories, "With legend", containsLegend, !containsDisabled, !containsDirection, "Radio buttons group", "Example of radio buttons with legend.");
  createStory(stories, "With disabled", !containsLegend, containsDisabled, !containsDirection, "Radio buttons group", "Example of radio buttons with disabled.");
  createStory(stories, "With direction", !containsLegend, !containsDisabled, containsDirection, "Radio buttons group", "Example of radio buttons with direction.");
  function createStory(stories, title, containsLegend, containsDisabled, containsDirection, notesTitle, notesText){
    stories.add(title, () => {
        const _legend = containsLegend ? text('legend','Radio Buttons Group legend') : null;
        const _options = {
            items: [{
                value:'val1',
                name: 'radio8',
                label: 'Label of Radio1'
            }, {
                value:'val2',
                name: 'radio8',
                label: 'Label of Radio2'
            }]
        };
        const _disabled = containsDisabled ? boolean('disabled', false) : null;
        const _direction = containsDirection ? text('direction','horizontal') : null;
        const _selectedValue = text('selected value', 'val1');
        const _testId = text('testId', 'radio-button-test-id');
        const _selectedValueChange = text('*(valueChange)', 'Event throws when selected radio button, see in Action logger tab.');

        return {
            props: {
                selectRadioButton: action('select radio button'),
                _legend, _disabled, _direction, _options, _selectedValue, _testId
            },
            template: `
            <sdc-radio-group
                [legend]="_legend"
                [(value)]="_selectedValue"
                [options] = "{
                    items: [
                        {
                            value: 'val1',
                            name: 'radio5',
                            label: 'Label of Radio 1',
                            disabled: 'false'
                        },
                        {
                            value: 'val2',
                            name: 'radio5',
                            label: 'Label of Radio 2',
                            disabled: 'false'
                        }
                    ]}"
                [disabled]="_disabled"
                [direction]="_direction"
                [testId]="_testId"
                (valueChange)= "selectRadioButton($event)"
                ></sdc-radio-group>
            <br><div>Selected Radio: {{_selectedValue}}</div>
            `
        }
        },
        { notes: `<h2>` + notesTitle + `</h2>` + notesText + `<br>Use the KNOBS tab to change values.`
        }
    )
  }
