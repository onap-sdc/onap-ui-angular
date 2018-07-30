import { storiesOf } from '@storybook/angular';
import { withKnobs, text, number, boolean, array, select, color, date, button } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { action, configureActions } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { TileModule } from '../../src/angular/tiles/tile.module';
import { SvgIconModule } from '../../src/angular/svg-icon/svg-icon.module';
import { Mode, Size, BackgroundShape, BackgroundColor } from "../../src/angular/common/enums";

const mode = Object.keys(Mode);
const size = Object.keys(Size);
const background_shape: Array<string> = Object.keys(BackgroundShape);
const background_color: Array<string> = Object.keys(BackgroundColor);


storiesOf('Form elements|Tiles', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(
    moduleMetadata({
      declarations: [
      
      ],
      imports: [
        TileModule,
        SvgIconModule
      ]
    })
  )
  .add('Tiles', () => {
      const _header = text('tile header', "Header");
      const _mode = select('mode', mode, 'primary', '');
      const _size = select('size', size, 'medium', '');
      const _backgroundShape = select('backgroundShape', background_shape, '', '');
      const _backgroundColor = select('backgroundColor', background_color, '', '');
      const _debug_icon = boolean('Debug icon', false);
      const _footer = text('tile footer', "Footer");
      return {
        props: {
            _header, _mode, _size, _backgroundShape, _backgroundColor, _debug_icon, _footer
        },
        template: `
        <sdc-tile>
            <sdc-tile-header>
                <span class="sdc-tile-header-cell">{{_header}}</span>
            </sdc-tile-header>
            <sdc-tile-content>
            <div class='storybook-icons-showcase'>
                <div class='storybook-component-wrapper'>
                    <div class='storybook-component-info'>Applcation Server-24px</div>
                    <svg-icon 
                        [ngClass]="{'storybook-debug-icon': _debug_icon===true}"
                        category="resources_24"
                        name="Applcation Server-24px"
                        [mode]="_mode" 
                        [size]="_size"
                        [backgroundShape]="_backgroundShape"
                        [backgroundColor]="_backgroundColor"
                        >
                    </svg-icon>
                </div>
                </div>
            </sdc-tile-content>
            <sdc-tile-footer>
                <span class="sdc-tile-footer-cell">{{_footer}}</span>
            </sdc-tile-footer>
        </sdc-tile>
        `
      }
    },
    { notes: `<h2>Tiles</h2>
            Full example of tiles.
            Use the KNOBS tab to change values.`
    }
)
