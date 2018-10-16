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


let stories = storiesOf('Tiles', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(
    moduleMetadata({
      declarations: [
      
      ],
      imports: [
        TileModule,
        SvgIconModule,
      ]
    })
  )

  createStory(stories, "Tiles", "Tiles", "Full example of tiles.");

  function createStory(stories, title, notesTitle, notesText){
    stories.add(title, () => {
        const _type = text('Type', 'resources_60')
        const _name = text('Icon name', 'borderElement')
        const _mode = select('Mode', mode, 'primary', '');
        const _size = select('Size', size, 'x_large', '');
        const _backgroundShape = select('BackgroundShape', background_shape, '', '');
        const _backgroundColor = select('BackgroundColor', background_color, '', '');
        const _testId = text('testId', 'tile-test-id');
        const _disabled = boolean('Disabled', false);
        
        return {
            props: {
                _type, _name, _mode, _size, _backgroundShape, _backgroundColor, _disabled, _testId
            },
            template: `
            <sdc-tile [testId]="_testId">
                <sdc-tile-header >
                    <div class="blue">P</div>
                </sdc-tile-header>
                <sdc-tile-content>
                    <div class='sdc-tile-content-icon blue'>
                        <svg-icon 
                            [ngClass] = "{'storybook-debug-icon': _debug_icon===true}"
                            [type] = "_type"
                            [name] = "_name"
                            [mode] = "_mode" 
                            [size] = "_size"
                            [backgroundShape] = "_backgroundShape"
                            [backgroundColor] = "_backgroundColor"
                            [disabled] = "_disabled"
                            >
                        </svg-icon>
                    </div>
                    <div class="sdc-tile-content-info">
                    <span class="sdc-tile-info-line title">Router</span>
                    <div class="sdc-tile-info-line subtitle">test</div>
                </div>
                </sdc-tile-content>
                <sdc-tile-footer>
                    <span class="sdc-tile-footer-cell">Footer</span>
                </sdc-tile-footer>
            </sdc-tile>
            `
        }
        },
        { notes: `<h2>` + notesTitle + `</h2>` + notesText + `<br>Use the KNOBS tab to change values.`
        }
    )
  }
