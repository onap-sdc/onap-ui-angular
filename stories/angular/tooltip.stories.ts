import { storiesOf } from '@storybook/angular';
import { withKnobs, text, number, boolean, array, select, color, date, button, object } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { action, configureActions } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { TooltipModule } from '../../src/angular/tooltip/tooltip.module';
import { TooltipPlacement, ArrowPlacement } from '../../src/angular/tooltip/tooltip.directive';

let stories = storiesOf('Form elements|Tooltip', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(
    moduleMetadata({
      declarations: [
      ],
      imports: [
        TooltipModule
      ]
    })
  )
  createStory(stories, "All options", true, true, true, true, true, true, false, "Tooltip", "Full example of Tooltip.");
  createStory(stories, "Multi lines", false, false, false, false, false, false, false, "Tooltip", "Example of Tooltip "+
        "with multi lines.");
  createStory(stories, "Placement", true, true, false, false, false, false, false, "Tooltip", "Example of Tooltip with " +
        "placement.");
  createStory(stories, "Customer css class", true, false, true, false, false, false, false, "Tooltip", "Full example of "+
        "Tooltip with customer css class.");
  createStory(stories, "Arrow offset", true, false, false, true, false, false, false, "Tooltip", "Full example of "+
        "Tooltip with arrow offset.");
  createStory(stories, "Arrow placement", true, false, false, false, true, false, false, "Tooltip", "Full example of "+
        "Tooltip with arrow placement.");
  createStory(stories, "Tooltip offset", true, false, false, false, false, true, false, "Tooltip", "Full example of "+
        "Tooltip with tooltip offset.");
  createStory(stories, "Tooltip with template", true, false, false, false, false, false, true, "Tooltip", "Full example of "+
        "Tooltip with template.");

  function createStory(stories, title, containsShortText, containsPlaceMent, containsCustomCssClass, containsArrowOffset,
                containsArrowPlacement, containsTooltipOffset, containsTemplate, notesTitle, notesText){
    stories.add(title, () => {
        const _text = text('Text', containsShortText ? 'A short text name, short text' : 'Lorem ipsum dolor sit amet, ' +
                'consectetur adipiscing elit. Sed risus nisl, egestas vitae erat non, pulvinar lacinia libero. Integer ' + 
                'pulvinar pellentesque accumsan. Sed hendrerit lacus eu tempus pharetra');
        const _placement = containsPlaceMent ? object('placement', TooltipPlacement.Top) : null;               
        const _customCssClass = containsCustomCssClass ? text('custom css class', 'sdc-custom-tooltip'): null;
        const _arrowOffset = containsArrowOffset ? number('Arrow offset', 10) : null;
        const _arrowPlacement = containsArrowPlacement ? object('Arrow placement',  ArrowPlacement.LeftTop) : null; 
        const _tooltipOffset = containsTooltipOffset ? number('Tooltip offset', 3): null;

        return {
            props: {
                selectTab: action('select tab changed'),
                _text, _placement, _customCssClass, _arrowOffset, _arrowPlacement, _tooltipOffset,
                containsTemplate
            },
            template: `
            <div style="padding-bottom: 20px; width: 350px;">Lorem ipsum dolor sit amet,
                <span  style="color: #009fdb"
                    sdc-tooltip
                        [tooltip-text] = "_text"
                        [tooltip-placement] = "_placement"
                        [tooltip-css-class] = "_customCssClass"
                        [tooltip-arrow-placement] = "_arrowPlacement"
                        [tooltip-arrow-offset] = "_arrowOffset"
                        [tooltip-offset] = "_tooltipOffset"
                        [tooltip-template] = "containsTemplate ? template : null"
                        >show tooltip
                </span>
            </div>
            <ng-template #template>
                <img src="../../../assets/images/logo_onap.png" class="sdc-custom-tooltip-template-image" />
                <p class="sdc-tooltip-template-content">A long text name, very long, long text ...</p>
            </ng-template>
            `
        }
        },
        { notes: `<h2>` + notesTitle + `</h2>` + notesText + `<br>Use the KNOBS tab to change values.`
        }
    )
  }
