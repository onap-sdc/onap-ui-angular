import { storiesOf } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { moduleMetadata } from '@storybook/angular';
import { ButtonsModule } from '../../src/angular/buttons/buttons.module';
import { SimplePopupMenuModule } from '../../src/angular/simple-popup-menu/simple-popup-menu.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimplepMenuConsumerComponent } from './helpers/simple-menu-consumer.component';


let stories = storiesOf('Simple Menu', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(
    moduleMetadata({
      declarations: [SimplepMenuConsumerComponent],
      imports: [SimplePopupMenuModule, ButtonsModule, BrowserAnimationsModule],
    })
  );

createMenuListStory(stories, 'Click on document', null, 'Simple popup menu', 'Simple menu list open when click on document.');
createMenuListStory(stories, 'Click on div', 'clickOnDiv', 'Simple popup menu','Simple menu list open when click on div.');
createMenuListStory(stories, 'Click on button', 'clickButton', 'Simple popup menu', 'Simple menu list open when click on button.');
function createMenuListStory(stories, title, template, notesTitle, notesText) {
  stories.add(
    title,
    () => {
      return {
        props: {
          template,
        },
        template: `
                <simple-menu-consumer [template]="template"></simple-menu-consumer>
            `,
      };
    },
    {
      notes: `<h2>` + notesTitle + `</h2>` + notesText + `<br>Use the KNOBS tab to change values.`,
    }
  );
}
