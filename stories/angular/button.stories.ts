import { storiesOf } from '@storybook/angular';
import { ButtonComponent } from '../../src/angular/buttons/button.component';
import { moduleMetadata } from '@storybook/angular';
import { SvgIconModule } from '../../src/angular/svg-icon/svg-icon.module';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean, array, select, color, date, button } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';

const buttonTypes = ['primary', 'secondary', 'link', 'success', 'error', 'warning', 'info'];
const buttonSizes = ['large', 'medium', 'small', 'x-small', 'default'];
const positions = ['right', 'left'];
const iconsNames = ['settings-o', 'plus-circle-o', 'plus-circle', 'caret2-right-circle-o'];

/**
 * There is strange behaviour with Storybook storyname, if the name is string 'aaaa', then all stories 
 * need to be string, you can not do const aaaa = 'aaaa' and pass the parameter aaaa as storyname.
 */
const storiesNames = {
  defaultButton: 'Default button',
  typesButtons: 'Button ',
  withIcon: 'Button with icon',
  withSpinner: 'Button with spinner'
}

let stories = storiesOf('Buttons', module)
.addDecorator(withKnobs)
.addDecorator(withNotes)
.addDecorator(
  moduleMetadata({
    declarations: [ButtonComponent],
    imports: [
      SvgIconModule
    ]
  })
);

stories.add(storiesNames.defaultButton, () => {

  const _text1 = text('text', 'Default button long text');
  const _testId1 = text('testId', 'button-test-id-1');
  const click1 = text('(click)', 'call back function');

  const _text2 = text('text', 'Sample button');
  const _testId2 = text('testId', 'button-test-id-2');
  const click2 = text('(click)', 'call back function');

  return {
    props: {
      buttonClick1: action('Button 1 was clicked'),
      buttonClick2: action('Button 2 was clicked'),
      _text1, _testId1,
      _text2, _testId2
    },
    template: `
      <div class='storybook-component-wrapper'>
        <div class='storybook-component-info'>With large text</div>
        <sdc-button
            [text]="_text1"
            [testId]="_testId1"
            (click)="buttonClick1()"
            >
        </sdc-button>
        
        <div class='storybook-component-info'>With small text</div>
        <sdc-button
          [text]="_text2"
          [testId]="_testId2"
          (click)="buttonClick2()"
          >
        </sdc-button>
      </div>
    `
    }
  },
  { notes: `<h2>Default button</h2>
            Does not need to supply type or size.
            The size of the button set to 'default' so it will shrink or expand according to the content.`
  }
);

buttonTypes.forEach((buttonType) => {

  stories.add(storiesNames.typesButtons + buttonType, () => {

      const _text = text('text', buttonType);
      const _type = text('type', buttonType);
      // Do not allow this, because we are showing each button type as different story.
      // const _type = select('type', buttonTypes, buttonType, '');
      const _testId = text('testId', 'button-test-id-' + buttonType);
      // No need to add the size to prop, not using it
      const _size = text('size', 'Avilable sizes: ' + buttonSizes);
      const _disabled = boolean('disabled', true);
      const click = text('(click)', 'call back function');

      return {
        props: {
          buttonClick: action('Button was clicked (see in action logger tab)'),
          _text, _testId, _type, _disabled
        },
        template: 
          `<div class='storybook-new-row'>` + 
            buttonSizes.map((currentSize) => `
            <div class='storybook-component-wrapper'>
              <div class='storybook-component-info'>${currentSize} size</div>
              <sdc-button
                    [text]="_text"
                    [type]="_type"
                    size="${currentSize}"
                    [testId]="_testId"
                    (click)="buttonClick()">
                </sdc-button>
              </div>
              `).join('\n') + 
          `</div>
          <div class='storybook-new-row'>` 
          .concat(
              buttonSizes.map((currentSize) => `
                <div class='storybook-component-wrapper'>
                  <sdc-button
                      [text]="_text"
                      [type]="_type"
                      size="${currentSize}"
                      [testId]="_testId"
                      [disabled]="_disabled"
                      (click)="buttonClick()">
                  </sdc-button>
                </div>
                `).join('\n') + 
          '</div>'
          )
        };

    });
});

stories.add(storiesNames.withIcon, () => {

  const _text = text('text', 'Sample');
  const _testId = text('testId', 'button-test-id-with-icon');
  const _type = select('type', buttonTypes, 'primary', '');
  const _icon_position = select('icon_position', positions, 'left', '');
  const _icon_name = select('icon_name', iconsNames, 'settings-o', '');
  const click = text('(click)', 'call back function');

  return {
    props: {
      buttonClick: action('Button was clicked (see in action logger tab)'),
      _text, _testId, _type, _icon_position, _icon_name
    },
    template: `
        <sdc-button
            [text]="_text"
            [testId]="_testId"
            [type]="_type"
            [icon_name]="_icon_name"
            [icon_position]="_icon_position"
            (click)="buttonClick()"
          >
        </sdc-button>
      `
    };

});

stories.add(storiesNames.withSpinner, () => {

  const _text = text('text', 'Spinner button');
  const _testId = text('testId', 'button-test-id-with-icon');
  const _type = select('type', buttonTypes, 'primary', '');
  const _show_spinner = boolean('show_spinner', false, '');
  const _spinner_position = select('spinner_position', positions, 'right', '');
  const click = text('(click)', 'call back function');

  return {
    props: {
      buttonClick: (button) => {
        button.show_spinner = true;
        setTimeout(() => {button.show_spinner = false},2000);
        action('Button was clicked (see in action logger tab)');
      },
      _text, _testId, _type, _show_spinner, _spinner_position
    },
    template: `
      <sdc-button
          #button
          [text]="_text"
          [testId]="_testId"
          [type]="_type"
          [show_spinner]="_show_spinner"
          [spinner_position]="_spinner_position"
          (click)="buttonClick(button)"
          >
        </sdc-button>
      `
    };

});
