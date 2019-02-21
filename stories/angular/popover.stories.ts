import { storiesOf } from '@storybook/angular';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { moduleMetadata } from '@storybook/angular';
import { ButtonsModule } from '../../src/angular/buttons/buttons.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopOverComponent } from './helpers/popover';
import {PopoverService} from "../../src/angular/popover/popover.service";
import {PopoverModule} from "../../src/angular/popover/popover.module";
import {ModalInnerContent} from "./helpers/modal-inner-content-example.component";
import {FormElementsModule} from "../../src/angular/form-elements/form-elements.module";


let stories = storiesOf('Popover', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(
    moduleMetadata({
      declarations: [PopOverComponent,ModalInnerContent],
      imports: [PopoverModule, ButtonsModule, BrowserAnimationsModule, FormElementsModule,ButtonsModule],
      providers: [PopoverService],
      entryComponents:[ModalInnerContent]
    })
  );

createMenuListStory(stories, 'Click on button - content only', 'simple', '','Simple popover ', 'left');
createMenuListStory(stories, 'Click on button - Title and content', 'simple', 'Hello! i’m a title','Simple popover with content and title, opens when click on a button.','left');
createMenuListStory(stories, 'Click on button - with Inner Component', 'complex', 'Hello! i’m a title','Popover with inner component, content and title, opens when click on a button.', 'bottom');

function createMenuListStory(stories, title, popoverTemplate, popoverTitle, popoverContent, popoverLocation) {
  stories.add(title, () => {
      const _title = text('title', popoverTitle);
      const _content = text('content', popoverContent);
      const _popoverTemplate = text('popoverTemplate', popoverTemplate);
      const _popoverLocation = text('popoverLocation', popoverLocation);
      return {
        props: {
          _title,
          _content,
          _popoverTemplate,
          _popoverLocation
        },
        template: `
                <popover [template]="_popoverTemplate" [title] = "_title" [content] = "_content" [popoverLocation]= "_popoverLocation"></popover>
            `,
      };
    },
    {
      notes: `<h2>` + `Popover` + `</h2>` + "Simple popover with content only, opens when click on a button.<br> Close on X or outside the Popover window" + `<br>`,
    }
  );

}
