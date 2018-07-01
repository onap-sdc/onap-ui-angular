import { storiesOf } from '@storybook/angular';
import { withKnobs, text, number, boolean, array, select, color, date, button } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { action, configureActions } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { AccordionComponent, SvgIconComponent } from '../../src/angular/components';
import { SvgIconModule } from '../../src/angular/svg-icon/svg-icon.module';
import { Mode, Placement, Size, BackgroundShape, ButtonType, BackgroundColor } from "../../src/angular/common/enums";

const mode = Object.keys(Mode);
const size = Object.keys(Size);
const icons_names = Object.keys(SvgIconComponent.Icons)
const background_shape = Object.keys(BackgroundShape);
const background_color = Object.keys(BackgroundColor);

storiesOf('Icons', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(
    moduleMetadata({
      declarations: [SvgIconComponent],
      imports: [
      ]
    })
  ).add('Icons show case', () => {

    const _debug_icon = boolean('Debug icon', false);

    return {
      props: {
        _debug_icon
      },
      template: 
        `<div class='storybook-icons-showcase'>` + 
          icons_names.map((iconName) =>
            `
            <div class='storybook-component-wrapper'>
              <div class='storybook-component-info'>${iconName}</div>
              <svg-icon 
                  [ngClass]="{'storybook-debug-icon': _debug_icon===true}"
                  name="${iconName}" 
                  mode="primary" 
                  size="large"
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
  .add('Icon full options', () => {
        const _mode = select('mode', mode, 'primary', '');
        const _size = select('size', size, 'medium', '');
        const _name = select('name', icons_names, 'alert-triangle-o', '');
        const _backgroundShape = select('backgroundShape', background_shape, BackgroundShape.circle, '');
        const _backgroundColor = select('backgroundColor', background_color, BackgroundColor.warning, '');
        const _disabled = boolean('disabled', false);
        const _clickable = boolean('clickable', true);
        const _className = text('className', '');

      return {
        props: {
            _mode, _size, _name, _backgroundShape, _backgroundColor, _disabled, _clickable, _className
        },
        template: `
        <div class='storybook-component-wrapper'>
          <div class='storybook-component-info'>Without background color</div>
          <svg-icon 
              [name]="_name" 
              [mode]="_mode" 
              [size]="_size"
              [disabled]="_disabled"
              [clickable]="_clickable"
              [className]="_className"
              >
          </svg-icon>
        </div>
        <div class='storybook-component-wrapper'>
          <div class='storybook-component-info'>With background color</div>
          <svg-icon 
              [name]="_name" 
              [mode]="_mode" 
              [size]="_size"
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
