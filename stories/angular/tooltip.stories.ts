import { storiesOf } from '@storybook/angular';
import { withKnobs, text, number, boolean, array, select, color, date, button, object } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { action, configureActions } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { TooltipModule } from '../../src/angular/tooltip/tooltip.module';
import { TooltipPlacement, ArrowPlacement } from '../../src/angular/tooltip/tooltip.directive';

let stories = storiesOf('Tooltip', module)
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
  let containsShortText = true;
  let containsPlaceMent = true;
  let containsCustomCssClass = true;
  let containsArrowOffset = true;
  let containsArrowPlacement = true;
  let containsTooltipOffset = true;
  let containsTemplate = true
  createStory(stories, "All options", containsShortText, containsPlaceMent, containsCustomCssClass, containsArrowOffset,
    containsArrowPlacement, containsTooltipOffset, !containsTemplate, "Tooltip", "Full example of Tooltip.");
  createStory(stories, "Multi lines", !containsShortText, !containsPlaceMent, !containsCustomCssClass, !containsArrowOffset,
    !containsArrowPlacement, !containsTooltipOffset, !containsTemplate, "Tooltip", "Example of Tooltip with multi lines.");
  createStory(stories, "Placement", containsShortText, containsPlaceMent, !containsCustomCssClass, !containsArrowOffset,
    !containsArrowPlacement, !containsTooltipOffset, !containsTemplate, "Tooltip", "Example of Tooltip with placement.");
  createStory(stories, "Customer css class", containsShortText, !containsPlaceMent, containsCustomCssClass,!containsArrowOffset,
    !containsArrowPlacement, !containsTooltipOffset, !containsTemplate, "Tooltip", "Full example of Tooltip with customer css class.");
  createStory(stories, "Arrow offset", containsShortText, !containsPlaceMent, !containsCustomCssClass, containsArrowOffset,
    !containsArrowPlacement, !containsTooltipOffset, !containsTemplate, "Tooltip", "Full example of Tooltip with arrow offset.");
  createStory(stories, "Arrow placement", containsShortText, !containsPlaceMent, !containsCustomCssClass, !containsArrowOffset,
    containsArrowPlacement, !containsTooltipOffset, !containsTemplate, "Tooltip", "Full example of Tooltip with arrow placement.");
  createStory(stories, "Tooltip offset", containsShortText, !containsPlaceMent, !containsCustomCssClass, !containsArrowOffset,
    !containsArrowPlacement, containsTooltipOffset, !containsTemplate, "Tooltip", "Full example of Tooltip with tooltip offset.");
  createStory(stories, "Tooltip with template", containsShortText, !containsPlaceMent, !containsCustomCssClass,!containsArrowOffset,
    !containsArrowPlacement, !containsTooltipOffset, containsTemplate, "Tooltip", "Full example of Tooltip with template.");

  function createStory(stories, title, containsShortText, containsPlaceMent, containsCustomCssClass, containsArrowOffset,
                containsArrowPlacement, containsTooltipOffset, containsTemplate, notesTitle, notesText){
    stories.add(title, () => {
        const _text = text('Text', containsShortText ? 'A short text name, short text' : 'Lorem ipsum dolor sit amet, ' +
                'consectetur adipiscing elit. Sed risus nisl, egestas vitae erat non, pulvinar lacinia libero. Integer ' + 
                'pulvinar pellentesque accumsan. Sed hendrerit lacus eu tempus pharetra');
        const _placement = containsPlaceMent ? object('placement', TooltipPlacement.Top) : TooltipPlacement.Top;               
        const _customCssClass = containsCustomCssClass ? text('custom css class', 'sdc-custom-tooltip'): null;
        const _arrowOffset = containsArrowOffset ? number('Arrow offset', 10) : 10;
        const _arrowPlacement = containsArrowPlacement ? object('Arrow placement',  ArrowPlacement.LeftTop) : ArrowPlacement.LeftTop; 
        const _tooltipOffset = containsTooltipOffset ? number('Tooltip offset', 3): 3;

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
