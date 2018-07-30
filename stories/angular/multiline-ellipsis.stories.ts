import { storiesOf } from '@storybook/angular';
import { withKnobs, text, number, boolean, array, select, color, date, button } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { action, configureActions } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { MultilineEllipsisModule } from '../../src/angular/multiline-ellipsis/multiline-ellipsis.module';
import { ButtonsModule } from '../../src/angular/buttons/buttons.module';
import { ButtonComponent } from '../../src/angular/buttons/button.component';

let stories = storiesOf('Form elements|Multiline ellipsis', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(
    moduleMetadata({
      declarations: [
        
      ],
      imports: [
        MultilineEllipsisModule,
        ButtonsModule
      ]
    })
  )
  createStory(stories, "All options", true, true, true, true, "Multiline-ellipsis", "Full example of simple multiline ellipsis.");
  createStory(stories, "With number of line", true, false, false, false, "Multiline-ellipsis", "Example of simple multiline ellipsis With number of line.");
  createStory(stories, "With line hight", false, true, false, false, "Multiline-ellipsis", "Example of simple multiline ellipsis With line hight.");
  createStory(stories, "With class name", false, false, true, false, "Multiline-ellipsis", "Example of simple multiline ellipsis With class name.");
  createStory(stories, "With change text", false, false, false, true, "Multiline-ellipsis", "Example of simple multiline ellipsis With change text.");

  function createStory(stories, title, containslines, containslineHeight, containsClassName, containsChangeText, notesTitle, notesText){
    stories.add(title, () => {
        const _lines = containslines || containslineHeight ? number('number of lines', 3) : null;
	      const _lineHeight = containslineHeight ? text('Line height', '18px') : null;
        const _className = containsClassName ? text('Class name', 'yellow-ellipsis'): null;
        const _shortText = containsChangeText ? text('Short text', 'Short text - No ellipsis!') :null;
        const _longText = text('Long text','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et molestie erat, sit amet rutrum purus. Mauris tristique efficitur felis, rutrum scelerisque enim sodales eu. Cras tristique ipsum a elementum auctor. Donec et elit id sapien tempus posuere. Nulla condimentum semper nisi, ac convallis augue dignissim nec. Nunc vestibulum nisi metus, ac rutrum enim consectetur nec. Vivamus volutpat ac risus aliquet iaculis.\nVestibulum et ex egestas, scelerisque enim et, vehicula nisi. Aenean posuere ornare dolor, in laoreet turpis mattis in. Fusce sodales blandit ornare. Donec porta eros vel tellus consequat, a ultricies augue ullamcorper. Vestibulum dolor diam, auctor ac magna quis, aliquet tincidunt odio. Nulla eu cursus metus. Maecenas laoreet in risus vel suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis facilisis orci rhoncus pharetra pretium. Nam blandit arcu lobortis eros luctus lobortis. Integer gravida iaculis finibus.')
        const _hasEllipsisChanged = text('*(hasEllipsisChanged)', 'Event throws when number of lines or line height or class name changed, see in Action logger tab.');
        return {
            props: {
              showSortText: false,
              hasEllipsis: true,
              hasEllipsisChanged: action('Ellipsis changed and its'),
              _lines, _lineHeight, _className, _shortText, _longText
            },
            template: containsChangeText ? `
            <multiline-ellipsis
                [lines]="_lines"
                [lineHeight]="_lineHeight"
                [className]="_className"
                (hasEllipsisChanged)="this.hasEllipsis = $event"
                (hasEllipsisChanged)="hasEllipsisChanged($event)"
                >{{ this.showSortText ? _shortText : _longText }}
            </multiline-ellipsis>
            <br/>
            <sdc-button (click)="this.showSortText = !this.showSortText;" text="Toggle Text Length"></sdc-button>
            <br/>
            <span class="y">has ellipsis? <b>{{ this.hasEllipsis ? 'yes' : 'no' }}</b></span>`: `<multiline-ellipsis
            [lines]="_lines"
            [lineHeight]="_lineHeight"
            [className]="_className"
            (hasEllipsisChanged)="this.hasEllipsis = $event"
            (hasEllipsisChanged)="hasEllipsisChanged($event)"
            >{{ this.showSortText ? _shortText : _longText }}
        </multiline-ellipsis>` 
        }
        },
        { notes: `<h2>` + notesTitle + `</h2>` + notesText + `<br>Use the KNOBS tab to change values.`
        }
    )
  }
