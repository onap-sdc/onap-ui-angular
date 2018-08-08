import { storiesOf } from '@storybook/angular';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { moduleMetadata } from '@storybook/angular';
import { SvgIconComponent } from '../../src/angular/components';
import { Mode, Size, BackgroundShape, BackgroundColor } from "../../src/angular/common/enums";

const mode = Object.keys(Mode);
const size = Object.keys(Size);
const icons_categories: Array<string> = Object.keys(SvgIconComponent.Icons());
const background_shape: Array<string> = Object.keys(BackgroundShape);
const background_color: Array<string> = Object.keys(BackgroundColor);

const caption_full_options = 'Icon full options';

let stories = storiesOf('Icons|Show case', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(
    moduleMetadata({
      declarations: [SvgIconComponent],
      imports: [
      ]
    })
  );

  background_shape.push(undefined);
  background_color.push(undefined);

icons_categories.map((type) =>

  stories.add(type, () => {

      let _mode = select('mode', mode, 'primary', '');
      let _size = select('size', size, 'medium', '');
      let _backgroundShape = select('backgroundShape', background_shape, '', '');
      let _backgroundColor = select('backgroundColor', background_color, '', '');
      const _debug_icon = boolean('Debug icon', false);

      if (type === 'resources_60' || type === 'services_60') {
        _mode = select('mode', mode, 'white', '');
        _size = select('size', size, 'x_large', '');
        _backgroundShape = select('backgroundShape', background_shape, 'circle', '');
        _backgroundColor = select('backgroundColor', background_color, 'primary', '');
      }

      return {
        props: {
          _debug_icon, _mode, _size, _backgroundShape, _backgroundColor
        },
        template:
          `<div class='storybook-icons-showcase'>` +
              Object.keys(SvgIconComponent.Icons()[type]).map((iconName) =>
                `
                <div class='storybook-component-wrapper'>
                  <div class='storybook-component-info'>${iconName}</div>
                  <svg-icon
                      [ngClass]="{'storybook-debug-icon': _debug_icon===true}"
                      type="${type}"
                      name="${iconName}"
                      [mode]="_mode"
                      [size]="_size"
                      [backgroundShape]="_backgroundShape"
                      [backgroundColor]="_backgroundColor"
                      >
                  </svg-icon>
                </div>
                `
            ).join('\n') +
          `</div>`
      }
    },
    { notes: `<h2>Showcase of all icons</h2>
              To see all the options for specific icon, select 'Icon full options' in left panel.
              `
    })
);

stories.add(caption_full_options, () => {
        const _mode = select('mode', mode, 'primary', '');
        const _size = select('size', size, 'x_large', '');
        const _type = select('type', icons_categories, 'common', '');
        const _name = select('name', Object.keys(SvgIconComponent.Icons().common), 'alert-triangle-o', '');
        const _backgroundShape = select('backgroundShape', background_shape, '', '');
        const _backgroundColor = select('backgroundColor', background_color, '', '');
        const _disabled = boolean('disabled', false);
        const _clickable = boolean('clickable', true);
        const _className = text('className', '');

      return {
        props: {
            _mode, _size, _name, _backgroundShape, _backgroundColor, _disabled, _clickable, _className, _type
        },
        template: `
        <div class='storybook-component-wrapper'>
          <div class='storybook-component-info'>Full options, look in the KNOBS options</div>
          <svg-icon
              [name]="_name"
              [mode]="_mode"
              [size]="_size"
              [type]="_type"
              [backgroundShape]="_backgroundShape"
              [backgroundColor]="_backgroundColor"
              [disabled]="_disabled"
              [clickable]="_clickable"
              [className]="_className"
              >
          </svg-icon>
        </div>
        `
      }
    },
    { notes: `<h2>SVG icon full example</h2>
              Full example of SVG icon, use the KNOBS tab to change @Inputs.
              `
    }
  );
